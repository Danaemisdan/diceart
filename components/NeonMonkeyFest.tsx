"use client";

import { motion } from "framer-motion";

export default function NeonMonkeyFest() {
    return (
        <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center bg-black overflow-hidden py-24">

            {/* Background Aesthetic */}
            <div className="absolute inset-0 z-0">
                {/* Neon Glow underlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-purple-600/20 rounded-full blur-[120px]"></div>

                {/* Optional dark overlay to keep text readable */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Teaser Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-block"
                >
                    <span className="text-xs md:text-sm uppercase tracking-[0.4em] font-light text-purple-400 border border-purple-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
                        The Next Big Event
                    </span>
                </motion.div>

                {/* Main Title - Neon Aesthetic */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] pr-4 pb-2"
                    style={{
                        WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                    }}
                >
                    NEON
                    <br />
                    MONKEY
                    <br />
                    FEST
                </motion.h2>

                {/* Coming Soon Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <p className="text-xl md:text-3xl font-light text-gray-400 tracking-widest lowercase">
                        coming soon
                    </p>
                </motion.div>

                {/* Distressed texture overlay for visual interest */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            </div>
        </section>
    );
}
