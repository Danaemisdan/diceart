"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LogoRevealProps {
    onComplete?: () => void;
}

export default function LogoReveal({ onComplete }: LogoRevealProps) {
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Reduced to 2s for a slightly snappier reveal
        const timer = setTimeout(() => {
            setIsComplete(true);
            if (onComplete) {
                // Ensure onComplete is called slightly after state update
                setTimeout(onComplete, 100);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
        >
            {/* Structural ghost to perfectly match Hero component layout perfectly */}
            <div className="flex flex-col items-center justify-center w-full max-w-2xl px-8">

                {/* Logo wrapper matching Hero container exactly */}
                <motion.div
                    className="relative w-[300px] h-[300px] md:w-[600px] md:h-[400px] mb-8"
                    initial={{ opacity: 0, scale: 0.9, filter: "brightness(0)" }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "brightness(1)",
                        transition: {
                            duration: 1.5,
                            ease: [0.16, 1, 0.3, 1], // Custom cinematic ease
                        }
                    }}
                >
                    <motion.div
                        layoutId="shared-logo"
                        className="relative w-full h-full"
                        style={{ perspective: 1000 }}
                    >
                        <Image
                            src="/IMG_2726.PNG"
                            alt="Dice Art Films Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            priority
                        />
                    </motion.div>

                </motion.div>

                {/* Structural ghost for the "scroll" text present in Hero */}
                <div className="flex flex-col items-center gap-2 opacity-0 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-light text-gray-400">
                        Scroll to view more
                    </span>
                    <div className="w-[1px] h-12 bg-white/20"></div>
                </div>

            </div>
        </motion.div>
    );
}
