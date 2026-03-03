"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NeonMonkeyFest from "@/components/NeonMonkeyFest";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative selection:bg-white selection:text-black">

      {/* 1. Global White Splash Sequence Overlay (Cuts out instantly) */}
      <motion.div
        className="fixed inset-0 z-[60] bg-white pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.1, delay: 0.5 }}
      />

      {/* 2. Global Black Overlay holding the user's video (Fades out to reveal the site) */}
      <motion.div
        className="fixed inset-0 z-[45] bg-black pointer-events-none overflow-hidden flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3.5, ease: "easeInOut" }}
      >
        <motion.video
          src="/veo__page-cover-1_hcTy7l3.mp4"
          autoPlay
          muted
          playsInline
          ref={(el) => { if (el) el.playbackRate = 2.0; }}
          initial={{ filter: "blur(20px)", opacity: 0, scale: 1.1 }}
          animate={{ filter: "blur(0px)", opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      <Navigation />

      <div className="flex flex-col">
        <Hero />
        <NeonMonkeyFest />
      </div>

      <footer className="w-full flex flex-col items-center justify-end pb-12 px-6 text-white/40 text-xs font-light relative z-10 overflow-hidden min-h-[80vh] bg-black">

        {/* Animated horizontal light rays */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px"
              style={{
                top: `${15 + i * 14}%`,
                background: `linear-gradient(to right, transparent 0%, rgba(255,255,255,${0.02 + i * 0.01}) 30%, rgba(255,255,255,${0.05 + i * 0.015}) 50%, rgba(255,255,255,${0.02 + i * 0.01}) 70%, transparent 100%)`,
              }}
              animate={{ scaleX: [0.8, 1.05, 0.8], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            />
          ))}
        </div>

        {/* Central deep glow orb */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Animated logo */}
        <motion.div
          className="relative z-10 flex flex-col items-center mt-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="mb-12 md:mb-16"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src="/IMG_2726.PNG"
              alt="Dice Art Films"
              className="h-28 md:h-40 lg:h-48 w-auto object-contain"
              animate={{
                filter: [
                  "drop-shadow(0 0 12px rgba(255,255,255,0.1)) drop-shadow(0 0 40px rgba(255,255,255,0.05))",
                  "drop-shadow(0 0 25px rgba(255,255,255,0.3)) drop-shadow(0 0 80px rgba(255,255,255,0.15))",
                  "drop-shadow(0 0 12px rgba(255,255,255,0.1)) drop-shadow(0 0 40px rgba(255,255,255,0.05))",
                ],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a href="#" className="hover:text-white transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
            </a>
            <a href="#" className="hover:text-white transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://www.instagram.com/diceartfilms/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <span className="w-[1px] h-4 bg-white/15 mx-2"></span>
            <a href="#" className="uppercase tracking-widest text-[10px] hover:text-white transition-colors duration-300">Terms</a>
            <a href="#" className="uppercase tracking-widest text-[10px] hover:text-white transition-colors duration-300">Privacy</a>
          </motion.div>

          <p className="tracking-[0.25em] uppercase text-[9px] text-white/25">&copy; {new Date().getFullYear()} Dice Art Films. All rights reserved.</p>
        </motion.div>
      </footer>

    </main>
  );
}
