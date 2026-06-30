"use client";



import { Container, Section, SectionHeader } from "@/components/ui/Section";

import { homeTestimonials } from "@/lib/home-content";

import { cn } from "@/lib/utils";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { useState } from "react";



export function TestimonialsCarousel() {

  const [index, setIndex] = useState(0);

  const current = homeTestimonials[index];



  function prev() {

    setIndex((i) => (i === 0 ? homeTestimonials.length - 1 : i - 1));

  }



  function next() {

    setIndex((i) => (i === homeTestimonials.length - 1 ? 0 : i + 1));

  }



  return (

    <Section className="bg-surface">

      <Container>

        <SectionHeader

          eyebrow="Depoimentos"

          title="Empresas que confiam na VALGOR"

          align="center"

          compact

        />

        <div className="relative mx-auto mt-10 max-w-3xl">

          <div className="shadow-card rounded-3xl border border-border bg-surface-card p-8 text-center sm:p-10">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-valgor-500">

              <Quote className="h-6 w-6 text-white" />

            </div>

            <div className="mt-4 flex justify-center gap-0.5">

              {Array.from({ length: current.rating }).map((_, i) => (

                <Star key={i} className="h-4 w-4 fill-valgor-500 text-valgor-500" />

              ))}

            </div>

            <blockquote className="mt-6 text-lg font-medium leading-relaxed text-foreground sm:text-xl">

              &ldquo;{current.quote}&rdquo;

            </blockquote>

            <footer className="mt-6">

              <p className="font-semibold text-foreground">{current.name}</p>

              <p className="text-sm text-muted">

                {current.role} — {current.company}

              </p>

            </footer>

          </div>



          <div className="mt-6 flex items-center justify-center gap-4">

            <button

              type="button"

              onClick={prev}

              className="rounded-xl border border-border p-2 text-muted transition hover:bg-muted-bg hover:text-foreground"

              aria-label="Depoimento anterior"

            >

              <ChevronLeft className="h-5 w-5" />

            </button>

            <div className="flex gap-2">

              {homeTestimonials.map((_, i) => (

                <button

                  key={i}

                  type="button"

                  onClick={() => setIndex(i)}

                  className={cn(

                    "h-2 rounded-full transition-all",

                    i === index ? "w-6 bg-valgor-500" : "w-2 bg-border",

                  )}

                  aria-label={`Ir para depoimento ${i + 1}`}

                />

              ))}

            </div>

            <button

              type="button"

              onClick={next}

              className="rounded-xl border border-border p-2 text-muted transition hover:bg-muted-bg hover:text-foreground"

              aria-label="Próximo depoimento"

            >

              <ChevronRight className="h-5 w-5" />

            </button>

          </div>

        </div>

      </Container>

    </Section>

  );

}


