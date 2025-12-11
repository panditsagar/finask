"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function HeroSectionV2() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-[#0b1218]">
      {/* Navbar (Absolute for preview) */}
      <div className="absolute top-0 w-full z-50">
         <Navbar />
      </div>

      {/* Background with Glows */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/home1.jpg")', filter: "brightness(0.3) blur(0px)" }}
        />
        {/* Central Glow - Purpose: readability and depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b08d55]/20 rounded-full blur-[120px]" />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1218]/80 via-transparent to-[#0b1218]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 mt-20">
        
        {/* Floating Label */}
        <div className="mb-8 overflow-hidden">
           <span className="inline-block py-1.5 px-5 rounded-full border border-[#b08d55]/30 bg-[#b08d55]/10 backdrop-blur-md text-[#b08d55] text-xs font-bold tracking-[0.2em] uppercase animate-fade-in-up">
              Wealth Management Redefined
           </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto drop-shadow-2xl">
           Build a Legacy <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffeebb] to-[#b08d55]">That Lasts Forever</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
           We align your financial power with your deepest values, crafting a future that honors where you came from and where you are going.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
           {/* Primary Gold Button */}
           <Link href="/contact" className="group relative px-10 py-4 bg-[#b08d55] rounded-full overflow-hidden shadow-2xl hover:shadow-[#b08d55]/40 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                 Start Your Journey
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
           </Link>

           {/* Secondary Ghost Button */}
           <Link href="/about" className="px-10 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-[#0b1218] transition-all duration-300">
              Our Philosophy
           </Link>
        </div>

      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b1218] to-transparent z-10" />
    </section>
  );
}
