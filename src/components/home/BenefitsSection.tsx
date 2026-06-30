import { Container, Section, SectionHeader } from "@/components/ui/Section";

import { Stagger, StaggerItem } from "@/components/motion/Reveal";

import { homeBenefits } from "@/lib/home-content";

import {

  Award,

  MessageCircle,

  Search,

  Shield,

  SlidersHorizontal,

  TrendingUp,

} from "lucide-react";



const icons = [Search, MessageCircle, Shield, SlidersHorizontal, Award, TrendingUp] as const;



export function BenefitsSection() {

  return (

    <Section className="bg-surface">

      <Container>

        <SectionHeader

          eyebrow={homeBenefits.eyebrow}

          title={homeBenefits.title}

          align="center"

          compact

        />

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {homeBenefits.items.map((item, i) => {

            const Icon = icons[i % icons.length];

            return (

              <StaggerItem key={item.title}>

                <div className="h-full rounded-2xl border border-border bg-surface-card p-5 shadow-sm transition hover:border-fox-500/30 dark:shadow-none">

                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-fox-500">

                    <Icon className="h-5 w-5" strokeWidth={1.75} />

                  </div>

                  <h3 className="font-semibold text-foreground">{item.title}</h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>

                </div>

              </StaggerItem>

            );

          })}

        </Stagger>

      </Container>

    </Section>

  );

}


