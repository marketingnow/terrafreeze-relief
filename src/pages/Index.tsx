import TerrafreezeHero from "@/components/TerrafreezeHero";
import PainCrisisSection from "@/components/PainCrisisSection";
import IngredientsSection from "@/components/IngredientsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AsSeenInSection from "@/components/AsSeenInSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";

const Index = () => {
  return (
    <main>
      <TerrafreezeHero />
      <IngredientsSection />
      <PainCrisisSection />
      <HowItWorksSection />
      <AsSeenInSection />
      <TestimonialsSection />
      <GuaranteeSection />
    </main>
  );
};

export default Index;
