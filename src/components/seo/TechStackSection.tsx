import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { techStack } from "@/lib/keywords";

const techColors: Record<string, string> = {
  React: "from-sky-400 to-cyan-500",
  "Next.js": "from-slate-700 to-slate-900 dark:from-slate-300 dark:to-white",
  "Node.js": "from-emerald-500 to-green-600",
  TypeScript: "from-blue-600 to-indigo-600",
  PHP: "from-indigo-500 to-violet-600",
  MySQL: "from-orange-500 to-amber-600",
  PostgreSQL: "from-blue-500 to-sky-600",
  Cloud: "from-violet-500 to-purple-600",
  SSL: "from-teal-500 to-emerald-600",
  LGPD: "from-fox-500 to-rose-500",
};

export function TechStackSection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-surface-elevated to-surface">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-fox-500/40 to-transparent"
        aria-hidden
      />
      <Container>
        <SectionHeader
          eyebrow="Tecnologia"
          title="Desenvolvimento web moderno e seguro"
          description="Front-end e back-end com as melhores práticas de performance, UX, UI, Core Web Vitals e conformidade LGPD."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className={`rounded-xl bg-gradient-to-r px-4 py-2.5 text-sm font-semibold text-white shadow-md ${techColors[tech] ?? "from-gray-500 to-gray-700"}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
          Utilizamos <strong className="text-foreground">React</strong>,{" "}
          <strong className="text-foreground">Next.js</strong>,{" "}
          <strong className="text-foreground">Node.js</strong>,{" "}
          <strong className="text-foreground">PHP</strong>,{" "}
          <strong className="text-foreground">MySQL</strong> e cloud para entregar{" "}
          <strong className="text-foreground">aplicação web</strong>,{" "}
          <strong className="text-foreground">sistema web</strong>, integração API, ERP, CRM e{" "}
          <strong className="text-foreground">PWA</strong> quando o projeto exige.
        </p>
      </Container>
    </Section>
  );
}
