"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ isScrolled: externalIsScrolled, alwaysScrolled = false }) {
  const [internalIsScrolled, setInternalIsScrolled] = useState(false);

  useEffect(() => {
    if (alwaysScrolled) return;
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setInternalIsScrolled(true);
      } else {
        setInternalIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysScrolled]);

  const isScrolled = alwaysScrolled || externalIsScrolled || internalIsScrolled;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <nav className={`relative flex items-center justify-between w-[95%] max-w-7xl backdrop-blur-md border rounded-full px-6 py-3 shadow-2xl transition-all duration-300 ${isScrolled ? "bg-white/90 border-gray-200/50" : "bg-white/10 border-white/10"}`}>
        
        {/* 1. LOGO (Left) */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className={`rounded-full p-1.5 transition-colors duration-300 ${isScrolled ? "" : "bg-white"}`}>
             <Image
              src="/logo.webp"
              alt="Finask Logo"
              width={100}
              height={30}
              className="object-contain"
            />
          </Link>
        </div>

        {/* 2. CENTER LINKS (Merged Left & Right Menus) */}
        <div className={`hidden xl:flex items-center gap-6 text-sm font-medium transition-colors duration-300 ${isScrolled ? "text-slate-700" : "text-gray-200"}`}>
       
          {/* About FinAsk */}
          <div className="group relative cursor-pointer h-full flex items-center">
            <Link href="/about" className="group-hover:text-[#b08d55] transition-colors py-2 flex items-center gap-1">
              About
            
            </Link>
             
          </div>

          {/* Our Services (Mega Menu) */}
          <div className="group cursor-pointer h-full flex items-center">
            <span className="group-hover:text-[#b08d55] transition-colors py-2 flex items-center gap-1">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-rotate-180 opacity-70">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </span>

            {/* Mega Menu Container */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] shadow-2xl rounded-b-xl ring-1 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 p-8 cursor-default mt-2 border ${isScrolled ? "bg-white ring-black/5 text-slate-600 border-gray-100" : "bg-[#1a202c] ring-white/10 text-gray-300 border-white/10"}`}>
              <div className={`grid grid-cols-5 gap-8 divide-x ${isScrolled ? "divide-gray-100" : "divide-white/10"}`}>
                {/* Column A: Insurance */}
                <div className="space-y-4">
                  <h3 className="font-bold text-[#b08d55] text-xs uppercase tracking-wider flex items-center gap-2">Insurance</h3>
                  <ul className={`space-y-2 text-[13px] font-medium ${isScrolled ? "text-slate-500" : "text-gray-400"}`}>
                    {[
                      { name: "Health Insurance", slug: "health-insurance" },
                      { name: "Super Health Top-Up", slug: "super-health-top-up" },
                      { name: "Personal Accident", slug: "personal-accident" },
                      { name: "Critical Illness", slug: "critical-illness" },
                      { name: "Life Insurance", slug: "life-insurance" },
                      { name: "Term Insurance", slug: "term-insurance" },
                      { name: "Motor Insurance", slug: "motor-insurance" },
                      { name: "Travel Insurance", slug: "travel-insurance" },
                      { name: "Property Insurance", slug: "property-insurance" },
                      { name: "Marine & Cargo", slug: "marine-cargo" },
                      { name: "Fire & Burglary", slug: "fire-burglary" },
                      { name: "Corporate Insurance", slug: "corporate-insurance" },
                      { name: "Cyber Insurance", slug: "cyber-insurance" },
                      { name: "Keyman Insurance", slug: "keyman-insurance" }
                    ].map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer block ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Column B: Investments */}
                <div className="space-y-4 pl-4">
                  <h3 className="font-bold text-[#b08d55] text-xs uppercase tracking-wider">Investments</h3>
                  <ul className={`space-y-2 text-[13px] font-medium ${isScrolled ? "text-slate-500" : "text-gray-400"}`}>
                    {[
                      { name: "Mutual Funds", slug: "mutual-funds" },
                      { name: "Bonds", slug: "bonds" },
                      { name: "PMS", slug: "pms" },
                      { name: "AIFs", slug: "aifs" },
                      { name: "Unlisted Equity", slug: "unlisted-equity" },
                      { name: "REITs", slug: "reits-invits" },
                      { name: "InvITs", slug: "invits" },
                      { name: "Fractional Real Estate", slug: "fractional-real-estate" },
                      { name: "P2P Lending", slug: "p2p-lending" },
                      { name: "Corporate FDRs", slug: "corporate-fdrs" },
                      { name: "Alternative Fixed Income", slug: "alternative-fixed-income" },
                      { name: "GIFT City", slug: "gift-city" },
                      { name: "Stock & Broking", slug: "stock-broking" },
                      { name: "NPS", slug: "nps" },
                      { name: "E-Gold", slug: "e-gold" }
                    ].map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer block ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Column C: Goal Planning */}
                <div className="space-y-4 pl-4">
                  <h3 className="font-bold text-[#b08d55] text-xs uppercase tracking-wider">Goal Planning</h3>
                  <ul className={`space-y-2 text-[13px] font-medium ${isScrolled ? "text-slate-500" : "text-gray-400"}`}>
                    {[
                      { name: "Retirement Planning", slug: "retirement-planning" },
                      { name: "Home Purchase", slug: "home-purchase" },
                      { name: "Child Education", slug: "child-education" },
                      { name: "NRI Corner", slug: "nri-corner" },
                      { name: "Women Corner", slug: "women-corner" },
                      { name: "Trust Formation", slug: "trust-formation" },
                      { name: "Will Writing", slug: "will-writing" },
                      { name: "Estate Planning", slug: "estate-planning" },
                      { name: "Executor Services", slug: "executor-services" },
                      { name: "Succession & Legacy", slug: "succession-legacy" }
                    ].map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer block ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Column D: Consultation */}
                <div className="space-y-4 pl-4">
                  <h3 className="font-bold text-[#b08d55] text-xs uppercase tracking-wider">Consultation</h3>
                  <ul className={`space-y-2 text-[13px] font-medium ${isScrolled ? "text-slate-500" : "text-gray-400"}`}>
                    {[
                      { name: "1:1 Consult Desk", slug: "consult-desk" },
                      { name: "Legal Advisory", slug: "legal-advisory" },
                      { name: "Tax Advisory", slug: "tax-advisory" },
                      { name: "Family Office", slug: "family-office" }
                    ].map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer block ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Column E: Empowerment */}
                <div className="space-y-4 pl-4   -my-8 py-8 -mr-8 pr-8 rounded-br-xl">
                  <h3 className="font-bold text-[#b08d55] text-xs uppercase tracking-wider">Empowerment</h3>
                  <ul className="space-y-3 text-[13px] text-gray-400 font-medium">
                    {[
                      { name: "Investor Education", slug: "investor-education" },
                      { name: "Financial Literacy", slug: "financial-literacy" },
                      { name: "Next-Gen Coaching", slug: "next-gen-coaching" },
                      { name: "Purpose Beyond Profit", slug: "purpose-beyond-profit" }
                    ].map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2 ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b08d55]"></span>{item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio */}
           <div className="group relative cursor-pointer h-full flex items-center">
            <span className="group-hover:text-[#b08d55] transition-colors py-2 flex items-center gap-1">
              Values
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-rotate-180 opacity-70">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </span>
            <div className={`absolute top-full left-0 mt-5.5 w-56 shadow-xl rounded-b-xl ring-1 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 overflow-hidden border ${isScrolled ? "bg-white ring-black/5 text-slate-600 border-gray-100" : "bg-[#1a202c] ring-white/10 text-gray-300 border-white/10"}`}>
              <ul className="py-2 text-sm">
                {["Caring", "Transparency", "Spam-Free Culture", "Growth Mindset", "Co-Creation of Wealth", "Collaboration", "Customer Obsession"].map((item) => (
                  <li key={item}>
                    <a href="#" className={`block px-5 py-2.5 transition-colors ${isScrolled ? "hover:bg-gray-50 hover:text-[#b08d55]" : "hover:bg-white/5 hover:text-[#b08d55]"}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

           <Link href="/careers" className="hover:text-[#b08d55] transition-colors">Careers</Link>
        </div>

        {/* 3. RIGHT ACTION (Contact Button + Hamburger) */}
        <div className="flex items-center gap-6">
          
          {/* Phone Icon & Text (Hidden on small screens) */}
          <div className={`hidden lg:flex items-center gap-3 ${isScrolled ? "text-slate-700" : "text-white"}`}>
            <div className={`rounded-full flex items-center gap-4 text-sm font-medium justify-center backdrop-blur-sm px-6 py-2.5 ${isScrolled ? "bg-gray-100/50 text-slate-700" : "bg-white/1 text-gray-200"}`}>
            <Link href="/services/women-corner" className="hover:text-[#b08d55] transition-colors">Women Corner</Link>
            <Link href="/services/nri-corner" className="hover:text-[#b08d55] transition-colors">NRI Services</Link>
            <Link href="/services/family-office" className="hover:text-[#b08d55] transition-colors">Family Office</Link>
             </div>
          </div>

          {/* CTA Button */}
          <Link href="/contact" className="hidden sm:block bg-[#E0A458] hover:bg-[#c68e46] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#E0A458]/20 transition-all transform hover:-translate-y-0.5">
            Get an appointment
          </Link>

        </div>

      </nav>
    </div>
  );
}
