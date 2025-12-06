"use client";


import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

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
        <Navbar isScrolled={isScrolled} />

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
