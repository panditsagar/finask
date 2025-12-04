import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
           {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif tracking-tight">
            About
         <span className="text-[#b08d55]"> Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          We help you simplify your finances and achieve your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: Image Collage */}
          {/* LEFT: Image */}
          <div className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/about-team.png"
                alt="Finask Team Meeting"
                width={800}
                height={600}
                className="object-cover w-full h-[500px] transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Secondary smaller image (floating) */}
            <div className="absolute -bottom-10 -right-10 z-20 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block group-hover:scale-105 transition-transform duration-500">
               <Image
                 src="/about-detail.png"
                 alt="Handshake"
                 width={200}
                 height={200}
                 className="object-cover w-full h-full"
               />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#b08d55]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#b08d55]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* RIGHT: Content */}
          <div className="space-y-8  ">
            
          

            

            {/* Description */}
            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
              <p>
                Wealth is not a balance sheet. It is a child’s future funded without stress. A retirement that gives back more than it takes. It is the joy of giving, the calm of knowing, the quiet power of being prepared.
              </p>
              <p>
                At FinAsk, we believe that wealth is not just grown. It is stewarded—with care, with clarity, and with character. <span className="font-semibold text-slate-800">Built in India. Designed for lives that dream bigger.</span>
              </p>
              
              <div className="pl-6 border-l-4 border-[#b08d55]/30 italic text-slate-700">
                "Because numbers don’t drive us. People do."
              </div>

              <p>
                Our clients are not accounts. They are stories in motion:
              </p>
              <ul className="space-y-3 list-none pl-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b08d55] shrink-0"></span>
                  <span>A mother protecting her child’s future.</span>
                </li>
                <li className="flex items-start gap-3">
                   <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b08d55] shrink-0"></span>
                  <span>A founder transitioning wealth across generations.</span>
                </li>
                <li className="flex items-start gap-3">
                   <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b08d55] shrink-0"></span>
                  <span>A young couple dreaming of a home.</span>
                </li>
              </ul>

              <p>
                Our role is to listen before we advise. To simplify before we sell. And to remain present—quietly, consistently, and with care that never clocks out.
              </p>
            </div>



            {/* Button */}
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 bg-[#b08d55] hover:bg-[#9a7b4f] text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-[#b08d55]/30">
                More About Us
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
