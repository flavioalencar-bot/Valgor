import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { homeProcess } from "@/lib/home-content";

export function ProcessSection() {
  return (
    <Section className="border-t border-border-subtle bg-surface-elevated">
      <Container>
        <SectionHeader
          eyebrow={homeProcess.eyebrow}
          title={homeProcess.title}
          align="center"
          compact
        />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeProcess.steps.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="relative h-full rounded-2xl border border-border bg-surface-card p-6 shadow-sm dark:shadow-none">
                <span className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-fox-500/25">
                  {step.step}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                {i < homeProcess.steps.length - 1 && (
                  <span
                    className="absolute -bottom-3 left-1/2 hidden -translate-x-1/2 text-fox-500 lg:block"
                    aria-hidden
                  >
                    ↓
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
