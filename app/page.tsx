"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PortfolioParallax from "@/components/PortfolioParallax";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [splashState, setSplashState] = useState<"enter" | "video" | "black" | "done">("enter");

  // Fallback timeout in case video fails to play or load
  useEffect(() => {
    if (splashState !== "video") return;
    const timer = setTimeout(() => {
      setSplashState("done");
    }, 12000); // 12 seconds
    return () => clearTimeout(timer);
  }, [splashState]);

  const handleVideoEnd = () => {
    setSplashState("black");
    setTimeout(() => {
      setSplashState("done");
    }, 1200); // Wait 1.2s for video to fade to black before showing main
  };

  const handleEnter = () => {
    setSplashState("video");
  };

  return (
    <>
      <AnimatePresence>
        {splashState === "enter" && (
          <motion.div
            key="enter"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black cursor-pointer"
            onClick={handleEnter}
          >
            <p className="text-white/50 tracking-[0.5em] uppercase text-sm animate-pulse">
              Tap to Enter
            </p>
          </motion.div>
        )}

        {(splashState === "video" || splashState === "black") && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black"
          >
            <motion.video
              src="/lklkl.mp4"
              autoPlay
              playsInline
              initial={{ opacity: 1 }}
               animate={{ opacity: splashState === "video" ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {splashState === "done" && (
        <main className="relative bg-black min-h-screen">
          <Navigation />

          {/* 1. Hero — SVG logo video portal */}
          <Hero />

          {/* 2. Portfolio Grid — parallax 25+ projects */}
          <PortfolioParallax />

          {/* 3. Services — all 24 crafts */}
          <Services />

          {/* 4. Contact */}
          <Contact />

          {/* 5. Footer */}
          <footer className="w-full h-screen bg-black flex flex-col items-center justify-center relative z-10 overflow-hidden">
            <picture className="absolute inset-0 w-full h-full opacity-90">
              <source srcSet="/CinematicFooter.svg" media="(min-width: 768px)" />
              <img
                src="/CinematicFooterMobile.svg"
                alt="Dice Art Films Footer"
                className="w-full h-full object-cover object-center"
              />
            </picture>
            <div className="relative z-20 flex flex-col items-center gap-2 mt-auto pb-12 w-full bg-gradient-to-t from-black via-black/50 to-transparent pt-32">
              <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-medium">All Copyrights Reserved</p>
              <p className="text-white/20 text-[9px] uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} Dice Art Films</p>
            </div>
          </footer>
        </main>
      )}
    </>
  );
}
