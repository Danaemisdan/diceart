"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Stencil dimensions handled automatically now

// ─── Scroll indicator ──────────────────────────────────────────────────────────
function ScrollIndicator() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        let gone = false;
        const t = setTimeout(() => { if (!gone) setShow(true); }, 3000);
        const hide = () => { gone = true; setShow(false); };
        window.addEventListener("scroll", hide, { passive: true });
        return () => { clearTimeout(t); window.removeEventListener("scroll", hide); };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="si"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
                >
                    <span className="text-white/30 font-light uppercase" style={{ fontSize: 9, letterSpacing: "0.45em" }}>
                        Scroll
                    </span>
                    <div className="relative w-[1px] overflow-hidden" style={{ height: 32 }}>
                        <div className="absolute inset-0 bg-white/12" />
                        <motion.div
                            className="absolute w-full bg-white/65 rounded-full"
                            style={{ height: "50%" }}
                            animate={{ y: ["0%", "100%"] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

    const containerScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.25]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const taglineOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
    const taglineY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <section
            ref={ref}
            id="home"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black border-none outline-none"
        >
            <motion.div
                style={{ scale: containerScale, opacity: heroOpacity }}
                className="absolute inset-0 flex items-center justify-center z-10 bg-black"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 2.0, ease: "easeOut" }}
                    style={{ scale: containerScale }}
                    className="relative w-full flex flex-col items-center justify-center pb-8"
                >
                    {/* Tagline above scaled content to avoid scale issues */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mb-8"
                    >
                        <p className="text-[10px] md:text-xs tracking-[0.4em] text-white/40 font-light flex items-center gap-4 uppercase">
                            <span>Production</span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span>Vfx</span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span>Events</span>
                        </p>
                    </motion.div>

                    {/* Stencil Container */}
                    <div
                        className="relative flex items-center justify-center w-[95vw] md:w-[70vw] lg:w-[60vw] overflow-hidden rounded-lg"
                        style={{ aspectRatio: "4752 / 1792" }}
                    >
                        {/* The Video (Behind) */}
                        <video
                            src="/veo__page-cover-1_hcTy7l3.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover scale-[1.35] md:scale-[1.15] object-center rounded-lg z-0"
                        />

                        {/* The Stencil (Overlay) */}
                        <div
                            className="absolute inset-[0] z-10 pointer-events-none mix-blend-multiply flex items-center justify-center bg-black overflow-hidden scale-[1.01] transform-gpu"
                        >
                            <div
                                className="w-full h-full bg-white"
                                style={{
                                    backgroundImage: `url('/logo_stencil.png')`,
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Vignette Overlay for cinematic depth */}
            <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 70%, black 100%)",
                }}
            />

            <ScrollIndicator />
        </section>
    );
}
