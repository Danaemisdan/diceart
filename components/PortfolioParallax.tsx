"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plus } from "lucide-react";
import { parsedProjects } from "./portfolioData";

export default function PortfolioParallax() {
    const sectionRef = useRef<HTMLElement>(null);

    // Track the entire section's progress for the 50+ background
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // 50+ text settles in early, but as soon as the first images come up (around 0.13), it heavily blurs and fades out instantly.
    const textOpacity = useTransform(scrollYProgress, [0, 0.08, 0.12, 0.18], [0, 1, 1, 0]);
    const textBlur = useTransform(scrollYProgress, [0, 0.08, 0.12, 0.18], ["40px", "0px", "0px", "100px"]);
    const textScale = useTransform(scrollYProgress, [0, 0.08, 1], [0.85, 1, 1.15]);

    return (
        <section ref={sectionRef} className="relative bg-black w-full" id="portfolio">
            {/* Sticky 50+ Background */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
                    style={{
                        opacity: textOpacity,
                        scale: textScale,
                        filter: useTransform(textBlur, (v) => `blur(${v})`)
                    }}
                >
                    <div className="px-2 max-w-5xl mx-auto w-full flex justify-center mt-2">
                        <div className="relative p-8 md:p-12 w-full h-full border border-white/10 dark:border-white/10 [mask-image:radial-gradient(200rem_24rem_at_center,white,transparent)] flex flex-col items-center justify-center">
                            <Plus className="absolute -left-4 -top-4 h-8 w-8 text-indigo-500/50" />
                            <Plus className="absolute -bottom-4 -left-4 h-8 w-8 text-indigo-500/50" />
                            <Plus className="absolute -right-4 -top-4 h-8 w-8 text-indigo-500/50" />
                            <Plus className="absolute -bottom-4 -right-4 h-8 w-8 text-indigo-500/50" />

                            <h2 className="tracking-tighter flex select-none px-3 py-2 flex-col text-center font-extrabold leading-none" style={{ fontSize: "clamp(9rem, 28vw, 24rem)" }}>
                                <span className="sexy-noisy-text relative z-10 mx-auto w-full inline-block pb-0">
                                    50+
                                </span>
                            </h2>

                            <div className="text-center -mt-4 md:-mt-8 z-10 relative w-full">
                                <p className="text-white/90 text-3xl md:text-5xl font-semibold tracking-normal antialiased max-w-2xl mx-auto leading-tight">
                                    Large-scale productions across India.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Spacer to let the 50+ text sit alone for a screen scroll before images arrive */}
            <div className="w-full h-[80vh] pointer-events-none" />

            {/* Natively scrolling grid over the sticky background */}
            <div className="relative z-10 w-full max-w-[100vw] mx-auto pointer-events-none pb-32">
                {/* 
                  Container for absolute positioned items. 
                  Height must exactly fit the max gridY (340vh) + typical image height (40vh) + padding (70vh) = 450vh approx.
                */}
                <div className="relative w-full h-[450vh] pointer-events-auto">
                    {parsedProjects.map((project, index) => (
                        <AnimatedTile
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            {/* Fade at bottom before entering Services */}
            <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
}

function AnimatedTile({ project, index }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 0"] // Enters from bottom ("0 1"), exits from top ("1 0")
    });

    const blur = useTransform(scrollYProgress,
        [0, 0.15, 0.85, 1],
        ["20px", "0px", "0px", "20px"]
    );
    const opacity = useTransform(scrollYProgress,
        [0, 0.1, 0.9, 1],
        [0, 1, 1, 0]
    );

    // Staggered Parallax effect: even columns go slightly up faster, odd slightly slower
    const parallaxDirection = (index % 5) % 2 === 0 ? "8vh" : "-8vh";
    const y = useTransform(scrollYProgress, [0, 1], [parallaxDirection, `calc(-1 * ${parallaxDirection})`]);

    return (
        <motion.div
            ref={ref}
            style={{
                position: "absolute",
                left: project.gridX,
                top: project.gridY,
                width: project.width,
                opacity,
                filter: useTransform(blur, v => `blur(${v})`),
                y,
                zIndex: 10 + index
            }}
            className="shadow-2xl rounded-lg overflow-hidden cursor-pointer group will-change-transform pointer-events-auto"
        >
            <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full aspect-[2/3] object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                {/* Label overlay */}
                <div className="absolute bottom-2 left-2 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/80 p-2 rounded w-full">
                    <p className="text-[6px] tracking-widest text-white/60 uppercase font-bold">{project.category}</p>
                    <p className="text-[10px] text-white font-medium drop-shadow-md">{project.title}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}
