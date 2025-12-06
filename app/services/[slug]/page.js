"use client";

import { use, useState } from "react";
import { getServiceBySlug, getAllServices } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ServicePage({ params }) {
  const unwrappedParams = use(params);
  const service = getServiceBySlug(unwrappedParams.slug);
  const allServices = getAllServices();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  if (!service) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#b08d55] selection:text-white">
      <Navbar />

      {/* ----------------------------- */}
      {/*        HERO SECTION           */}
      {/* ----------------------------- */}
      {/* ----------------------------- */}
      {/*        HERO SECTION           */}
      {/* ----------------------------- */}
      <section className="relative h-[80vh] flex flex-col justify-center overflow-hidden bg-[#0b1218]">
         {/* Background Image */}
         <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/banner1.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.35) contrast(1.1)",
          }}
        />
        
        {/* Overlay with Arch Effect (Matching About Page) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />

        {/* Vertical Lines (Matching About Page) */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
            <div className="absolute top-0 bottom-0 left-[16.33%] w-px bg-[#ffcca8]" />
            <div className="absolute top-0 bottom-0 left-[50%] w-[2px] bg-[#ffcca8]" />
            <div className="absolute top-0 bottom-0 left-[83.66%] w-px bg-[#ffcca8]" />
        </div>

        <div className="relative z-20 px-6 md:px-12 max-w-5xl mx-auto w-full mt-10 text-center flex flex-col items-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                {service.title}
            </h1>
            {service.tagline && (
                <p className="text-xl md:text-2xl text-[#b08d55] font-serif italic mb-8 max-w-3xl leading-relaxed mx-auto">
                    "{service.tagline}"
                </p>
            )}
            <div className="inline-flex items-center gap-3 text-gray-300 text-sm md:text-base bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
                <Link href="/" className="hover:text-[#b08d55] transition-colors font-medium">Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b08d55]"><polyline points="9 18 15 12 9 6"/></svg>
                <span className="text-gray-300 font-medium">Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b08d55]"><polyline points="9 18 15 12 9 6"/></svg>
                <span className="text-[#b08d55] font-bold">{service.title}</span>
            </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        MAIN CONTENT           */}
      {/* ----------------------------- */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* SIDEBAR */}
            <aside className="w-full lg:w-1/3 space-y-8">
                {/* Service Navigation */}
                <div className="bg-[#f8f5f2] rounded-2xl p-6 border border-[#b08d55]/10">
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <span className="w-5 h-2 bg-[#b08d55] rounded-full"></span>
                        Our Services
                    </h3>
                    <ul className="space-y-3">
                        {allServices
                            .filter(s => s.category === service.category)
                            .map((s) => (
                            <li key={s.slug}>
                                <Link 
                                    href={`/services/${s.slug}`}
                                    className={`flex items-center justify-start gap-3 px-5 py-3 rounded-full transition-all font-medium text-sm border ${
                                        s.slug === service.slug 
                                            ? "bg-[#b08d55] text-white border-[#b08d55] shadow-md" 
                                            : "bg-white text-slate-600 border-slate-100 hover:border-[#b08d55] hover:text-[#b08d55] shadow-sm"
                                    }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={s.slug === service.slug ? "text-white" : "text-[#b08d55]"}><polyline points="9 18 15 12 9 6"/></svg>
                                    {s.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Downloads */}
                <div className="bg-white rounded-2xl px-6 py-3 border border-slate-100  ">
                    
                     <div className="bg-white rounded-xl">
                        {/* Item 1 */}
                        <div className="flex items-center justify-between py-4 border-b border-slate-100 group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#1f2937] flex items-center justify-center text-white shrink-0 group-hover:bg-[#b08d55] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800 text-sm">Business Broucher.doc</p>
                                    <p className="text-xs text-slate-500 mt-1">78 KB</p>
                                </div>
                            </div>
                            <div className="text-slate-400 group-hover:text-[#b08d55] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center justify-between py-4 group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#1f2937] flex items-center justify-center text-white shrink-0 group-hover:bg-[#b08d55] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800 text-sm">Company Flow.pdf</p>
                                    <p className="text-xs text-slate-500 mt-1">58 KB</p>
                                </div>
                            </div>
                            <div className="text-slate-400 group-hover:text-[#b08d55] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-[#1f2937] to-[#0b1218] rounded-2xl p-8 py-30 text-white relative overflow-hidden text-center group">
                    <div className="absolute inset-0 bg-[url('/building.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay" />
                    <div className="relative z-10 flex flex-col items-center">
                        <h3 className="font-serif text-5xl font-bold mb-6 tracking-widest">FINASK<span className="text-[#b08d55]">.</span></h3>
                        <p className="text-xl font-medium mb-8 leading-snug">Unlock Your Financial Potential Today!</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm transition-all uppercase tracking-wider">
                            Contact Us 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* CONTENT AREA */}
            <div className="w-full lg:w-2/3">
                {/* Main Image */}
                <div className="relative h-[500px] rounded-3xl overflow-hidden mb-10 shadow-lg">
                    <Image 
                        src="/about-detail.png" 
                        alt={service.title} 
                        fill 
                        className="object-cover"
                    />
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">Expert Guidance for <span className="text-[#b08d55]">{service.title}</span></h2>
                <p className="text-slate-600 text-md leading-relaxed mb-12">
                    {service.description}
                </p>

                {/* Features Grid */}
                {/* Features Grid */}
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {service.features && service.features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[1rem] border border-slate-200     transition-all group relative overflow-hidden h-full flex flex-col justify-between min-h-[240px]">
                            <div className="absolute right-6 -bottom-4 text-[8rem] font-bold text-slate-50 opacity-60 select-none pointer-events-none group-hover:text-[#b08d55]/10 transition-colors leading-none">
                                {String(idx + 1).padStart(2, '0')}
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 mb-6 text-[#b08d55]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}

                    {/* Filler Card if features < 3 */}
                    {service.features && service.features.length < 3 && (
                        <div className="bg-white p-8 rounded-[1rem] border border-slate-200   transition-all group relative overflow-hidden h-full flex flex-col justify-between min-h-[240px]">
                            <div className="absolute right-6 -bottom-8 text-[8rem] font-bold text-slate-50 opacity-60 select-none pointer-events-none group-hover:text-[#b08d55]/5 transition-colors leading-none">
                                {String(service.features.length + 1).padStart(2, '0')}
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 mb-6 text-[#b08d55]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">Expert Support</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">Our dedicated team is always available to guide you through every step of your journey.</p>
                            </div>
                        </div>
                    )}
                    
                    {/* Success Project Card (Integrated into Grid) */}
                    <div className="bg-[#111827] p-8 rounded-[1rem]   flex flex-col justify-between relative overflow-hidden text-white group h-full min-h-[240px]">
                         <div className="relative z-10">
                             <div className="flex gap-1 mb-6 text-[#b08d55] ">
                                 {[1,2,3,4,5].map(i => <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                             </div>
                             <hr className="border-[#b08d55 ] pb-4"/>
                             <h3 className="font-serif text-3xl font-bold mb-3">Success Project</h3>
                             <p className="text-gray-400 text-sm mb-4 leading-relaxed">We completed 85% success project in business.</p>
                         </div>
                      
                    </div>
                </div>

                {/* FAQ Section */}
                {service.faq && (
                    <div className="mb-12">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-10 shadow-sm">
                            <Image 
                                src="/about-team.png" 
                                alt="Team Support" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-8">Common Questions Answered</h3>
                        <div className="space-y-0">
                            {service.faq.map((item, idx) => (
                                <div key={idx} className="border-b border-slate-200 last:border-0">
                                    <button 
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-start gap-4 py-5 text-left focus:outline-none group"
                                    >
                                        {/* Icon */}
                                        <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                            openFaqIndex === idx 
                                                ? 'bg-[#b08d55] text-white' 
                                                : 'bg-slate-800 text-white group-hover:bg-[#b08d55]'
                                        }`}>
                                             <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="14" 
                                                height="14" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="3" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                                className={`transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-90' : 'rotate-0'}`}
                                             >
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                             </svg>
                                        </div>

                                        {/* Question */}
                                        <span className={`font-serif text-lg font-bold transition-colors duration-300 ${
                                            openFaqIndex === idx ? 'text-[#b08d55]' : 'text-slate-900'
                                        }`}>
                                            {item.question}
                                        </span>
                                    </button>
                                    
                                    {/* Answer */}
                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            openFaqIndex === idx ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <p className="text-slate-600 leading-relaxed pl-10 pr-4 text-sm md:text-base">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <Link href="/contact" className="inline-flex items-center gap-2 text-[#b08d55] font-bold hover:gap-4 transition-all">
                    Start your journey <span className="text-xl">&rarr;</span>
                </Link>

            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
