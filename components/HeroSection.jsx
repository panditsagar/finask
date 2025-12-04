"use client";


import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // Changed bg color to match the overlay color so it blends seamlessly
    <main className="min-h-screen bg-white text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* ----------------------------- */}
        {/*          NAVBAR               */}
        {/* ----------------------------- */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
          <nav className={`relative flex items-center justify-between w-[95%] max-w-7xl backdrop-blur-md border rounded-full px-6 py-3 shadow-2xl transition-all duration-300 ${isScrolled ? "bg-white/90 border-gray-200/50" : "bg-white/10 border-white/10"}`}>
            
            {/* 1. LOGO (Left) */}
            <div className="flex items-center gap-3 shrink-0">
              <div className={`rounded-full p-1.5 transition-colors duration-300 ${isScrolled ? "" : "bg-white"}`}>
                 <Image
                  src="/logo.webp"
                  alt="Finask Logo"
                  width={100}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>

            {/* 2. CENTER LINKS (Merged Left & Right Menus) */}
            <div className={`hidden xl:flex items-center gap-6 text-sm font-medium transition-colors duration-300 ${isScrolled ? "text-slate-700" : "text-gray-200"}`}>
           
              {/* About FinAsk */}
              <div className="group relative cursor-pointer h-full flex items-center">
                <span className="group-hover:text-[#b08d55] transition-colors py-2 flex items-center gap-1">
                  About
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-rotate-180 opacity-70">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
                <div className={`absolute top-full left-0 mt-5.5 w-56 shadow-xl rounded-b-xl ring-1 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 overflow-hidden border ${isScrolled ? "bg-white ring-black/5 text-slate-600 border-gray-100" : "bg-[#1a202c] ring-white/10 text-gray-300 border-white/10"}`}>
                  <ul className="py-2 text-sm">
                    {["Our Philosophy", "Why We Exist", "How We Work", "Mission - Vision"].map((item) => (
                      <li key={item}>
                        <a href="#" className={`block px-5 py-2.5 transition-colors ${isScrolled ? "hover:bg-gray-50 hover:text-[#b08d55]" : "hover:bg-white/5 hover:text-[#b08d55]"}`}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
                        {["Health Insurance", "Super Health Top-Up", "Personal Accident", "Critical Illness", "Life Insurance", "Term Insurance", "ULIP", "Traditional Savings", "Motor Insurance", "Travel Insurance", "Property Insurance", "Corporate Insurance"].map((item) => (
                          <li key={item} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer block ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Column B: Investments */}
                    <div className="space-y-4 pl-4">
                      <h3 className="font-bold text-[#b08d55] text-xs uppercase tracking-wider">Investments</h3>
                      <ul className={`space-y-2 text-[13px] font-medium ${isScrolled ? "text-slate-500" : "text-gray-400"}`}>
                        {["Mutual Funds", "Bonds", "PMS", "AIFs", "Unlisted Equity", "REITs & InvITs", "Fractional Real Estate", "P2P Lending", "Corporate FDRs", "GIFT City", "Stock & Broking"].map((item) => (
                          <li key={item} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer block ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Column C: Goal Planning */}
                    <div className="space-y-4 pl-4">
                      <h3 className="font-bold text-[#b08d55] text-xs uppercase tracking-wider">Goal Planning</h3>
                      <ul className={`space-y-2 text-[13px] font-medium ${isScrolled ? "text-slate-500" : "text-gray-400"}`}>
                        {["Retirement Planning", "Home Purchase", "Child Education", "NRI Corner", "Women Corner", "Trust Formation", "Will Writing", "Estate Planning", "Executor Services"].map((item) => (
                          <li key={item} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer block ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Column D: Consultation */}
                    <div className="space-y-4 pl-4">
                      <h3 className="font-bold text-[#b08d55] text-xs uppercase tracking-wider">Consultation</h3>
                      <ul className={`space-y-2 text-[13px] font-medium ${isScrolled ? "text-slate-500" : "text-gray-400"}`}>
                        {["1:1 Consult Desk", "Legal Advisory", "Tax Advisory"].map((item) => (
                          <li key={item} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer block ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Column E: Empowerment */}
                    <div className="space-y-4 pl-4   -my-8 py-8 -mr-8 pr-8 rounded-br-xl">
                      <h3 className="font-bold text-[#b08d55] text-xs uppercase tracking-wider">Empowerment</h3>
                      <ul className="space-y-3 text-[13px] text-gray-400 font-medium">
                        {["Investor Education", "Financial Literacy", "Next-Gen Coaching", "Purpose Beyond Profit"].map((item) => (
                          <li key={item} className={`hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2 ${isScrolled ? "hover:text-[#b08d55]" : "hover:text-white"}`}><span className="w-1.5 h-1.5 rounded-full bg-[#b08d55]"></span>{item}</li>
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

               <a href="#" className="hover:text-[#b08d55] transition-colors">Careers</a>
            </div>

            {/* 3. RIGHT ACTION (Contact Button + Hamburger) */}
            <div className="flex items-center gap-6">
              
              {/* Phone Icon & Text (Hidden on small screens) */}
              <div className={`hidden lg:flex items-center gap-3 ${isScrolled ? "text-slate-700" : "text-white"}`}>
                <div className={`rounded-full flex items-center gap-4 text-sm font-medium justify-center backdrop-blur-sm px-6 py-2.5 ${isScrolled ? "bg-gray-100/50 text-slate-700" : "bg-white/1 text-gray-200"}`}>
                       <a href="#" className="hover:text-[#b08d55] transition-colors">Women Corner</a>
              <a href="#" className="hover:text-[#b08d55] transition-colors">NRI Services</a>
              <a href="#" className="hover:text-[#b08d55] transition-colors">Family office</a>
                 </div>
              </div>

              {/* CTA Button */}
              <a href="#" className="hidden sm:block bg-[#E0A458] hover:bg-[#c68e46] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#E0A458]/20 transition-all transform hover:-translate-y-0.5">
                Get an appointment
              </a>
 
            </div>

          </nav>
        </div>

        {/* ----------------------------- */}
        {/*        HERO CONTENT           */}
        {/* ----------------------------- */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 mt-24 max-w-6xl mx-auto w-full">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
            Where Wealth Meets Purpose, <br className="hidden md:block" />
            and Legacies Find <br />
            <span className="text-[#b08d55] text  "> Direction</span>
          </h1>
          
          <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-medium font-light tracking-wide drop-shadow-md">
            Beyond returns, we craft clarity for families, entrepreneurs, <br className="hidden md:block" />
            and visionaries who see wealth as a narrative.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#" className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#b08d55] text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-[#9a7b4f] hover:scale-105 shadow-xl hover:shadow-[#b08d55]/30">
              <span className="font-semibold tracking-wider text-sm uppercase">Start Your Journey</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/home1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.6) contrast(1.2)",
          }}
        />

        {/* THE ARCH OVERLAY */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundColor: "rgba(5, 11, 16, 0.68)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage:
              "radial-gradient(80% 175% at 50% 112%, transparent 50%, black 50.2%)",
            WebkitMaskImage:
              "radial-gradient(80% 175% at 50% 112%, transparent 50%, black 50.2%)",
          }}
        >
          {/* Vertical Gold Lines */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: "16.33%",
              width: "1px",
              background: "rgba(255, 215, 181, 0.22)",
            }}
          />
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: "50%",
              width: "2px",
              background: "rgba(255, 215, 181, 0.22)",
            }}
          />
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: "83.66%",
              width: "1px",
              background: "rgba(255, 215, 181, 0.22)",
            }}
          />
        </div>
      </section>
    </main>
  );
}
