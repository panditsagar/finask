import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import SolutionsSection from "@/components/SolutionsSection";
import VideoSection from "@/components/VideoSection";
 import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
       <VideoSection />
      <StatsSection />
      <SolutionsSection />
      <ServicesSection />
            <ValuesSection />
      <TestimonialSection />
   <CTASection />
      <Footer />
    </>
  );
}
