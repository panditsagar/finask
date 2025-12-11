"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-[#0b1218] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop")', // Corporate/Building
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1218] via-[#0b1218]/90 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="text-center md:text-left  ">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
            Your Legacy.  <span className="text-[#b08d55] italic">Our Strategy.</span> 
           
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
             Let's build a financial future that aligns with your values. Expert guidance, every step of the way.
          </p>
        </div>

        {/* Action Button */}
        <div className="shrink-0">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#b08d55] to-[#dfa882]">
             <div className="bg-[#0b1218] rounded-full p-2">
               <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#0b1218] rounded-full font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 group"
                >
                  Get in touch
                  <ArrowRight className="w-5 h-5 text-[#b08d55] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
