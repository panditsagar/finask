"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const values = [
  {
    id: 1,
    title: "Transparent & Trusted",
    description: "We help you with the best plan and mutual fund recommendations that suit you and your goals. No hidden costs, no confusing language.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop", // Meeting/Trust
  },
  {
    id: 2,
    title: "Personal & Accessible",
    description: "Your dedicated financial guide will be available to answer, adapt, modify and customise your investment strategy on an ongoing basis.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop", // Personal interaction
  },
  {
    id: 3,
    title: "Flexible & Agile",
    description: "We tailor your investments to fit your life so you have the freedom to invest, withdraw, pause and scale on your terms.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop", // Team/Agile
  },
  {
    id: 4,
    title: "100% Secure",
    description: "Your data belongs to you. We don’t sell any personal info; and we always prioritise your interests — personal and financial — above all else.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop", // Security/Tech
  },
];

export default function ValuesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif tracking-tight">
          Our Core <span className="text-[#b08d55]">Values</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Expert financial solutions tailored to your unique needs and goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {values.map((item) => (
          <div key={item.id} className="group relative h-[500px] lg:h-[480px] overflow-hidden cursor-pointer">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

            {/* Hover Color Overlay */}
            <div className="absolute inset-0 bg-[#b08d55]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-800 ease-in-out z-10"></div>

            {/* Content */}
            <div className="absolute inset-0 p-10 pb-32 group-hover:pb-10 flex flex-col justify-center items-start text-start z-20 transition-all duration-500 translate-y-[35%] group-hover:translate-y-0">
              <h3 className="text-2xl font-bold text-white mb-4 font-serif leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-100 text-md leading-relaxed mb-6 transition-opacity duration-500 delay-100">
                {item.description}
              </p>
              
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
