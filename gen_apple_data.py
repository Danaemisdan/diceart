import random
random.seed(42)

out = "export const appleProjects = [\n"

# 25 items for a 5x5 grid
cols, rows = 5, 5

for idx in range(25):
    c = idx % cols
    r = idx // cols
    
    grid_w = 17
    grid_h = 24
    gap_x = 2
    gap_y = 2
    
    col_offset = (c % 2) * -10
    
    grid_x = 4 + c * (grid_w + gap_x)
    grid_y = -10 + r * (grid_h + gap_y) + col_offset
    
    # Randomly scatter below the screen to start
    piano_x = grid_x + random.uniform(-10, 10)
    piano_y = 150 + random.uniform(0, 150) + (r * 20)
    
    out += f"""    {{
        id: {idx+1},
        category: "CINEMA",
        title: "Project {idx+1}",
        img: "https://picsum.photos/seed/{idx*11+3}/600/800",
        pianoX: "{piano_x:.1f}vw",
        pianoY: "{piano_y:.1f}vh",
        gridX: "{grid_x:.1f}vw",
        gridY: "{grid_y:.1f}vh",
        width: "{grid_w}vw",
        height: "{grid_h}vh"
    }},\n"""

out += "];\n"

with open("components/appleData.ts", "w") as f:
    f.write(out)
