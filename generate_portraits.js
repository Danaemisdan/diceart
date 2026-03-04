const fs = require('fs');

const projects = Array.from({ length: 25 }).map((_, i) => {
    // Math.sin fallback deterministic generator
    const seed1 = Math.abs(Math.sin((i+1) * 100)) * 10000;
    const r1 = seed1 - Math.floor(seed1);
    
    // Create evenly distributed Top values (to span vertically the 300vh space cleanly)
    // Map i from 0-24 -> 0-240% roughly, then add random scatter
    const baseTop = i * 11;
    const scatterTop = -5 + (r1 * 10); // ±5% scatter
    let topVal = baseTop + scatterTop;
    if(topVal < 2) topVal = 2; // Don't overflow top
    if(topVal > 260) topVal = 260; // Don't overflow bottom
    
    const seed2 = Math.abs(Math.cos((i+1) * 200)) * 10000;
    const r2 = seed2 - Math.floor(seed2);
    // Keep them safely between 5% and 75% wide so they don't clip horizontally offscreen
    const leftVal = 5 + (r2 * 65);
    
    const seed3 = Math.abs(Math.tan((i+1) * 300)) * 10000;
    const r3 = seed3 - Math.floor(seed3);
    const speed = -0.15 + r3 * 0.35;
    
    // Ensure widths are uniform and not too giant or small
    const widthVal = 16 + (r1 * 10);
    
    // Pick specific portraits
    const aspectOptions = ["3/4", "4/5"];
    const aspect = aspectOptions[Math.floor(r3 * aspectOptions.length)] || "3/4";

    return `    {
        id: ${i + 1},
        img: "https://picsum.photos/seed/${i * 123 + 42}/600/800",
        speed: ${speed.toFixed(3)},
        left: "${leftVal.toFixed(1)}%",
        top: "${topVal.toFixed(1)}%",
        width: "${widthVal.toFixed(1)}vw",
        aspect: "${aspect}"
    },`;
});

const fileContent = `export const parsedProjects = [
${projects.join('\n')}
];
`;

fs.writeFileSync('components/portfolioData.ts', fileContent);
console.log('Done!');
