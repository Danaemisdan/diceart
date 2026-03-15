"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "./ui/social-links";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative bg-black overflow-hidden py-24 md:py-32"
        >
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-sm md:text-base uppercase tracking-[0.6em] text-white/50 mb-4 font-medium"
                >
                    Get in Touch
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-10 tracking-tighter uppercase"
                >
                    Get in touch
                    <br />
                    with us.
                </motion.h2>

                <motion.div
                    className="flex flex-col items-center gap-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* Sleek Contact Button instead of email */}
                    <a
                        href="mailto:diceartfilms@gmail.com"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-white/5 border border-white/20 rounded hover:bg-white hover:text-black tracking-widest uppercase text-sm"
                    >
                        <span>Contact Us</span>
                    </a>

                    <div className="flex flex-col items-center gap-6 mt-8 w-full">
                        <p className="text-sm md:text-base uppercase tracking-[0.5em] text-white/50 font-medium">Follow us</p>
                        <SocialLinks />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
