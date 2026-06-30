import { Button } from "@/components/ui/Button";

import { Container, Section } from "@/components/ui/Section";

import { Reveal } from "@/components/motion/Reveal";

import { FOX_SCORE_PATH } from "@/lib/conversion";

import { homeFinalCta } from "@/lib/home-content";

import { whatsappLinkByKey } from "@/lib/whatsapp";

import { ArrowRight, Phone } from "lucide-react";



export function FinalCtaSection() {

  return (

    <Section className="border-t border-border-subtle bg-surface-elevated pb-16 sm:pb-20">

      <Container>

        <Reveal>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fox-500 via-fox-600 to-graphite px-8 py-12 text-center text-white sm:px-12 sm:py-16">

            <div

              className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"

              aria-hidden

            />

            <div

              className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"

              aria-hidden

            />

            <h2 className="relative font-[family-name:var(--font-poppins)] text-3xl font-bold sm:text-4xl">

              {homeFinalCta.title}

            </h2>

            <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">

              {homeFinalCta.subtitle}

            </p>

            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Button

                href={FOX_SCORE_PATH}

                className="w-full !rounded-xl !bg-white !px-8 !py-3.5 !text-base !font-bold !text-fox-600 hover:!bg-white/95 sm:w-auto"

              >

                {homeFinalCta.primaryCta}

                <ArrowRight className="h-5 w-5" />

              </Button>

              <Button

                href={whatsappLinkByKey("specialist")}

                variant="secondary"

                className="inline-flex w-full !rounded-xl items-center justify-center gap-2 !border-white/30 !bg-white/10 !text-white hover:!bg-white/20 sm:w-auto"

              >

                <Phone className="h-4 w-4" />

                {homeFinalCta.secondaryCta}

              </Button>

            </div>

          </div>

        </Reveal>

      </Container>

    </Section>

  );

}


