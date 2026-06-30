import { Container, Section } from "@/components/ui/Section";
import { Building2, MapPin, Shield, Users } from "lucide-react";

const highlights = [
  { icon: Users, label: "62+ empresas atendidas na região" },
  { icon: Building2, label: "Sites, lojas e portais sob medida" },
  { icon: MapPin, label: "Base em São José do Rio Preto" },
  { icon: Shield, label: "Hospedagem e suporte próprios" },
];

export function ClientsStrip() {
  return (
    <section
      className="border-y border-border-subtle bg-surface-elevated py-10 sm:py-12"
      aria-label="Credenciais"
    >
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-subtle">
          Confiança construída em projetos reais
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-card px-4 py-3.5 shadow-sm dark:shadow-none"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-valgor-500">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <p className="text-sm font-medium leading-snug text-muted">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
