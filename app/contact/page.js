"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
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
            Contact Us
          </h5>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Let's   
            <span className="italic font-light text-[#dfa882] relative">
              Talk
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#b08d55] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Because a 10-minute conversation can create 10 years of clarity.
          </p>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*      FLOATING CARD            */}
      {/* ----------------------------- */}
      <section className="px-6 relative z-20 -mt-24 md:-mt-26 mb-24">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                
                {/* Title Column */}
                <div className="w-full md:w-1/4 bg-slate-50 p-10 flex items-center justify-center md:justify-center border-b md:border-b-0 md:border-r border-slate-100">
                    <h3 className="font-serif text-3xl text-slate-900 leading-tight text-center md:text-center">
                        How can  we <br/> help?
                    </h3>
                </div>

                {/* Options Container */}
                <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    
                    {/* Option 1: Call */}
                    <a href="tel:+919876543210" className="group p-10 flex flex-col items-center justify-center text-center hover:bg-[#fdfbf7] transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-[#e0f2fe] text-[#0ea5e9] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">Schedule a call</h4>
                        <p className="text-sm text-slate-500">Speak directly with an advisor</p>
                    </a>

                    {/* Option 2: Chat */}
                    <a href="https://wa.me/919876543210" target="_blank" className="group p-10 flex flex-col items-center justify-center text-center hover:bg-[#fdfbf7] transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-[#dcfce7] text-[#22c55e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">Chat with us</h4>
                        <p className="text-sm text-slate-500">Instant answers on WhatsApp</p>
                    </a>

                    {/* Option 3: Email */}
                    <a href="mailto:connect@finask.com" className="group p-10 flex flex-col items-center justify-center text-center hover:bg-[#fdfbf7] transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-[#f3e8ff] text-[#a855f7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">Send us an email</h4>
                        <p className="text-sm text-slate-500">connect@finask.com</p>
                    </a>

                </div>
            </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        OFFICE LOCATIONS       */}
      {/* ----------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-[#fdfbf7] relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
              <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#b08d55] rounded-full blur-[120px] opacity-10" />
              <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#b08d55] rounded-full blur-[120px] opacity-10" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                  <span className="text-[#b08d55] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">Our Presence</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">Visit Our Offices</h2>
                  <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
                      Come say hello. We’d love to host you for a cup of coffee and a conversation about your future.
                  </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { 
                          city: "Mumbai", 
                          type: "Headquarters",
                          address: "1201, One World Center, Lower Parel, Mumbai - 400013", 
                          phone: "+91 22 4000 5000",
                          image: "/home.jpg"
                      },
                      { 
                          city: "Bangalore", 
                          type: "Regional Office",
                          address: "WeWork Galaxy, Residency Road, Shanthala Nagar, Bangalore - 560025", 
                          phone: "+91 80 4000 6000",
                          image: "/about-detail.png"
                      },
                      { 
                          city: "Delhi NCR", 
                          type: "Regional Office",
                          address: "DLF Cyber City, Building 10, Tower B, Gurgaon - 122002", 
                          phone: "+91 124 4000 7000",
                          image: "/about-team.png"
                      }
                  ].map((office, idx) => (
                      <div key={idx} className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#b08d55]/30 transition-all duration-500 hover:-translate-y-2">
                          {/* Image Header */}
                          <div className="h-48 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                              <Image 
                                  src={office.image} 
                                  alt={office.city} 
                                  fill 
                                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute bottom-4 left-6 z-20">
                                  <span className="text-white text-xs font-bold uppercase tracking-wider bg-[#b08d55] px-2 py-1 rounded mb-2 inline-block">{office.type}</span>
                                  <h3 className="font-serif text-2xl font-bold text-white">{office.city}</h3>
                              </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-8 pt-6">
                              <div className="flex items-start gap-4 mb-6">
                                  <div className="w-10 h-10 rounded-full bg-[#f8f5f2] flex items-center justify-center shrink-0 text-[#b08d55]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                  </div>
                                  <p className="text-slate-600 leading-relaxed text-sm">{office.address}</p>
                              </div>
                              
                              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                  <div className="w-10 h-10 rounded-full bg-[#f8f5f2] flex items-center justify-center shrink-0 text-[#b08d55]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                  </div>
                                  <a href={`tel:${office.phone}`} className="text-slate-800 hover:text-[#b08d55] transition-colors font-medium">{office.phone}</a>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* ----------------------------- */}
      {/*        FULL WIDTH MAP         */}
      {/* ----------------------------- */}
      <section className="w-full h-[500px] relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.955433276685!2d72.8318853759628!3d19.02166398217227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cecf1e263305%3A0x6273c77461623315!2sOne%20World%20Center!5e0!3m2!1sen!2sin!4v1709620000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Overlay Card on Map (Optional, for style) */}
        <div className="absolute top-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
            <h4 className="font-bold text-slate-900 mb-2">FinAsk HQ</h4>
            <p className="text-sm text-slate-600">One World Center, Mumbai</p>
            <a href="https://maps.google.com" target="_blank" className="text-xs text-[#b08d55] font-bold mt-2 inline-block uppercase tracking-wider">Get Directions</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
