"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CareersPage() {
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
            backgroundImage: 'url("/banner1.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.3) contrast(1.2)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b1218] via-transparent to-black/60" />
        
        {/* Vertical Lines */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
            <div className="absolute top-0 bottom-0 left-[16.33%] w-px bg-[#ffcca8]" />
            <div className="absolute top-0 bottom-0 left-[50%] w-[2px] bg-[#ffcca8]" />
            <div className="absolute top-0 bottom-0 left-[83.66%] w-px bg-[#ffcca8]" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <h5 className="text-[#b08d55] uppercase tracking-[0.3em] text-xs md:text-xs font-bold mb-6 animate-fade-in-up border border-[#b08d55]/30 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
            Join Our Team
          </h5>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Where Purpose <br />
            <span className="italic font-light text-[#dfa882] relative">
              Meets Profession
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#b08d55] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            We’re building a team that redefines financial wellbeing in India and beyond.
          </p>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        THE ETHOS (Split)      */}
      {/* ----------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 relative z-10">
                <span className="inline-block w-16 h-1 bg-[#b08d55] mb-8"></span>
                <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 leading-tight">
                    Responsibility <br/> <span className="text-[#b08d55] italic">Before Revenue</span>
                </h2>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                    <p>
                        If you believe in <strong className="text-slate-900 font-medium">empathy before execution</strong>, we’d love to hear from you.
                    </p>
                    <p>
                        At FinAsk, we don't just hire employees; we invite custodians of trust. We are looking for individuals who understand that behind every portfolio is a person, a family, and a dream.
                    </p>
                    <p>
                        We are not in the business of selling. We are in the business of solving.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-4">
                            <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden"><Image src="/testimonial-michael.png" alt="Team" fill className="object-cover" /></div>
                            <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden"><Image src="/testimonial-sarah.png" alt="Team" fill className="object-cover" /></div>
                            <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden"><Image src="/testimonial-andrew.png" alt="Team" fill className="object-cover" /></div>
                        </div>
                        <p className="text-sm font-medium text-slate-500">Join 50+ visionaries</p>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group">
                 <Image 
                    src="/about-detail.png" 
                    alt="Team Discussion" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                    <p className="font-serif italic text-slate-800 text-lg">"The best way to predict the future is to create it."</p>
                </div>
            </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        CULTURE (Bento)        */}
      {/* ----------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">Why Build With Us?</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">More than a workplace, FinAsk is a platform for your potential.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                
                {/* Card 1: Impact */}
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-[#b08d55]/10 flex flex-col justify-between group">
                    <div className="w-14 h-14 rounded-full bg-[#b08d55]/10 flex items-center justify-center text-[#b08d55] text-2xl mb-4 group-hover:bg-[#b08d55] group-hover:text-white transition-colors">
                        🌟
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">Impact Driven</h3>
                        <p className="text-slate-600 leading-relaxed">Your work directly influences the financial peace of mind of families across generations.</p>
                    </div>
                </div>

                {/* Card 2: Image */}
                <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-sm min-h-[300px] group">
                    <Image 
                        src="/about-team.png" 
                        alt="Team Culture" 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="font-serif text-2xl font-bold">Collaborative Spirit</h3>
                        <p className="opacity-90">We win together.</p>
                    </div>
                </div>

                {/* Card 3: Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-[300px] group">
                     <Image 
                        src="/home.jpg" 
                        alt="Office" 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                     <div className="absolute inset-0 bg-[#b08d55]/80 mix-blend-multiply" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="font-serif text-3xl font-bold text-white text-center px-4">Growth <br/> Mindset</h3>
                     </div>
                </div>

                {/* Card 4: Care */}
                <div className="md:col-span-2 bg-[#0b1218] p-10 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#b08d55] rounded-full blur-[80px] opacity-20" />
                    <div className="flex-1 relative z-10">
                        <h3 className="font-serif text-3xl font-bold mb-4 text-[#dfa882]">Culture of Care</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            We value people over profits. A supportive environment where your well-being matters as much as your output.
                        </p>
                    </div>
                    <div className="shrink-0 relative z-10">
                        <div className="w-20 h-20 rounded-full border-2 border-[#b08d55] flex items-center justify-center">
                            <span className="text-3xl">🤝</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*     AWARDS & RECOGNITION      */}
      {/* ----------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="text-[#b08d55] font-bold tracking-widest uppercase text-sm mb-4 block">Excellence</span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">Awards & Recognition</h2>
            <h3 className="text-slate-500 text-xl md:text-2xl font-serif italic mb-12">"Testament to trust."</h3>
            
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
                Our recognition is not just for performance—but for the impact we’ve created in the lives we manage.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Placeholders for Awards - Styled as elegant cards */}
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-[4/3] bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-xl transition-all hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b08d55]/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b08d55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                        </div>
                        <span className="text-slate-800 font-bold font-serif">Award {item}</span>
                        <span className="text-xs text-slate-400 mt-1">202{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        OPEN POSITIONS         */}
      {/* ----------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-[#0b1218] text-white relative">
         {/* Decorative Background */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#b08d55 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4">Open Positions</h2>
                    <p className="text-gray-400">Join us in shaping the future of wealth.</p>
                </div>
                <button className="hidden md:block px-6 py-3 border border-[#b08d55] text-[#b08d55] rounded-full hover:bg-[#b08d55] hover:text-white transition-colors">
                    View All Roles
                </button>
            </div>
            
            <div className="space-y-4">
                {[
                    { role: "Senior Wealth Manager", loc: "Mumbai", type: "Full-time", dept: "Advisory" },
                    { role: "Investment Research Analyst", loc: "Bangalore", type: "Full-time", dept: "Research" },
                    { role: "Client Relations Executive", loc: "Delhi / NCR", type: "Full-time", dept: "Sales" },
                    { role: "Frontend Developer (React/Next.js)", loc: "Remote", type: "Contract", dept: "Tech" }
                ].map((job, idx) => (
                    <div key={idx} className="group flex flex-col md:flex-row items-center justify-between p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#b08d55]/50 transition-all cursor-pointer">
                        <div className="mb-4 md:mb-0 w-full md:w-auto">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#b08d55] bg-[#b08d55]/10 px-2 py-1 rounded">{job.dept}</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#b08d55] transition-colors">{job.role}</h3>
                            <p className="text-gray-400 text-sm mt-2 flex items-center gap-4">
                                <span className="flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> {job.loc}</span>
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                <span>{job.type}</span>
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex justify-end">
                            <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#b08d55] group-hover:border-[#b08d55] transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-rotate-45 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#b08d55] to-[#dfa882] text-center">
                <h3 className="font-serif text-2xl font-bold text-white mb-4">Don't see a role that fits?</h3>
                <p className="text-white/90 mb-8 max-w-xl mx-auto">We are always looking for exceptional talent. If you think you can make a difference, we want to hear from you.</p>
                <a href="mailto:careers@finask.com" className="inline-flex items-center gap-2 bg-white text-[#b08d55] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    Send us your resume
                </a>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
