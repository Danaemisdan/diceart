"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PortfolioParallax from "@/components/PortfolioParallax";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
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
  );
}
