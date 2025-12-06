"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#b08d55] selection:text-white">
      <Navbar />

      {/* ----------------------------- */}
      {/*        HERO SECTION           */}
      {/* ----------------------------- */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/home1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.35) contrast(1.1)",
          }}
        />

        {/* Overlay with Arch Effect */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
        
        {/* Vertical Lines */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
            <div className="absolute top-0 bottom-0 left-[16.33%] w-px bg-[#ffcca8]" />
            <div className="absolute top-0 bottom-0 left-[50%] w-[2px] bg-[#ffcca8]" />
            <div className="absolute top-0 bottom-0 left-[83.66%] w-px bg-[#ffcca8]" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <h5 className="text-[#b08d55] uppercase tracking-[0.3em] text-xs md:text-xs font-bold mb-6 animate-fade-in-up border border-[#b08d55]/30 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
            Our Story
          </h5>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Stewarding <br />
            <span className="italic font-light text-[#dfa882] relative">
              Wealth
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#b08d55] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span> 
            <span className="ml-4">with Character</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Built in India. Designed for lives that dream bigger.
          </p>
        </div>
        
       
      </section>

      {/* ----------------------------- */}
      {/*        THE ETHOS (Bento Grid) */}
      {/* ----------------------------- */}
      <section id="philosophy" className="py-24 px-6 md:px-12 bg-[#fdfbf7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <span className="text-[#b08d55] font-serif italic text-xl">The Foundation</span>
             <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mt-2">The Ethos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Block 1: Main Text */}
            <div className="md:col-span-7 bg-white p-10 rounded-3xl shadow-sm border border-[#b08d55]/10 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#b08d55]/5 rounded-bl-full transition-transform group-hover:scale-150 duration-700" />
                <h3 className="font-serif text-3xl text-slate-800 mb-6 relative z-10">Wealth is not a balance sheet.</h3>
                <p className="text-slate-600 text-lg leading-relaxed relative z-10">
                    It is a child’s future funded without stress. A retirement that gives back more than it takes. 
                    It is the joy of giving, the calm of knowing, the quiet power of being prepared.
                </p>
            </div>

            {/* Block 2: Image */}
            <div className="md:col-span-5 relative rounded-3xl overflow-hidden shadow-sm h-[300px] md:h-auto group">
                <Image 
                    src="/family.jpg" 
                    alt="Family Joy" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-medium text-lg">"Stories in motion."</p>
                </div>
            </div>

            {/* Block 3: Quote */}
            <div className="md:col-span-5 bg-[#0b1218] p-10 rounded-3xl shadow-sm flex flex-col justify-center relative overflow-hidden text-white">
                 <Image 
                    src="/quote.png" 
                    alt="Quote" 
                    width={60}
                    height={60}
                    className="opacity-20 absolute top-6 right-6"
                />
                <p className="font-serif text-2xl md:text-3xl italic leading-snug text-[#dfa882]">
                    "No family should suffer because they didn’t know how to plan."
                </p>
                <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-px bg-white/30" />
                    <span className="text-sm uppercase tracking-widest text-gray-400">Our Promise</span>
                </div>
            </div>

            {/* Block 4: Secondary Text */}
            <div className="md:col-span-7 bg-[#e0a458]/10 p-10 rounded-3xl shadow-sm border border-[#b08d55]/20 flex flex-col justify-center">
                <p className="text-slate-800 text-lg leading-relaxed font-medium">
                    At FinAsk, we believe that wealth is not just grown. It is stewarded—with care, with clarity, and with character.
                </p>
                <p className="text-slate-600 mt-4">
                    What began as a quiet promise has evolved into a financial movement—now serving entrepreneurs, professionals, NRIs, family offices, and institutions seeking more than just returns. Seeking resonance.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        WHY WE EXIST           */}
      {/* ----------------------------- */}
      <section id="why-we-exist" className="py-0 bg-white relative">
        <div className="flex flex-col md:flex-row min-h-[80vh]">
            {/* Left: Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-auto">
                <Image 
                    src="/girl.png" 
                    alt="Why We Exist" 
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#b08d55]/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
            </div>

            {/* Right: Content Side */}
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-white relative">
                {/* Decorative Line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[#b08d55] hidden md:block" />
                
                <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 leading-tight">
                    Why We <br/><span className="text-[#b08d55]">Exist</span>
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                    We founded FinAsk on a simple philosophy: <br/>
                    <strong className="text-slate-900 font-medium">That every family deserves to approach life’s most meaningful moments unburdened by financial anxiety.</strong>
                </p>
                
                <div className="space-y-6">
                    <div className="flex gap-4 items-start group">
                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#b08d55] transition-colors duration-300">
                             <span className="text-xl group-hover:text-white transition-colors">🛡️</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Safeguarding Enterprise</h4>
                            <p className="text-sm text-slate-500 mt-1">Protecting what you've built against unforeseen risks.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start group">
                         <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#b08d55] transition-colors duration-300">
                             <span className="text-xl group-hover:text-white transition-colors">📜</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Succession Planning</h4>
                            <p className="text-sm text-slate-500 mt-1">Structuring plans that prevent future disputes.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start group">
                         <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#b08d55] transition-colors duration-300">
                             <span className="text-xl group-hover:text-white transition-colors">❤️</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Health & Life Cover</h4>
                            <p className="text-sm text-slate-500 mt-1">Ensuring no tragedy forces distress sales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        HOW WE WORK (Timeline) */}
      {/* ----------------------------- */}
      <section id="how-we-work" className="py-24 px-6 md:px-12 bg-[#0b1218] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">How We Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our approach is profoundly personal. We begin not with policies or portfolios, but with patient listening.
            </p>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b08d55] to-transparent hidden md:block" />

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-24 relative group">
                <div className="w-full md:w-[45%] text-right pr-0 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
                    <h3 className="text-2xl font-serif font-bold text-[#b08d55] mb-4">Patient Listening</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Understanding your ambitions, family narratives, business intricacies, and the deeper motivations that drive your decisions. We listen before we advise.
                    </p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#b08d55] border-4 border-[#0b1218] z-10 hidden md:block group-hover:scale-150 transition-transform" />
                <div className="w-full md:w-[45%] pl-0 md:pl-12 order-1 md:order-2">
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#b08d55]/50 transition-colors">
                        <Image src="/about-detail.png" alt="Listening" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>
                </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-24 relative group">
                 <div className="w-full md:w-[45%] text-right pr-0 md:pr-12 mb-8 md:mb-0 order-1">
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#b08d55]/50 transition-colors">
                        <Image src="/home.jpg" alt="Curating" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#b08d55] border-4 border-[#0b1218] z-10 hidden md:block group-hover:scale-150 transition-transform" />
                <div className="w-full md:w-[45%] pl-0 md:pl-12 order-2">
                    <h3 className="text-2xl font-serif font-bold text-[#b08d55] mb-4">Curated Frameworks</h3>
                    <p className="text-gray-400 leading-relaxed">
                        We design insurance plans that stand resilient, investment pathways that grow with confidence, and legacy structures that transfer values.
                    </p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between relative group">
                <div className="w-full md:w-[45%] text-right pr-0 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
                    <h3 className="text-2xl font-serif font-bold text-[#b08d55] mb-4">Living Richly</h3>
                    <p className="text-gray-400 leading-relaxed">
                        All designed so you can focus on living your present richly, while your future stands elegantly prepared. A partnership that extends across generations.
                    </p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#b08d55] border-4 border-[#0b1218] z-10 hidden md:block group-hover:scale-150 transition-transform" />
                <div className="w-full md:w-[45%] pl-0 md:pl-12 order-1 md:order-2">
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#b08d55]/50 transition-colors">
                        <Image src="/about-team.png" alt="Living Richly" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        THE TEAM               */}
      {/* ----------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="w-full md:w-1/2">
                      <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">The Stewards</h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          Our team is a collective of seasoned professionals, financial architects, and empathetic listeners. We don't just manage money; we manage trust.
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                              <h4 className="font-bold text-3xl text-[#b08d55] mb-2">15+</h4>
                              <p className="text-slate-600 text-sm">Years of Experience</p>
                          </div>
                          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                              <h4 className="font-bold text-3xl text-[#b08d55] mb-2">500+</h4>
                              <p className="text-slate-600 text-sm">Families Served</p>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image 
                        src="/about-team.png" 
                        alt="Our Team" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* ----------------------------- */}
      {/*        PARTNERSHIP CTA        */}
      {/* ----------------------------- */}
      <section id="mission" className="py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Background Image with Parallax feel */}
        <div className="absolute inset-0 z-0">
             <Image 
                src="/banner1.webp" 
                alt="Partnership" 
                fill 
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0b1218]/90" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                A Partnership <br/> <span className="text-[#b08d55]">Across Generations</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Success is never about how many clients we serve. It’s about how many lives continue seamlessly.
            </p>

            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#b08d55] to-[#dfa882]">
                <div className="bg-[#0b1218] rounded-full p-2">
                    <a href="#" className="inline-flex items-center gap-3 px-10 py-4 bg-[#b08d55] text-white rounded-full font-bold uppercase tracking-wider hover:bg-[#9a7b4f] transition-all shadow-lg hover:shadow-[#b08d55]/50">
                        Start a Conversation
                    </a>
                </div>
            </div>
            
            <p className="mt-8 text-sm text-gray-500 uppercase tracking-widest">No urgency. No obligations.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
