"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
    const [hidden, setHidden] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show nav when scrolled down past 100px
        if (latest > 100) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 },
            }}
            initial="hidden"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-14 md:h-16 px-8 flex justify-between items-center z-40 bg-black/50 backdrop-blur-md border-b border-white/5"
        >
            <div className="absolute left-8 top-1/2 -translate-y-1/2 h-24 w-24 md:h-32 md:w-32">
                <img src="/icon.png" alt="Dice Art Films Icon" className="object-contain w-full h-full object-left" />
            </div>

        </motion.nav>
    );
}
