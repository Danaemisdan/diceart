"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NeonMonkeyFest from "@/components/NeonMonkeyFest";
import { motion } from "framer-motion";

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

      <footer className="w-full pt-32 pb-12 px-6 bg-[#050505] flex flex-col items-center justify-center text-white/40 text-xs font-light relative z-10 overflow-hidden">
        {/* Subtle background glow for the footer logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Centered Logo */}
        <div className="w-48 h-32 relative mb-12">
          <img
            src="/IMG_2726.PNG"
            alt="Dice Art Films"
            className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          />
        </div>

        {/* Social Icons & Links */}
        <div className="flex items-center gap-8 mb-12 text-white/50">
          {/* YouTube */}
          <a href="#" className="hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
          </a>
          {/* X (Twitter) */}
          <a href="#" className="hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/diceartfilms/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          {/* Divider */}
          <span className="w-[1px] h-4 bg-white/10 mx-2"></span>

          <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
        </div>

        <p className="tracking-widest uppercase text-[10px]">&copy; {new Date().getFullYear()} Dice Art Films. All rights reserved.</p>
      </footer>

    </main>
  );
}
