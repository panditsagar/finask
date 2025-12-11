"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { Play } from "lucide-react";

export default function HeroSectionV5() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end pb-20 overflow-hidden bg-white">
      {/* Navbar (Absolute for transparent overlap) */}
      <div className="absolute top-0 w-full z-50">
         <Navbar />
      </div>

      {/* FULL BACKGROUND IMAGE (Happy Family) */}
      <div className="absolute inset-0 z-0">
         <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
            style={{ 
               backgroundImage: 'url("https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2670&auto=format&fit=crop")', // Happy Multi-gen family
            }}
         />
         {/* Soft White Gradient Overlay for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent sm:via-white/20" />
         <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-48">
         <div className="max-w-2xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#b08d55]/10 border border-[#b08d55]/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-fade-in">
               <span className="w-2 h-2 rounded-full bg-[#b08d55] animate-pulse"></span>
               <span className="text-[#b08d55] text-xs font-bold uppercase tracking-widest">Generational Wealth</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
               Where Wealth Meets Purpose, <br/>
               and Legacies Find <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b08d55] to-[#d4af37]">Direction</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
               Beyond returns, we craft clarity for families, entrepreneurs, and visionaries who see wealth as a narrative.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
               
               {/* 1. Primary Action */}
               <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#b08d55] text-white rounded-full font-bold shadow-xl shadow-[#b08d55]/30 hover:bg-[#9a7b4f] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 group">
                  Start Your Plan
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
               </Link>

               {/* 2. Secondary Action */}
               <Link href="/values" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-[#b08d55]/30 transition-all flex items-center justify-center gap-2">
                  Our Values
               </Link>

               {/* 3. Emotional Hook (Video/Story) */}
               <button className="w-full sm:w-auto px-6 py-4 text-slate-600 font-semibold hover:text-[#b08d55] transition-colors flex items-center justify-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#b08d55] group-hover:text-white transition-all">
                     <Play className="w-4 h-4 ml-1 fill-current" />
                  </div>
                  <span>Watch the Story</span>
               </button>

            </div>
         </div>
      </div>

       {/* Decorative Curved Bottom (Unique Touch) */}
       {/* <div className="absolute bottom-0 w-full">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div> */}
    </section>
  );
}
