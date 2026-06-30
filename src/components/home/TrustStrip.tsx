import { Container } from "@/components/ui/Section";
import { Award, MapPin, Shield, Users } from "lucide-react";

const items = [
  { icon: Award, label: "+12 anos de mercado" },
  { icon: Users, label: "+10.000 projetos entregues" },
  { icon: MapPin, label: "Base em São José do Rio Preto" },
  { icon: Shield, label: "Suporte e hospedagem próprios" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-border-subtle bg-surface-elevated py-5">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 text-center sm:justify-start lg:justify-center"
            >
              <Icon className="h-4 w-4 shrink-0 text-valgor-500" strokeWidth={1.75} />
              <span className="text-sm font-medium text-muted">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
