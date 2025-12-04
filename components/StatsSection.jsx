"use client";

import React from "react";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "15+",
    label: "Years of Experience",
    icon: Briefcase,
  },
  {
    id: 2,
    value: "₹500Cr+",
    label: "Assets Under Management",
    icon: TrendingUp,
  },
  {
    id: 3,
    value: "2,500+",
    label: "Families Served",
    icon: Users,
  },
  {
    id: 4,
    value: "10k+",
    label: "Active SIPs",
    icon: Award,
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
         
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif tracking-tight">
          Why Choose
            <span className="text-[#b08d55]"> Us</span>
          </h2>
        </div>

        {/* Stats Grid Wrapper */}
        <div className="relative pt-20 pb-20">
          
          {/* Horizontal Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-0 left-0 w-full h-px bg-gray-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={stat.id} className={`relative group ${isEven ? "" : "lg:mt-16"}`}>
                  
                  {/* Timeline Dot (Desktop) */}
                  {/* Positioned relative to the timeline line at the top */}
                  <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#b08d55] bg-white z-30 ${isEven ? "-top-[5.5rem]" : "-top-[9.5rem]"}`}></div>

                  {/* Vertical Line Connector (Desktop) */}
                  {/* Height adjusts based on stagger */}
                  <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#b08d55] to-transparent opacity-50 ${isEven ? "-top-20 h-20" : "-top-38 h-38"}`}></div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 pt-12 shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-[#b08d55] text-center relative min-h-[240px] flex flex-col justify-center items-center">
                    
                    {/* Floating Icon */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#b08d55]/10 flex items-center justify-center text-[#b08d55]">
                         <Icon size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-4xl font-bold text-slate-900 mb-2 font-serif group-hover:text-[#b08d55] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </div>

                    {/* Decorative background arc */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#b08d55]/5 rounded-b-full -z-10"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
