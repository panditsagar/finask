import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, DollarSign, MapPin, BookOpen, Star } from 'lucide-react';
import Image from "next/image";

export default function FranchisePage() {
  return (
    <main className="min-h-screen bg-[#052e28] text-[#f2f0ea] font-sans selection:bg-[#ff9933] selection:text-black">
      {/* SECTION 1 — HERO (HIGH EMOTION + BUSINESS OPPORTUNITY) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 py-20">
        <div className="absolute inset-0 z-0">
           {/* Authentic Indian Streen Food / Modern Cart Vibe */}
           <Image 
              src="https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?q=80&w=2070&auto=format&fit=crop" 
              alt="Busy Food Cart Business"
              fill
              className="object-cover"
              priority
           />
           {/* Heavy Dark Overlay for Text Readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#021f1b] via-[#021f1b]/80 to-[#021f1b]/40"></div>
           <div className="absolute inset-0 bg-[#021f1b]/30"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1.5 border border-[#ff9933]/30 rounded-full bg-[#ff9933]/10 backdrop-blur-sm mb-4">
                <span className="text-[#ff9933] font-semibold tracking-wider text-sm uppercase">India's Fastest Growing Food Cart Franchise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-serif tracking-tight text-white">
                Launch Your Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9933] to-[#ffcc80]">Premium Food Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Start a branded food cart business for just <span className="text-white font-bold">₹2,00,000</span>. <br className="hidden md:block" />
                Proven Model. Fast ROI. <span className="text-[#ff9933]">150+ Outlets Turning Profit Across India.</span>
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <button className="group relative px-8 py-4 bg-[#ff9933] hover:bg-[#ff8000] text-black font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,153,51,0.3)] hover:shadow-[0_0_30px_rgba(255,153,51,0.5)] flex items-center gap-3">
                    Apply for Franchise
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                    <div className="flex -space-x-2">
                         {/* Placeholder avatars */}
                        <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-[#052e28]"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#052e28]"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-[#052e28]"></div>
                    </div>
                    <span>Join 150+ successful owners</span>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                <div>
                     <p className="text-3xl font-bold text-white">₹2L</p>
                     <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Low Investment</p>
                </div>
                <div>
                     <p className="text-3xl font-bold text-white">3-5 M</p>
                     <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Fast ROI</p>
                </div>
                <div>
                     <p className="text-3xl font-bold text-white">150+</p>
                     <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Active Outlets</p>
                </div>
                <div>
                     <p className="text-3xl font-bold text-white">0%</p>
                     <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Royalty Fees</p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2 — WHY THIS FUNNEL EXISTS (BIG PROBLEM) */}
      <section className="py-20 px-4 md:px-8 bg-[#04241f]">
        <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-center">
                 Why Most Food Franchises <span className="text-red-500">Fail</span> <br/>
                 <span className="text-2xl md:text-3xl font-sans font-light text-gray-400 mt-2 block">(And Why We Are Different)</span>
             </h2>
             
             <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
                <div className="space-y-8">
                    <div className="bg-[#052e28] p-6 rounded-xl border border-red-900/30 hover:border-red-500/30 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="bg-red-500/10 p-3 rounded-full text-red-500">
                                <DollarSign size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">High Setup Costs (₹8L–₹12L)</h3>
                                <p className="text-gray-400">Most competitors drain your savings before you even sell your first product. We launch you for just <span className="text-[#ff9933] font-bold">₹2,00,000</span>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#052e28] p-6 rounded-xl border border-red-900/30 hover:border-red-500/30 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="bg-red-500/10 p-3 rounded-full text-red-500">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Slow & Risky ROI</h3>
                                <p className="text-gray-400">Traditional franchises take 18-24 months to break even. Our partners typically see profit in <span className="text-[#ff9933] font-bold">3-5 months</span>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#052e28] p-6 rounded-xl border border-red-900/30 hover:border-red-500/30 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="bg-red-500/10 p-3 rounded-full text-red-500">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">No Proper SOPs</h3>
                                <p className="text-gray-400">Lack of standardized recipes and training leads to inconsistent quality and customer loss.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff9933]/20 to-purple-500/20 blur-3xl rounded-full opacity-30"></div>
                    <div className="relative bg-[#021f1b] border border-white/10 p-8 rounded-2xl shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Who This Is For:</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-lg text-gray-300">
                                <CheckCircle className="text-[#ff9933] w-6 h-6" /> 
                                Job Seekers wanting financial freedom
                            </li>
                             <li className="flex items-center gap-3 text-lg text-gray-300">
                                <CheckCircle className="text-[#ff9933] w-6 h-6" /> 
                                Women Entrepreneurs seeking independence
                            </li>
                             <li className="flex items-center gap-3 text-lg text-gray-300">
                                <CheckCircle className="text-[#ff9933] w-6 h-6" /> 
                                Investors looking for recession-proof income
                            </li>
                             <li className="flex items-center gap-3 text-lg text-gray-300">
                                <CheckCircle className="text-[#ff9933] w-6 h-6" /> 
                                First-time business owners
                            </li>
                        </ul>
                        <div className="mt-8 p-4 bg-[#ff9933]/10 border border-[#ff9933]/20 rounded-lg">
                            <p className="text-[#ff9933] text-sm text-center font-medium">STOP building someone else's dream. Build yours.</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* SECTION 3 — UNIQUE MECHANISM (LIGHT THEME) */}
      <section className="py-20 px-4 md:px-8 bg-[#fdfbf7] text-[#021f1b] relative overflow-hidden">
        {/* Subtle texture or pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight text-[#021f1b]">
                The <span className="text-[#d97706] underline decoration-wavy decoration-2 underline-offset-8">Lowest-Investment</span>, Highest-ROI Food Cart Franchise in India
            </h2>
            <p className="text-xl text-gray-600 mb-12">Backed by <span className="font-bold text-[#021f1b]">150+ Successfully Running Outlets</span></p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                    { icon: Star, label: "6+ Years Experience" },
                    { icon: Award, label: "Brand Recognition" },
                    { icon: BookOpen, label: "Standardized SOP" },
                    { icon: Users, label: "Training + Supervision" },
                    { icon: TrendingUp, label: "Professional Team" },
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                        <item.icon className="w-8 h-8 text-[#d97706]" />
                        <span className="text-sm font-bold text-gray-700">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 4 — STEP-BY-STEP SOLUTION */}
      <section className="py-20 px-4 md:px-8 bg-[#04241f] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">Your Journey to <span className="text-[#ff9933]">Ownership</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "1. Business Evaluation", desc: "We analyze if you are the right fit for this fast-growing franchise model." },
                    { title: "2. Location Finalisation", desc: "Our experts help you identify high-footfall spots for maximum profitability." },
                    { title: "3. Supervision Setup", desc: "Complete walkthrough of the operational setup and cart installation." },
                    { title: "4. Staff & Owner Training", desc: "Hands-on training on recipes, hygiene, and customer management." },
                    { title: "5. Launch with Playbook", desc: "Grand opening with our proven 'Brand Playbook' marketing strategies." },
                    { title: "6. ROI Planning", desc: "Detailed roadmap to recover your investment in 3-5 months." },
                ].map((step, idx) => (
                    <div key={idx} className="relative group">
                         <div className="absolute inset-0 bg-[#ff9933] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                         <div className="relative p-8 bg-[#021f1b] border border-white/10 rounded-2xl h-full hover:-translate-y-2 transition-transform duration-300">
                             <div className="text-5xl font-bold text-[#ff9933]/10 absolute top-4 right-4">{idx + 1}</div>
                             <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                             <p className="text-gray-400">{step.desc}</p>
                         </div>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* SECTION 5 — FEATURES → BENEFITS CONVERSION SECTION (LIGHT THEME) */}
      <section className="py-24 px-4 md:px-8 bg-[#fdfbf7] text-[#021f1b]">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8 leading-tight text-[#021f1b]">Everything You Need to <span className="text-[#d97706]">Succeed</span></h2>
                <div className="space-y-6">
                    {[
                        { feature: "Proven SOP Systems", benefit: "Zero operational confusion—run on auto-pilot." },
                        { feature: "150+ Active Outlets", benefit: "A tested model, not an experiment." },
                        { feature: "Brand Marketing Support", benefit: "You never run the business alone." },
                        { feature: "Fastest ROI (3-5 Months)", benefit: "Quick financial recovery & profit generation." },
                        { feature: "Low Investment (₹2L)", benefit: "Easy entry for first-time business owners." },
                        { feature: "Centralized Material Supply", benefit: "Consistent taste & quality everywhere." },
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <CheckCircle className="text-[#d97706] w-6 h-6 shrink-0 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold text-[#021f1b]">{item.feature}</h4>
                                <p className="text-gray-600 text-sm mt-1">{item.benefit}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#021f1b] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-white">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
                 <div className="relative z-10 text-center space-y-8">
                     <div className="w-24 h-24 bg-[#d97706] rounded-full mx-auto flex items-center justify-center text-[#021f1b] font-bold text-3xl shadow-lg ring-4 ring-[#d97706]/30">
                        <TrendingUp size={40} />
                     </div>
                     <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">"I recovered my investment in just <span className="text-[#ff9933]">4 months</span>!"</h3>
                     <p className="text-gray-300 italic text-lg opacity-90">"The support system is incredible. I didn't know anything about food business, but the SOPs made it so easy."</p>
                     <div className="pt-6 border-t border-white/10">
                        <p className="font-bold text-[#ff9933] text-xl">Rahul Sharma</p>
                        <p className="text-sm text-gray-400">Franchise Owner, Pune</p>
                     </div>
                 </div>
            </div>
         </div>
      </section>

      {/* SECTION 6 — TARGET AUDIENCE EMPATHY BLOCK */}
      <section className="py-20 px-4 md:px-8 bg-[#031a16] text-center">
        <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">Stop Dreaming. Start <span className="text-[#ff9933]">Doing</span>.</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
                Whether you want to escape the 9-5 grind, build a second income stream, or finally become your own boss—this is your moment. We've removed the risks, the high costs, and the confusion. All that's left is for you to say <span className="text-white font-bold">YES</span> to your future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm">Escaping 9-5</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm">Financial Stability</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm">Second Income</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm">Be Your Own Boss</span>
            </div>
        </div>
      </section>

      {/* SECTION 7 — BONUSES */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#052e28] to-[#04241f] border-t border-white/5">
         <div className="max-w-5xl mx-auto bg-[#021f1b] border border-[#ff9933]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-[#ff9933] text-black font-bold text-xs uppercase px-4 py-2 rounded-bl-xl z-20">Limited Time Offer</div>
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Fast-Action <br/><span className="text-[#ff9933]">Bonuses</span></h2>
                     <p className="text-gray-400 mb-8">Sign up this week and unlock premium support worth ₹50,000 for FREE.</p>
                     <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="bg-[#ff9933]/20 p-3 rounded-lg text-[#ff9933]">
                                <DollarSign size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Free Raw Material (1st Month)</h4>
                                <p className="text-sm text-gray-400">Jumpstart your sales without worrying about initial stock costs.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-[#ff9933]/20 p-3 rounded-lg text-[#ff9933]">
                                <Users size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Business + Staff Training</h4>
                                <p className="text-sm text-gray-400">Comprehensive training program for you and your staff included.</p>
                            </div>
                        </div>
                     </div>
                 </div>
                 <div className="text-center bg-white/5 rounded-2xl p-8 border border-dashed border-gray-600">
                     <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Offer Expires In</p>
                     <div className="text-5xl font-bold text-white font-mono tracking-widest">
                         48:00:00
                     </div>
                     <p className="text-xs text-red-400 mt-4">*Only 3 Franchise Slots Left in Your Region</p>
                 </div>
             </div>
         </div>
      </section>

      {/* SECTION 8 — URGENCY & SCARCITY */}
      <section className="py-12 px-4 md:px-8 bg-[#ff9933] text-black">
         <div className="max-w-6xl mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight flex items-center justify-center gap-4">
                 <Award className="w-8 h-8" />
                 Price Rising to ₹2,50,000 Soon
                 <Award className="w-8 h-8" />
             </h2>
             <p className="mt-2 font-medium opacity-80">Lock in the current price of ₹2,00,000 by applying today.</p>
         </div>
      </section>


      {/* SECTION 9 — TESTIMONIALS & CASE STUDIES (LIGHT THEME) */}
      <section className="py-24 px-4 md:px-8 bg-[#fdfbf7] text-[#021f1b]">
         <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold font-serif text-center mb-16 text-[#021f1b]">Real People. <span className="text-[#d97706] italic">Real Results</span>.</h2>
             
             <div className="grid md:grid-cols-2 gap-8 mb-16">
                 {/* Video Placeholder 1 */}
                 <div className="bg-black rounded-2xl overflow-hidden shadow-2xl group cursor-pointer relative aspect-video transform hover:scale-[1.02] transition-transform">
                     <div className="absolute inset-0 flex items-center justify-center z-10">
                         <div className="w-20 h-20 bg-[#d97706] rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg">
                             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                         </div>
                     </div>
                     <Image 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop"
                        alt="Testimonial cover"
                        fill
                        className="object-cover opacity-60 group-hover:opacity-50 transition-opacity"
                     />
                     <div className="absolute bottom-6 left-6 z-10">
                         <h4 className="text-2xl font-bold text-white">"500+ Customers Daily!"</h4>
                         <p className="text-sm text-gray-200">New Mumbai Outlet</p>
                     </div>
                 </div>
                 {/* Video Placeholder 2 */}
                 <div className="bg-black rounded-2xl overflow-hidden shadow-2xl group cursor-pointer relative aspect-video transform hover:scale-[1.02] transition-transform">
                     <div className="absolute inset-0 flex items-center justify-center z-10">
                         <div className="w-20 h-20 bg-[#d97706] rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg">
                             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                         </div>
                     </div>
                     <Image 
                        src="https://images.unsplash.com/photo-1544776193-87a221bc36d7?q=80&w=1920&auto=format&fit=crop"
                        alt="Testimonial cover"
                        fill
                        className="object-cover opacity-60 group-hover:opacity-50 transition-opacity"
                     />
                     <div className="absolute bottom-6 left-6 z-10">
                         <h4 className="text-2xl font-bold text-white">"Best decision of my life."</h4>
                         <p className="text-sm text-gray-200">Priya K., Bangalore</p>
                     </div>
                 </div>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 {[
                     { name: "Anil Deshmukh", loc: "Pune", income: "₹1.2 Lakh/mo", quote: "I was skeptical about the low investment, but the quality speaks for itself. My cart is the busiest in the area." },
                     { name: "Sneha Patel", loc: "Ahmedabad", income: "₹95,000/mo", quote: "The training was so detailed. Even my staff can run the cart without me. Passive income achieved!" },
                     { name: "Rajesh Kumar", loc: "Delhi", income: "₹1.5 Lakh/mo", quote: "Competitors charge 10 Lakhs for what these guys give in 2 Lakhs. The ROI speed is unbeatable." },
                 ].map((t, idx) => (
                     <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative hover:-translate-y-2 transition-transform">
                         <div className="text-[#d97706] text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                         <p className="text-gray-700 relative z-10 pt-4 mb-8 text-lg font-medium">"{t.quote}"</p>
                         <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                             <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-500">{t.name[0]}</div>
                             <div>
                                 <h5 className="font-bold text-[#021f1b]">{t.name}</h5>
                                 <p className="text-xs text-gray-500">{t.loc}</p>
                             </div>
                             <div className="ml-auto text-right">
                                 <p className="text-xs text-[#d97706] uppercase font-bold tracking-wider">Earnings</p>
                                 <p className="text-lg font-bold text-[#021f1b]">{t.income}</p>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* SECTION 10 — COMPETITOR COMPARISON */}
      <section className="py-20 px-4 md:px-8 bg-[#052e28]">
         <div className="max-w-5xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">Don't Overpay. <span className="text-[#ff9933]">Compare for Yourself.</span></h2>
             
             <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                     <thead>
                         <tr>
                             <th className="p-4 md:p-6 text-gray-400 font-normal uppercase tracking-wider text-sm border-b border-white/10">Feature</th>
                             <th className="p-4 md:p-6 bg-[#ff9933] text-black font-bold text-lg rounded-t-xl border-b-0 w-1/3 text-center">Our Franchise</th>
                             <th className="p-4 md:p-6 text-gray-400 font-normal text-center border-b border-white/10">Competitors (Yewale, etc.)</th>
                         </tr>
                     </thead>
                     <tbody className="text-white">
                         {[
                             { label: "Setup Cost", us: "₹2,00,000", them: "₹8L - ₹15L" },
                             { label: "ROI Period", us: "3 - 5 Months", them: "18 - 24 Months" },
                             { label: "Royalty Fee", us: "0% (No Hidden Fees)", them: "5% - 10% Monthly" },
                             { label: "Support", us: "Lifetime Marketing + Ops", them: "Limited / Chargeable" },
                             { label: "Control", us: "Owner-Driven", them: "Brand-Controlled" },
                         ].map((row, idx) => (
                             <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                 <td className="p-4 md:p-6 font-medium text-gray-300">{row.label}</td>
                                 <td className={`p-4 md:p-6 text-center font-bold text-lg bg-[#ff9933]/5 border-x border-[#ff9933]/20 ${idx === 4 ? 'rounded-b-xl border-b border-[#ff9933]/20' : ''}`}>
                                     {row.us}
                                 </td>
                                 <td className="p-4 md:p-6 text-center text-gray-500">{row.them}</td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
         </div>
      </section>

      {/* SECTION 11 — FAQ SECTION (LIGHT THEME) */}
      <section className="py-24 px-4 md:px-8 bg-[#fdfbf7] border-t border-gray-200">
         <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold font-serif text-center mb-12 text-[#021f1b]">Frequently Asked Questions</h2>
             
             <div className="space-y-4">
                 {[
                     { q: "How much is the total investment?", a: "The total investment is ₹2,00,000. This includes your cart setup, initial training, branding, and equipment. There are no hidden setup fees." },
                     { q: "What is the monthly earning potential?", a: "On average, our franchise owners earn between ₹50,000 to ₹1,50,000 per month depending on the location and footfall." },
                     { q: "Do you provide staff?", a: "We help you hire and train staff. While the staff is on your payroll, we ensure they are fully trained in our SOPs before launch." },
                     { q: "Is there a refund policy?", a: "We have a transparent policy. If the location is not approved by our team, your booking amount is 100% refundable." },
                     { q: "How much space is required?", a: "You need a small space of about 50-100 sq. ft. for the cart. We assist in finalizing the best high-traffic location." },
                 ].map((faq, idx) => (
                     <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-200 open:ring-1 open:ring-[#d97706]/20 transition-all">
                         <summary className="flex justify-between items-center cursor-pointer p-6 list-none font-medium text-lg text-[#021f1b] group-hover:text-[#d97706] transition-colors">
                             {faq.q}
                             <span className="text-[#d97706] transform group-open:rotate-45 transition-transform text-2xl">+</span>
                         </summary>
                         <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 show-content">
                             {faq.a}
                         </div>
                     </details>
                 ))}
             </div>
         </div>
      </section>


      {/* SECTION 12 — FOUNDER SECTION */}
      <section className="py-20 px-4 md:px-8 bg-[#052e28] border-b border-white/5">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
             <div className="relative shrink-0">
                 <div className="w-64 h-80 bg-gray-600 rounded-xl relative z-10 overflow-hidden border-2 border-[#ff9933]/30 grayscale hover:grayscale-0 transition-all duration-500">
                     {/* Founder Image Placeholder */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <div className="absolute bottom-4 left-4 text-white">
                         <p className="font-bold text-lg">Parag Patil</p>
                         <p className="text-xs text-[#ff9933] uppercase spacing-wide">Founder & CEO</p>
                     </div>
                 </div>
                 <div className="absolute -bottom-4 -right-4 w-64 h-80 border border-[#ff9933]/20 rounded-xl -z-0"></div>
             </div>
             <div>
                 <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">"I Built This to Create <span className="text-[#ff9933]">Entrepreneurs</span>."</h2>
                 <p className="text-gray-300 text-lg leading-relaxed mb-6">
                     "After seeing thousands of people struggle with high-investment setups that failed, I wanted to build a model that was <em className="text-white not-italic">accessible, scalable, and profitable</em> from Day 1. My mission isn't just to sell carts—it is to build a community of 5,000 financially independent business owners across India."
                 </p>
                 <div className="flex items-center gap-4">
                     <a href="#" className="flex items-center gap-2 text-[#ff9933] font-medium hover:text-white transition-colors">
                         <span className="bg-[#ff9933]/10 p-2 rounded-full"><Users className="w-4 h-4" /></span>
                         Follow on Instagram
                     </a>
                     <div className="w-px h-6 bg-white/10"></div>
                     <span className="text-sm text-gray-500">Parag Patil Official</span>
                 </div>
             </div>
         </div>
      </section>

      {/* SECTION 13 — FINAL CTA SECTION */}
      <section className="py-24 px-4 md:px-8 bg-[#021f1b] text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#052e28] to-transparent opacity-50"></div>
           <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif leading-tight text-white">
                    Start Your Business <br/> <span className="text-[#ff9933]">Journey Today</span>
                </h2>
                <p className="text-xl text-gray-400">Limited Franchise Slots Available for this Quarter.</p>
                
                <button className="px-12 py-6 bg-[#ff9933] hover:bg-[#ff8000] text-black font-bold text-2xl rounded-full transition-all shadow-[0_0_40px_rgba(255,153,51,0.3)] hover:shadow-[0_0_60px_rgba(255,153,51,0.5)] transform hover:-translate-y-1">
                    Apply Now for Franchise
                </button>
                
                <p className="text-sm text-gray-600 mt-8">© 2024 Your Brand Name. All Rights Reserved. <br/> No hidden fees. 100% Transparent Model.</p>
           </div>
      </section>
    </main>
  );
}
