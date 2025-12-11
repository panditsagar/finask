"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function HeroSectionV3() {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row bg-[#0b1218] overflow-hidden">
       {/* Navbar Overlay (Absolute) */}
       <div className="absolute top-0 w-full z-50">
         <Navbar />
      </div>

      {/* Left Content Side (60% width on Desktop) */}
      <div className="w-full md:w-[60%] h-full flex flex-col justify-center px-8 md:px-20 relative z-10 bg-[#0b1218]">
         {/* Top Accent Line */}
         <div className="w-20 h-1 bg-[#b08d55] mb-12"></div>
         
         <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-10 tracking-tighter">
            Wealth <br/> 
            <span className="text-[#8e7346]">Beyond</span> <br/> 
            Measure.
         </h1>

         <p className="text-gray-400 text-xl font-light max-w-lg mb-12 leading-relaxed border-l-2 border-[#b08d55]/30 pl-6">
            We don't just manage assets. We architect legacies for those who demand excellence in every dimension of life.
         </p>

         <div className="flex items-center gap-8">
            <Link href="/contact" className="text-white text-lg font-bold border-b-2 border-[#b08d55] pb-1 hover:text-[#b08d55] transition-colors">
               Start Conversation
            </Link>
            <Link href="/services" className="text-gray-500 text-lg font-medium hover:text-white transition-colors flex items-center gap-2 group">
               Explore Services
               <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
         </div>
      </div>

      {/* Right Image Side (40% width on Desktop) */}
      <div className="w-full md:w-[40%] h-full relative hidden md:block">
         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2670&auto=format&fit=crop")' }}>
            {/* Overlay to blend edge */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1218] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-[#b08d55]/10 mix-blend-overlay" />
         </div>
         
         {/* Floating Quote Card */}
         <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md p-6 border-l-4 border-[#b08d55] max-w-xs hidden lg:block">
            <p className="text-white italic text-sm mb-4">"The only limit to our realization of tomorrow will be our doubts of today."</p>
            <span className="text-[#b08d55] text-xs font-bold uppercase tracking-widest">Franklin D. Roosevelt</span>
         </div>
      </div>
    </section>
  );
}
