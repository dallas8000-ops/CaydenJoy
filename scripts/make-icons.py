"""
CaydenJoy icon generator.

Input:  a square head-and-shoulders photo (kept out of git: cayden_icon_photo.jpg)
Output: every icon the app needs, written into the repo:
  - Android launcher icons (legacy square + round, 5 densities)
  - Android adaptive-icon foreground layer (5 densities) + purple background colour
  - PWA / web icons (CaydenJoy.png used by manifest.json and the TWA build, favicon sizes)

Usage (from the repo root):  python scripts/make-icons.py cayden_icon_photo.jpg .
Then run `npm run android-sync` and rebuild the APK.
"""
import os
import sys
from PIL import Image, ImageDraw, ImageFilter

PURPLE_TOP = (124, 108, 240)    # lighter purple, top-left
PURPLE_BOTTOM = (91, 74, 214)   # theme #6C5CE7 deepened, bottom-right
THEME = '#6C5CE7'
WHITE = (255, 255, 255, 255)
S = 1024  # master size


def gradient_square(size):
    """Diagonal purple gradient, full bleed."""
    base = Image.new('RGB', (size, size))
    px = base.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * (size - 1))
            px[x, y] = tuple(int(PURPLE_TOP[i] + (PURPLE_BOTTOM[i] - PURPLE_TOP[i]) * t) for i in range(3))
    return base.convert('RGBA')


def circle_mask(size, scale=4):
    """Anti-aliased circle mask."""
    big = Image.new('L', (size * scale, size * scale), 0)
    ImageDraw.Draw(big).ellipse((0, 0, size * scale - 1, size * scale - 1), fill=255)
    return big.resize((size, size), Image.LANCZOS)


def photo_badge(face, diameter, ring_ratio=0.045):
    """The photo in a circle with a white ring and a soft shadow. Transparent outside."""
    ring = max(2, int(diameter * ring_ratio))
    pad = int(diameter * 0.06)  # room for the shadow
    total = diameter + pad * 2
    out = Image.new('RGBA', (total, total), (0, 0, 0, 0))

    shadow = Image.new('RGBA', (total, total), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    off = int(diameter * 0.018)
    sd.ellipse((pad, pad + off, pad + diameter, pad + diameter + off), fill=(30, 20, 80, 110))
    shadow = shadow.filter(ImageFilter.GaussianBlur(diameter * 0.025))
    out.alpha_composite(shadow)

    ring_layer = Image.new('RGBA', (diameter, diameter), WHITE)
    out.paste(ring_layer, (pad, pad), circle_mask(diameter))

    inner = diameter - ring * 2
    photo = face.convert('RGB').resize((inner, inner), Image.LANCZOS).convert('RGBA')
    out.paste(photo, (pad + ring, pad + ring), circle_mask(inner))
    return out, pad


def compose(face, size, bg, badge_ratio, center_y_ratio=0.5):
    """Place the badge on a background (or transparent) square."""
    canvas = bg.copy() if bg is not None else Image.new('RGBA', (size, size), (0, 0, 0, 0))
    d = int(size * badge_ratio)
    badge, pad = photo_badge(face, d)
    x = (size - d) // 2 - pad
    y = int(size * center_y_ratio - d / 2) - pad
    canvas.alpha_composite(badge, (x, y))
    return canvas


def rounded(im, radius_ratio=0.22):
    size = im.size[0]
    r = int(size * radius_ratio) * 4
    big = Image.new('L', (size * 4, size * 4), 0)
    ImageDraw.Draw(big).rounded_rectangle((0, 0, size * 4 - 1, size * 4 - 1), radius=r, fill=255)
    mask = big.resize((size, size), Image.LANCZOS)
    out = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    out.paste(im, (0, 0), mask)
    return out


def circular(im):
    size = im.size[0]
    out = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    out.paste(im, (0, 0), circle_mask(size))
    return out


def build_masters(face):
    bg = gradient_square(S)
    # Full-bleed square, badge inside the 80% maskable safe circle (PWA "any" + "maskable", TWA).
    full = compose(face, S, bg, badge_ratio=0.70)
    # Adaptive-icon foreground: transparent, badge inside the 66/108 safe zone.
    foreground = compose(face, S, None, badge_ratio=0.58)
    # Legacy launcher icons (Android < 8): rounded square and circle.
    legacy_square = rounded(compose(face, S, bg, badge_ratio=0.78))
    legacy_round = circular(compose(face, S, bg, badge_ratio=0.80))
    return full, foreground, legacy_square, legacy_round


def save(im, path, size):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.resize((size, size), Image.LANCZOS).save(path, optimize=True)


def main():
    face_path, repo = sys.argv[1], sys.argv[2]
    face = Image.open(face_path)
    full, foreground, legacy_square, legacy_round = build_masters(face)

    res = os.path.join(repo, 'android', 'app', 'src', 'main', 'res')
    densities = {'mdpi': 48, 'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}
    for name, px in densities.items():
        folder = os.path.join(res, f'mipmap-{name}')
        save(legacy_square, os.path.join(folder, 'ic_launcher.png'), px)
        save(legacy_round, os.path.join(folder, 'ic_launcher_round.png'), px)
        save(foreground, os.path.join(folder, 'ic_launcher_foreground.png'), int(px * 108 / 48))

    # Adaptive icon background colour (was white).
    with open(os.path.join(res, 'values', 'ic_launcher_background.xml'), 'w', encoding='utf-8', newline='\n') as f:
        f.write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n'
                f'    <color name="ic_launcher_background">{THEME}</color>\n</resources>\n')

    icons = os.path.join(repo, 'public', 'assets', 'icons')
    save(full, os.path.join(icons, 'CaydenJoy.png'), 512)
    for px in (24, 48, 192, 512):
        save(full, os.path.join(icons, f'icon_{px}.png'), px)
        save(full, os.path.join(icons, f'{px}x{px}.png'), px)
    print('icons written')


if __name__ == '__main__':
    main()
