import { Button } from "@/components/ui/Button";

import { Container, Section, SectionHeader } from "@/components/ui/Section";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

import { FOX_SCORE_PATH } from "@/lib/conversion";

import { homeProblems } from "@/lib/home-content";

import { AlertCircle } from "lucide-react";



export function ProblemSection() {

  return (

    <Section className="border-t border-border-subtle bg-surface-elevated">

      <Container>

        <SectionHeader title={homeProblems.title} align="center" compact />

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {homeProblems.items.map((item) => (

            <StaggerItem key={item}>

              <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-surface-card p-5 shadow-sm dark:shadow-none">

                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-fox-500" />

                <p className="text-sm font-medium text-foreground">{item}</p>

              </div>

            </StaggerItem>

          ))}

        </Stagger>

        <Reveal className="mt-10 text-center">

          <Button href={FOX_SCORE_PATH} className="!rounded-xl">

            {homeProblems.cta}

          </Button>

        </Reveal>

      </Container>

    </Section>

  );

}


