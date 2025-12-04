"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-24 bg-white">
     

      <div className="relative w-full h-[500px] lg:h-[700px]">
        <video
          src="/video.mov"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
}
