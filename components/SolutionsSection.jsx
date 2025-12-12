"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Financial Report",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "#",
  },
  {
    id: 2,
    title: "Oak Tree Solutions",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "#",
  },
  {
    id: 3,
    title: "Business Solutions",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "#",
  },
];

export default function SolutionsSection() {
  return (
    <section className="pb-10">
      {/* Section Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif tracking-tight">
          Elevate Your <span className="text-[#b08d55]">Financial Growth</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Expert financial solutions tailored to your unique needs and goals.
        </p>
      </div>

      {/* Image & Content Box */}
      <div className="relative h-[600px] mx-4 lg:mx-16  overflow-hidden bg-slate-900">
        {/* Background Image Placeholder */}
        {/* Replace the style below with your actual image: backgroundImage: 'url(/path/to/image.jpg)' */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop)', // Placeholder image
            backgroundPosition: 'center 30%'
          }}
        ></div>
        
        {/* Overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content Container */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <div className="  mx-auto px-6 lg:p-6  ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {solutions.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden   bg-white/10 backdrop-blur-md border border-white/10 p-8 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-6 font-serif">{item.title}</h3>
                    <p className="text-gray-100 text-md leading-relaxed mb-4 opacity-90">
                      {item.description}
                    </p>
                    
                    <a 
                      href={item.link} 
                      className="inline-flex items-center gap-2 text-white font-medium text-md hover:text-[#b08d55] transition-colors group/link"
                    >
                      Lets Talk
                      <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
