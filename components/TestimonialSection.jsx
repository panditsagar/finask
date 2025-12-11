"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState('right');

  const testimonials = [
    {
      id: 1,
      quote: "Thanks, we've gained clarity and confidence in our financial future. Personalized approach and expert guidance have been invaluable. Highly recommend!",
      tagline: "In every dream lies a path waiting to be discovered.",
      author: "Andrew Taylor",
      location: "From USA",
      image: "/testimonial-andrew.png"
    },
    {
      id: 2,
      quote: "FinAsk transformed how I manage my business finances. Their strategic insights helped me unlock new growth opportunities I hadn't even considered.",
      tagline: "Success is not final, failure is not fatal.",
      author: "Sarah Jenkins",
      location: "Business Owner, UK",
      image: "/testimonial-sarah.png"
    },
    {
      id: 3,
      quote: "The level of transparency and dedication is unmatched. I finally feel like my portfolio is in safe hands, managed by people who truly care.",
      tagline: "Trust is the currency of the future.",
      author: "Michael Chen",
      location: "Investor, Singapore",
      image: "/testimonial-michael.png"
    },
    {
      id: 4,
      quote: "Creativity needs financial stability to thrive. FinAsk gave me the peace of mind to focus on my art while they handled the numbers perfectly.",
      tagline: "Design is intelligence made visible.",
      author: "Emily Carter",
      location: "Creative Director, Canada",
      image: "/testimonial-emily.png"
    }
  ];

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 pb-30 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-40 items-center justify-center">
          
          {/* LEFT: Overlapping Circles */}
          <div className="relative  w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
            {/* Circle 1: Quote Icon */}
            <div key={`quote-${currentIndex}`} className={`absolute left-1/2 -translate-x-[80%] lg:translate-x-0 lg:left-10 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-gray-200 bg-white flex items-center justify-center z-10 ${direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
              <Image
                src="/quote.png"
                alt="Quote"
                width={44}
                height={44}
                className="w-10 h-10 object-contain opacity-80"
              />            </div>

            {/* Circle 2: Image */}
            <div key={currentIndex} className={`absolute left-1/2 -translate-x-[20%] lg:translate-x-0 lg:left-38 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden shadow-xl z-20 ${direction === 'right' ? 'animate-rotate-in-right' : 'animate-rotate-in-left'}`}>
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col justify-center">
            <div key={currentIndex} className={direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}>
              <p className="text-[#b08d55] font-bold text-sm mb-6 uppercase tracking-wide">
                What Our Customers Feel About Our Services!
              </p>
              
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-slate-900 leading-relaxed mb-10">
                {currentTestimonial.quote}
              </h3>
              
              <div className="flex items-center gap-8">
                {/* Navigation Buttons */}
                 <div className="flex gap-4">
                  <button 
                    onClick={handlePrev}
                    className="w-12 h-12 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#b08d55] hover:border-[#b08d55] hover:text-white transition-all duration-300"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-12 h-12 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#b08d55] hover:border-[#b08d55] hover:text-white transition-all duration-300"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* Author Details */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{currentTestimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{currentTestimonial.location}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
