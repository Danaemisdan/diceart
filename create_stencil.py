from PIL import Image
import sys

def create_stencil(input_path, output_path):
    print(f"Opening {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
        
    width, height = img.size
    print(f"Size: {width}x{height}")
    
    pixels = img.load()
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # If it's mostly transparent, make it solid black
            if a < 50:
                pixels[x, y] = (0, 0, 0, 255)
            # If it's mostly black, make it solid black
            elif r < 20 and g < 20 and b < 20: # The dots
                pixels[x, y] = (0, 0, 0, 255)
            else:
                # Colored part -> make it completely transparent!
                pixels[x, y] = (0, 0, 0, 0)
                
    print(f"Saving to {output_path}...")
    img.save(output_path)
    print("Done!")

if __name__ == "__main__":
    create_stencil("public/IMG_2726.PNG", "public/logo_stencil.png")
