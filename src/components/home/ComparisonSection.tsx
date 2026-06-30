import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { homeComparison } from "@/lib/home-content";
import { Check, X } from "lucide-react";

export function ComparisonSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeader title={homeComparison.title} align="center" compact />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-muted">
                {homeComparison.without.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {homeComparison.without.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted-bg">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border-2 border-valgor-500/40 bg-surface-card p-6 shadow-sm sm:p-8 dark:shadow-none">
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground">
                {homeComparison.with.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {homeComparison.with.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
