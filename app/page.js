import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import SolutionsSection from "@/components/SolutionsSection";
import VideoSection from "@/components/VideoSection";
 import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
       <VideoSection />
      <StatsSection />
      <SolutionsSection />
      <ServicesSection />
            <ValuesSection />
      <TestimonialSection />
  
      <Footer />
    </>
  );
}
