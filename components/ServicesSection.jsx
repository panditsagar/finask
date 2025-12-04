"use client";

import React from "react";
import { Shield, TrendingUp, MessageSquare, ChevronsRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Insurance",
    description: "Comprehensive coverage plans designed to protect your assets, health, and loved ones against unforeseen risks.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Investment",
    description: "Strategic investment solutions and portfolio management tailored to grow your wealth and achieve financial goals.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Consultation",
    description: "Expert financial advice and personalized consultation sessions to guide you through complex financial decisions.",
    icon: MessageSquare,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto  ">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif tracking-tight">
            Our <span className="text-[#b08d55]">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Expert financial solutions tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="px-12 py-12 flex flex-col items-start text-left group"
            >
              <div className="mb-6 p-3 rounded-full border-2  border-[#b08d55] transition-colors duration-300">
                <service.icon strokeWidth={1.5} size={32} className=" text-[#b08d55] transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif leading-tight group-hover:text-[#b08d55] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-800 text-base leading-relaxed mb-10 ">
                {service.description}
              </p>
              
              <a href="#" className="mt-auto inline-flex items-center text-sm font-bold text-slate-900 hover:text-[#b08d55] transition-colors uppercase tracking-wider">
                Learn More
                <ChevronsRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
