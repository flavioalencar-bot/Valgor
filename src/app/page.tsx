import { BenefitsSection } from "@/components/home/BenefitsSection";
import { CasesSection } from "@/components/home/CasesSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { DifferentialsSection } from "@/components/home/DifferentialsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { FoxScoreLeadSection } from "@/components/home/FoxScoreLeadSection";
import { Hero } from "@/components/home/Hero";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { HomePlansSection } from "@/components/home/HomePlansSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { TrustSection } from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FoxScoreLeadSection />
      <TrustSection />
      <ProblemSection />
      <BenefitsSection />
      <DifferentialsSection />
      <ProcessSection />
      <ComparisonSection />
      <CasesSection />
      <TestimonialsCarousel />
      <HomePlansSection />
      <HomeFaqSection />
      <FinalCtaSection />
    </>
  );
}
