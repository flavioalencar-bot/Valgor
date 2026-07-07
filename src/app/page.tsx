import { CasesSection } from "@/components/home/CasesSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { Hero } from "@/components/home/Hero";
import { HomeFaqLiteSection } from "@/components/home/HomeFaqLiteSection";
import { HomePlansSection } from "@/components/home/HomePlansSection";
import { HomeProblemSolutionSection } from "@/components/home/HomeProblemSolutionSection";
import { HomeScoreBandSection } from "@/components/home/HomeScoreBandSection";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { TrustSection } from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <HomeServicesSection />
      <HomeProblemSolutionSection />
      <CasesSection />
      <HomeScoreBandSection />
      <HomePlansSection />
      <HomeFaqLiteSection />
      <FinalCtaSection />
    </>
  );
}
