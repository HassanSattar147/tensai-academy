import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProgramsSection } from "@/components/programs-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { MissionSection } from "@/components/mission-section";
// import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import JoinCommunity from "@/components/join-community";
import VideoSection from "@/components/videos-section";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <JoinCommunity />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <MissionSection />
        <VideoSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <JoinCommunity />
        <Footer />
      </main>
    </>
  );
}
