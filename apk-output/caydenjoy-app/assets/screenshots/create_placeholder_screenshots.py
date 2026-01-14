#!/usr/bin/env python3
"""Create placeholder screenshots for Google Play upload"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("PIL not installed. Installing...")
    import subprocess
    subprocess.check_call(["pip", "install", "pillow"])
    from PIL import Image, ImageDraw, ImageFont

# Create 4 screenshots at 1080x1920 (phone portrait - minimum for Google Play)
screenshots = [
    {
        'name': 'screenshot1.png',
        'title': 'CaydenJoy',
        'subtitle': 'Communication Made Easy',
        'color': '#6C5CE7'
    },
    {
        'name': 'screenshot2.png',
        'title': 'Custom Voice',
        'subtitle': 'Personalized Communication',
        'color': '#5F3DC4'
    },
    {
        'name': 'screenshot3.png',
        'title': 'Family Friendly',
        'subtitle': 'Easy to Use Interface',
        'color': '#667eea'
    },
    {
        'name': 'screenshot4.png',
        'title': 'Premium Features',
        'subtitle': 'Enhanced Experience',
        'color': '#FF6B6B'
    },
]

for info in screenshots:
    # Create image
    img = Image.new('RGB', (1080, 1920), info['color'])
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fall back to default
    try:
        title_font = ImageFont.truetype("arial.ttf", 80)
        subtitle_font = ImageFont.truetype("arial.ttf", 50)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Draw title
    draw.text((540, 800), info['title'], fill='white', anchor='mm', align='center', font=title_font)
    
    # Draw subtitle
    draw.text((540, 1000), info['subtitle'], fill='white', anchor='mm', align='center', font=subtitle_font)
    
    # Save
    img.save(info['name'])
    print(f"✓ Created {info['name']}")

print("\nAll 4 screenshots created successfully!")
print("Files are ready to upload to Google Play Console")
