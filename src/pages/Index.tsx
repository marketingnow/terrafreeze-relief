import TerrafreezeHero from "@/components/TerrafreezeHero";
import PainCrisisSection from "@/components/PainCrisisSection";
import IngredientsSection from "@/components/IngredientsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AsSeenInSection from "@/components/AsSeenInSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TerrafreezeProductSection from "@/components/TerrafreezeProductSection";
import TerrafreezeMobileOffer from "@/components/TerrafreezeMobileOffer";

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
      <TerrafreezeProductSection />
      <TerrafreezeMobileOffer />
    </main>
  );
};

export default Index;
