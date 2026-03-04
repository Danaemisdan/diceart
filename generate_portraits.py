import json

images = [
    "78th Independence day.jpg", "ACE.jpg", "Adipurush.jpg", "Beauty_Pagent.jpg", "Conistable.jpg",
    "Custody .jpg", "Ela.jpg", "Gandharwa.jpg", "Gowtham.jpg", "Hayaa.jpg",
    "Holi Masti.jpg", "Iravatam.jpg", "Mahanadu.jpg", "Meter.jpg", "Mothevari Love story.jpg",
    "NTR100.jpg", "Neon_Monkey_Fest_1_Main_Poster.jpg", "Neon_Monkey_Fest_2.jpg", "Neon_Monkey_Fest_3.jpg", "Noel's Telugodi Beat.jpg",
    "Nuvve_kaavali.jpg", "Phalana abbai phalana ammai.jpg", "Police vari hecharika.jpg", "Ramabanam.jpg", "Ravana_Dahanam.jpg",
    "Vihaari.jpg", "Vihari_Song.jpg", "simhadri-kannada-et00024656-1673613476.avif"
]

grid_x = ["2%", "22%", "42%", "62%", "82%"]
base_y = [0, 20, 40, 10, 30]

projects = []
for idx, img in enumerate(images):
    col = idx % 5
    row = idx // 5
    y_pos = base_y[col] + (row * 60)
    
    title = img.split('.')[0].replace('_', ' ').replace('-', ' ')
    cat = "Production"
    if "Fest" in img or "Holi" in img or "Pagent" in img or "Mahanadu" in img:
        cat = "Events"
    elif "Adipurush" in img:
        cat = "VFX"
        
    projects.append(f'    {{ id: {idx+1}, img: "/Images2nd/{img}", category: "{cat}", title: "{title}", gridX: "{grid_x[col]}", gridY: "{y_pos}vh", width: "16vw" }}')

content = "export const parsedProjects = [\n" + ",\n".join(projects) + "\n];\n"

with open("components/portfolioData.ts", "w") as f:
    f.write(content)

