"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section
            ref={ref}
            id="home"
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(30,30,30,1)_0%,_rgba(0,0,0,1)_80%)]"></div>
                {/* Animated overlay for 'VFX' feel */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"]
                    }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "50px 50px"
                    }}
                />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="z-[50] text-center px-4 relative flex flex-col items-center"
            >
                {/* 1. Logo Splash Animation (Sits above the black page overlay) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="relative w-[300px] h-[300px] md:w-[600px] md:h-[400px] mb-8"
                >
                    <img
                        src="/IMG_2726.PNG"
                        alt="Dice Art Films"
                        className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    />
                </motion.div>

                {/* 2. Text Content (Revealed after overlay fades) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.8, duration: 1 }}
                    className="flex flex-col md:flex-row items-center gap-4 justify-center text-xs md:text-sm uppercase tracking-[0.4em] font-light text-gray-400"
                >
                    <span>Production</span>
                    <span className="w-1 h-1 bg-white rounded-full hidden md:block"></span>
                    <span>VFX</span>
                    <span className="w-1 h-1 bg-white rounded-full hidden md:block"></span>
                    <span>Events</span>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 4.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[40]"
            >
                <div className="text-[10px] uppercase tracking-[0.2em] font-light text-gray-400">
                    <span className="hidden md:block">Scroll to view more</span>
                    <span className="block md:hidden">Swipe to view more</span>
                </div>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
}
