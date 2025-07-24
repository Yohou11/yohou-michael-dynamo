import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import JourneySection from "@/components/sections/JourneySection";
import GallerySection from "@/components/sections/GallerySection";
import InspirationSection from "@/components/sections/InspirationSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <GallerySection />
        <InspirationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
