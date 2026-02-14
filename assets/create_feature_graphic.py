#!/usr/bin/env python3
"""Create a feature graphic for Google Play Store (1024x500px)"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    import subprocess
    import sys
    print("PIL not installed. Installing...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow", "-q"])
    from PIL import Image, ImageDraw, ImageFont

# Create feature graphic (1024x500px)
width, height = 1024, 500
background_color = (108, 92, 231)  # Purple from app theme
text_color = (255, 255, 255)  # White text

img = Image.new('RGB', (width, height), background_color)
draw = ImageDraw.Draw(img)

# Try to use a nice font, fall back to default if not available
try:
    title_font = ImageFont.truetype("arial.ttf", 80)
    subtitle_font = ImageFont.truetype("arial.ttf", 40)
except:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()

# Add text
title = "CaydenJoy"
subtitle = "Communication Made Easy"

# Calculate text positions for centering
title_bbox = draw.textbbox((0, 0), title, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_x = (width - title_width) // 2
title_y = 120

subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
subtitle_x = (width - subtitle_width) // 2
subtitle_y = 280

# Draw text with outline for better visibility
outline_width = 3
for adj_x in range(-outline_width, outline_width + 1):
    for adj_y in range(-outline_width, outline_width + 1):
        if adj_x != 0 or adj_y != 0:
            draw.text((title_x + adj_x, title_y + adj_y), title, font=title_font, fill=(40, 20, 100))
            draw.text((subtitle_x + adj_x, subtitle_y + adj_y), subtitle, font=subtitle_font, fill=(40, 20, 100))

draw.text((title_x, title_y), title, font=title_font, fill=text_color)
draw.text((subtitle_x, subtitle_y), subtitle, font=subtitle_font, fill=text_color)

# Save the image
output_path = "feature_graphic.png"
img.save(output_path, quality=95)
print(f"✓ Created {output_path}")
print(f"Dimensions: {width}x{height}px")
print("Ready to upload to Google Play Console")
