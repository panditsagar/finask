"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Mail, Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 mx-16 my-10 rounded-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {/* Using text logo for now, or Image if available */}
              <span className="text-3xl font-bold font-serif text-white">
                Fin<span className="text-[#b08d55]">Ask</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're always in search for talented and motivated people. Don't be shy introduce yourself!
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b08d55] transition-colors duration-300 group">
                  <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-[#b08d55] hover:bg-[#b08d55] transition-all duration-300 group">
              <span className="text-sm font-medium">Contact With Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Useful Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {["Marketplace", "Kindergarten", "University", "GYM Coaching", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#b08d55] transition-colors flex items-center gap-2">
                    {/* <span className="w-1 h-1 rounded-full bg-[#b08d55] opacity-0 hover:opacity-100 transition-opacity"></span> */}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {["Contact Us", "Become Teacher", "Blog", "Instructor", "Events"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#b08d55] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6">Get Contact</h3>
            
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#b08d55]" />
                <span>Phone: (406) 555-0120</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#b08d55]" />
                <span>E-mail: admin@example.com</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm">Newsletter</h4>
              <p className="text-gray-400 text-xs">
                2000+ Our students are subscribe Around the World. Don't be shy introduce yourself!
              </p>
              
              <div className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter Your Email Here" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#b08d55] transition-colors"
                  />
                  <Mail size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                <button className="w-full bg-gradient-to-r from-[#b08d55] to-[#8c6d3f] text-white font-medium py-3 rounded-lg hover:shadow-lg hover:shadow-[#b08d55]/20 transition-all duration-300">
                  Submit Now
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>Copyright © 2025 Rainbow-Themes. All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white transition-colors">Subscription</a>
            <a href="#" className="hover:text-white transition-colors">Login & Register</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
