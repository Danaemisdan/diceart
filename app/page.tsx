"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NeonMonkeyFest from "@/components/NeonMonkeyFest";
import InstagramReels from "@/components/InstagramReels";
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
        {/* Hero section handles the logo animation on top of the black overlay */}
        <Hero />
        <NeonMonkeyFest />
        <InstagramReels />
      </div>

      <footer className="w-full py-12 px-6 border-t border-white/5 bg-black flex flex-col md:flex-row items-center justify-between text-white/40 text-sm font-light relative z-10">
        <p>&copy; {new Date().getFullYear()} Dice Art Films. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Vimeo</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>

    </main>
  );
}
