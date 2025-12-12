import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#b08d55]/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Image Composition */}
          <div className="relative group">
             {/* Main Image */}
            <div className="relative z-10   overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
               <Image
                src="/about-team.png"
                alt="Finask Team"
                width={800}
                height={600}
                className="object-cover w-full h-[500px] lg:h-[600px] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

             {/* Floating Badge/Card */}
            <div className="absolute -bottom-8 -right-8 z-20 w-48 h-48  overflow-hidden shadow-2xl border-4 border-white hidden md:block transform group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                <Image
                  src="/about-detail.png"
                  alt="Finask Detail"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
            </div>
             
             {/* Abstract Decor */}
             <div className="absolute -top-6 -left-6 z-0 w-24 h-24 border-2 border-[#b08d55]/20 rounded-full"></div>
             <div className="absolute z-0 -bottom-10 -right-10 w-64 h-64 bg-[#b08d55]/10 rounded-full blur-2xl"></div>
          </div>

          {/* RIGHT: Content */}
          <div className="space-y-10">
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b08d55]/10 text-[#b08d55] text-sm font-semibold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b08d55]"></span>
                  About Finask
               </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight">
                More than numbers. <br/>
                <span className="text-[#b08d55]">Stories of life.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                   Wealth is not just a balance sheet. It is a child’s future funded without stress, a retirement that gives back more than it takes, and the quiet power of being prepared.
                </p>
                <p>
                   At FinAsk, we believe wealth must be stewarded with care, clarity, and character. Built in India, designed for lives that dream bigger.
                </p>
            </div>

            {/* Story Cards */}
            <div className="grid gap-3">
                {[
                    { title: "The Protector", desc: "A mother securing her child’s future." },
                    { title: "The Builder", desc: "A founder transitioning wealth across generations." },
                    { title: "The Dreamer", desc: "A young couple investing in their first home." },
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/60 hover:border-[#b08d55]/30 hover:bg-[#b08d55]/5 transition-all duration-300 group/card">
                        <div className="w-2 h-2 rounded-full bg-[#b08d55] shrink-0 group-hover/card:scale-150 transition-transform"></div>
                        <div>
                            <span className="font-semibold text-slate-900 mr-2">{item.title}:</span>
                            <span className="text-slate-600">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-2">
                 <Link href="/about" className="inline-flex items-center gap-3 bg-[#b08d55] hover:bg-[#967645] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-[#b08d55]/20 group">
                    Read Our Story
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                 </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
