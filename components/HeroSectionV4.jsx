"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function HeroSectionV4() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Navbar (Absolute) */}
      <div className="absolute top-0 w-full z-50">
         <Navbar />
      </div>

       {/* Full Background Image */}
       <div 
         className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop")', filter: "brightness(0.8)" }}
       />
       {/* Dark Overlay Gradient */}
       <div className="absolute inset-0 bg-gradient-to-r from-[#0b1218]/90 via-[#0b1218]/40 to-transparent" />

       {/* Main Content Container */}
       <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          
          {/* Glass Card */}
          <div className="w-full md:w-[600px] bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl mt-20">
             
             <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-[#b08d55]"></div>
                <span className="text-[#b08d55] font-bold uppercase tracking-widest text-xs">Premium Financial Guidance</span>
             </div>

             <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Precision in <br/>
                Every <span className="text-[#b08d55] italic">Decision.</span>
             </h1>

             <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Navigating complex wealth landscapes requires more than just advice. It requires a partner with a vision as distinct as yours.
             </p>

             <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-[#b08d55] text-white py-4 px-6 rounded-xl font-bold hover:bg-[#9a7b4f] transition-colors shadow-lg shadow-[#b08d55]/20">
                   Get Started
                </button>
                <button className="flex-1 bg-transparent border border-white/20 text-white py-4 px-6 rounded-xl font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                   View Case Studies
                </button>
             </div>

          </div>
       </div>

    </section>
  );
}
