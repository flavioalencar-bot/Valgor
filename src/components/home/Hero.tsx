"use client";



import { Button } from "@/components/ui/Button";

import { Container } from "@/components/ui/Section";

import { Reveal } from "@/components/motion/Reveal";

import { VALGOR_SCORE_PATH } from "@/lib/conversion";

import { homeHero } from "@/lib/home-content";

import { images } from "@/lib/images";

import { whatsappLinkByKey } from "@/lib/whatsapp";

import { site } from "@/lib/site";

import { motion, useReducedMotion } from "framer-motion";

import { ArrowRight, TrendingUp, Users } from "lucide-react";

import Image from "next/image";



export function Hero() {

  const reduce = useReducedMotion();



  return (

    <section className="relative overflow-hidden border-b border-border-subtle bg-surface pt-28 sm:pt-32">

      <div

        className="pointer-events-none absolute inset-0"

        style={{

          background: `radial-gradient(60% 50% at 70% 0%, var(--hero-glow), transparent 70%)`,

        }}

      />



      <Container className="relative pb-16 pt-4 sm:pb-20">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <Reveal>

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-valgor-500">

              {homeHero.eyebrow}

            </p>

            <h1 className="max-w-xl font-[family-name:var(--font-poppins)] text-[2rem] font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.15rem]">

              {homeHero.title}

            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">

              {homeHero.subtitle}

            </p>



            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <Button href={VALGOR_SCORE_PATH} className="!rounded-xl">

                {homeHero.primaryCta}

                <ArrowRight className="h-4 w-4" />

              </Button>

              <Button

                href={whatsappLinkByKey("hero")}

                variant="secondary"

                className="!rounded-xl"

              >

                {homeHero.secondaryCta}

              </Button>

            </div>



            <p className="mt-5 text-xs text-subtle">

              Diagnóstico gratuito · Resposta em até 1 dia útil · {site.city} e todo o Brasil

            </p>

          </Reveal>



          <Reveal delay={0.1}>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">

              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-valgor-500/10 to-transparent blur-2xl" />

              <div className="shadow-card relative overflow-hidden rounded-2xl border border-border bg-surface-card">

                <Image

                  src={images.visuals.hero}

                  alt="Empresa gerando mais contatos e vendas com presença digital VALGOR"

                  width={960}

                  height={540}

                  priority

                  className="h-auto w-full object-cover"

                />

              </div>



              <div className="shadow-card relative mt-4 overflow-hidden rounded-2xl border border-border bg-surface-card p-5">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-xs font-medium uppercase tracking-wider text-subtle">

                      Leads este mês

                    </p>

                    <p className="mt-1 font-[family-name:var(--font-poppins)] text-3xl font-bold text-foreground">

                      {reduce ? "847" : "847"}

                    </p>

                  </div>

                  <div className="flex items-center gap-1 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">

                    <TrendingUp className="h-3.5 w-3.5" />

                    +42%

                  </div>

                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted">

                  <Users className="h-4 w-4 text-valgor-500" />

                  Visitantes convertidos em oportunidades reais

                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted-bg">

                  <motion.div

                    className="h-full rounded-full bg-gradient-to-r from-valgor-500 to-valgor-400"

                    initial={{ width: 0 }}

                    whileInView={{ width: "88%" }}

                    viewport={{ once: true }}

                    transition={{ duration: 1.2, ease: "easeOut" }}

                  />

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </Container>

    </section>

  );

}


