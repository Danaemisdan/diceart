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
            className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-40 bg-black/50 backdrop-blur-md border-b border-white/5"
        >
            <div className="h-8 w-40 relative">
                <img src="/IMG_2726.PNG" alt="Dice Art Films" className="object-contain w-full h-full object-left" />
            </div>
            <ul className="hidden md:flex gap-12 list-none">
                {["Home", "Work", "About", "Contact"].map((item) => (
                    <li key={item}>
                        <Link
                            href={`#${item.toLowerCase()}`}
                            className="relative text-sm uppercase tracking-widest text-white hover:text-gray-300 transition-colors group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}
