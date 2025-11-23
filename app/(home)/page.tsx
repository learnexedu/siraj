// components
import CTA from "@/components/landing/cta";
import Hero from "@/components/landing/hero";
import About from "@/components/landing/about";
import Programs from "@/components/landing/programs";
import Features from "@/components/landing/features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;
