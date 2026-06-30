import { Container, Section } from "@/components/ui/Section";
import { site } from "@/lib/site";
import { Quote } from "lucide-react";
export function Testimonial() {
  return (
    <Section className="border-t border-border-subtle bg-surface-elevated py-16 sm:py-20">
      <Container>
        <div className="shadow-card relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface-card p-8 text-center sm:p-12">
          <div
            className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-fox-500/10 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-fox-500/8 blur-2xl"
            aria-hidden
          />
          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-fox-500 shadow-md">
              <Quote className="h-6 w-6 text-white" />
            </div>
            <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              &ldquo;Precisávamos de presença digital séria e local. A Fox entregou site,
              SEO e suporte com a agilidade que nosso mercado exige.&rdquo;
            </blockquote>
            <footer className="mt-6">
              <p className="text-sm font-semibold text-foreground">Cliente {site.brand}</p>
              <p className="text-sm text-subtle">Empresa de serviços · São José do Rio Preto</p>
            </footer>
          </div>
        </div>
      </Container>
    </Section>
  );
}
