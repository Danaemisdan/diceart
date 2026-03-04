import sys
try:
    from PIL import Image, ImageDraw
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageDraw

def create_stencil(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # First, make the "top hole" solidly black by drawing an ellipse over it
    # We'll also just draw ellipses over all 3 holes to be safe and crisp!
    # Let's find the approximate coordinates of the top hole.
    # The image is 4752x1792. The overall dice is on the left.
    # Let's just do thresholding: anything that is dark becomes black.
    # To fix the "gradient type shit", the gradient is gray.
    
    pixels = img.load()
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # 1. Edges -> force black to remove thin border
            if x <= 2 or y <= 2 or x >= width-3 or y >= height-3:
                pixels[x, y] = (0, 0, 0, 255)
            # 2. Transparent -> background black
            elif a < 50:
                pixels[x, y] = (0, 0, 0, 255)
            # 3. Dark pixels (includes the gradient the user hates) -> solid black
            elif r < 60 and g < 60 and b < 60:
                pixels[x, y] = (0, 0, 0, 255)
            # 4. Colored parts -> transparent hole for video
            else:
                pixels[x, y] = (0, 0, 0, 0)
                
    img.save(output_path)
    print("Mask fixed and saved.")

create_stencil("public/IMG_2726.PNG", "public/logo_stencil.png")
