import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { homeDifferentials } from "@/lib/home-content";
import { Check } from "lucide-react";

export function DifferentialsSection() {
  return (
    <Section className="border-t border-border-subtle bg-surface-elevated">
      <Container>
        <SectionHeader title={homeDifferentials.title} align="center" compact />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeDifferentials.items.map((item) => (
            <StaggerItem key={item}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-surface-card p-5 shadow-sm dark:shadow-none">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fox-500/15 text-fox-500">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <p className="text-sm font-medium leading-relaxed text-foreground">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
