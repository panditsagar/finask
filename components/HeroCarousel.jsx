"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const slides = [
  {
    id: 1,
            image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2670&auto=format&fit=crop", // Happy Family

    title: "Where Wealth Meets Purpose, and Legacies Find Direction",
    subtitle: "Beyond returns, we craft clarity—for families, entrepreneurs, and visionaries who see wealth not just as numbers, but as a narrative.",
    highlight: "Direction",
    theme: "light"
  },
  {
    id: 2,
    image: "hero3.png", // Legacy/Generational
    title: "Clarity Today. Confidence Tomorrow. Continuity Forever.",
    subtitle: "From investments and insurance to succession and stewardship, we don’t just manage your wealth—we help it grow with integrity, empathy, and foresight.",
    highlight: "Forever.",
    theme: "light"
  },
  {
    id: 3,
    image: "/hero2.jpg", // Clarity/Success

    title: "Protecting Dreams. Preserving Legacies. Powering Generations.",
    subtitle: "For every milestone—child’s education, retirement, business succession, or global investing—FinAsk is where aspirations meet trusted financial architecture.",
    highlight: "Generations.",
    theme: "light"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-[#0b1218]">
       {/* Navbar Overlay */}
       <div className="absolute top-0 w-full z-50">
         <Navbar />
      </div>

      {/* Slides Container */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
             {/* Background Image */}
             <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105"
                style={{ 
                    backgroundImage: `url('${slide.image}')`,
                    transform: index === current ? "scale(1.1)" : "scale(1.0)"
                }}
             />
             
             {/* Gradient Overlay (Darker at bottom for text readability) */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
          </div>
        ))}
      </div>

      {/* MAIN CONTENT (Bottom Right Alignment) */}
      <div className="absolute inset-0 z-20 flex items-end justify-end pb-20 px-6 md:px-16 pointer-events-none">
          <div className="max-w-3xl text-right pointer-events-auto">
              
              {/* Dynamic Headline from Slides */}
              <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-normal text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
                 {slides[current].title}
              </h1>

              {/* Horizontal Line Separator */}
              <div className="w-full h-[1.5px] bg-white mb-6 ml-auto"></div>

              {/* Subheadline */}
              <p className="text-white/90 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-3xl ml-auto drop-shadow-md">
                 {slides[current].subtitle}
              </p>

              {/* Action Button (Orange/Gold Rectangle) */}
              <Link href="/contact" className="inline-block px-10 py-4 bg-[#b08d55] text-white font-bold tracking-widest uppercase text-sm hover:bg-[#9a7b4f] transition-colors shadow-lg">
                 Start a Conversation
              </Link>

          </div>
      </div>

      {/* LEFT SIDEBAR (Social Icons + Vertical Line) */}
      <div className="absolute left-16 bottom-0 top-0 w-12 z-30 hidden md:flex flex-col items-center justify-end pb-20 gap-8">
          <div className="flex flex-col gap-6 text-white/80">
             <a href="#" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </a>
             <a href="#" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
             <a href="#" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
          </div>
          {/* Vertical Line */}
          <div className="w-[1px] h-32 bg-white/30 mt-4"></div>
      </div>

    </section>
  );
}
