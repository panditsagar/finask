import { valuesData } from "@/app/data/values";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// Generate static params for all values
export async function generateStaticParams() {
  return valuesData.map((value) => ({
    slug: value.slug,
  }));
}

export const dynamicParams = false;

export default async function ValueDetailsPage({ params }) {
  // Await params for Next.js 15+ compatibility (though this is Next 16 per package.json, typically params are awaited or straight props depending on version, safe to await or treat as promise in newer generic patterns, but standard access works for 14/15. Let's assume standard access work for now, or just destructure if it's not a promise. In Next 15 params is a promise. package.json says "next": "^16.0.8", so params IS a promise)
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const value = valuesData.find((v) => v.slug === slug);

  if (!value) {
    notFound();
  }

  const currentIndex = valuesData.findIndex((v) => v.slug === slug);
  const nextValue = valuesData[(currentIndex + 1) % valuesData.length];
  const prevValue = valuesData[(currentIndex - 1 + valuesData.length) % valuesData.length];

  return (
    <>
      <Navbar />
      <main className="  min-h-screen  ">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col justify-center overflow-hidden bg-[#0b1218]">
         {/* Background Image */}
         <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${value.image}')`,
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
                {value.title}
            </h1>
            {value.tagline && (
                <p className="text-xl md:text-2xl text-[#b08d55] font-serif italic mb-8 max-w-3xl leading-relaxed mx-auto">
                    "{value.tagline}"
                </p>
            )}
            <div className="inline-flex items-center gap-3 text-gray-300 text-sm md:text-base bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
                <Link href="/" className="hover:text-[#b08d55] transition-colors font-medium">Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b08d55]"><polyline points="9 18 15 12 9 6"/></svg>
                <span className="text-gray-300 font-medium">Values</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b08d55]"><polyline points="9 18 15 12 9 6"/></svg>
                <span className="text-[#b08d55] font-bold">{value.title}</span>
            </div>
        </div>
      </section>

      {/* Content Section */}
      {/* ----------------------------- */}
      {/*        MAIN CONTENT           */}
      {/* ----------------------------- */}
      
      {/* SECTION 1: Introduction & Philosophy */}
      <section className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
         {/* Decorative Background Element */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b08d55]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
         
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-8 animate-fade-in-up delay-200 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Embodying <span className="text-[#b08d55]">{value.title}</span>
              </h2>
              <div className="space-y-6">
                 {value.description.map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className="text-lg md:text-xl leading-loose text-slate-600 font-sans"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="pt-4">
                 <div className="h-1 w-24 bg-[#b08d55] rounded-full" />
              </div>
            </div>

            {/* Right: Visual */}
             <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
                 <Image
                    src={value.detailImage || value.image}
                    alt={value.title + " detail"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                 
                 {/* Floating Card */}
                 <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-[#b08d55] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-serif italic text-lg text-slate-800">
                      "{value.tagline}"
                    </p>
                 </div>
             </div>
         </div>
      </section>

      {/* SECTION 2: Determine Impact (Dark Section) */}
      <section className="py-20 px-6 md:px-12 bg-[#0b1218] text-white relative">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Visual */}
                <div className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                   <Image
                      src={value.image}
                      alt={value.title + " impact"}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   />
                </div>

                {/* Content */}
                <div className="space-y-8">
                   <h3 className="text-[#b08d55] font-bold tracking-widest uppercase text-sm">Why It Matters</h3>
                   <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                     {value.impactTitle}
                   </h2>
                   <p className="text-xl text-gray-300 leading-relaxed font-light">
                     {value.impactText}
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                      {value.principles.slice(0, 2).map((p, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#b08d55] shrink-0">
                             <Quote className="w-5 h-5 rotate-180" />
                           </div>
                           <div>
                              <h4 className="font-bold text-white text-lg mb-2">{p.title}</h4>
                              <p className="text-gray-400 text-sm">{p.text}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

             </div>
          </div>
      </section>

      {/* SECTION 3: Core Principles Grid */}
      <section className="py-20 px-6 md:px-12 bg-white relative">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Core Principles</h2>
               <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">The fundamental pillars that guide our actions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {value.principles.map((principle, idx) => (
                  <div 
                    key={idx} 
                    className="group relative bg-[#f9fafb] p-8 md:p-10 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-1"
                  >
                     {/* Top Highlight Line */}
                     <div className="absolute top-0 left-0 w-full h-1 bg-[#b08d55] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                     
                     <div className="flex items-start justify-between mb-8">
                        <span className="text-5xl font-serif font-bold text-slate-200 group-hover:text-[#b08d55] transition-colors duration-300">
                          0{idx + 1}
                        </span>
                        <div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:border-[#b08d55] transition-colors shadow-sm">
                           <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#b08d55] transition-colors"></div>
                        </div>
                     </div>

                     <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif group-hover:text-[#b08d55] transition-colors">{principle.title}</h3>
                     <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                        {principle.text}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 4: Full Width Quote */}
      <section className="py-20 px-6 md:px-12 bg-white relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 opacity-5">
            <Quote className="w-full h-full text-[#b08d55]" />
         </div>
         <div className="max-w-5xl mx-auto text-center relative z-10">
            <Quote className="w-16 h-16 text-[#b08d55] mx-auto mb-8 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-serif italic text-slate-800 leading-tight mb-8">
              "{value.quote}"
            </h2>
            <div className="h-px w-24 bg-[#b08d55] mx-auto" />
            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-[#b08d55]">The FinAsk Promise</p>
         </div>
      </section>

      {/* Navigation Footer for Values */}
      {/* Navigation Footer for Values */}
      <nav className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <Link href={`/values/${prevValue.slug}`} className="group relative flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 w-full md:w-[40%] hover:bg-[#f9f8f6]  hover:-translate-y-1 border border-transparent hover:border-[#b08d55]/10">
            <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#b08d55] group-hover:text-white transition-all duration-300 shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 group-hover:text-[#b08d55] transition-colors">Previous</span>
              <span className="block text-xl font-serif font-bold text-slate-800 group-hover:text-[#0b1218] transition-colors">{prevValue.title}</span>
            </div>
          </Link>

          <Link href="/" className="opacity-30 hover:opacity-100 transition-opacity duration-300">
            <div className="grid grid-cols-2 gap-1 w-5 h-5">
              <div className="bg-[#b08d55] rounded-[1px]"></div>
              <div className="bg-[#b08d55] rounded-[1px]"></div>
              <div className="bg-[#b08d55] rounded-[1px]"></div>
              <div className="bg-[#b08d55] rounded-[1px]"></div>
            </div>
          </Link>

          <Link href={`/values/${nextValue.slug}`} className="group relative flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 w-full md:w-[40%] hover:bg-[#f9f8f6]  hover:-translate-y-1 border border-transparent hover:border-[#b08d55]/10 flex-row-reverse text-right">
            <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#b08d55] group-hover:text-white transition-all duration-300 shadow-sm">
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="flex-1">
               <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 group-hover:text-[#b08d55] transition-colors">Next</span>
              <span className="block text-xl font-serif font-bold text-slate-800 group-hover:text-[#0b1218] transition-colors">{nextValue.title}</span>
            </div>
          </Link>

        </div>
      </nav>

      <CTASection />

      </main>
      <Footer />
    </>
  );
}
