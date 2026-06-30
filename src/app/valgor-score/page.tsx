import { FoxScoreTool } from "@/components/fox-score/FoxScoreTool";
import { buildMetadata } from "@/lib/seo";
import { Suspense } from "react";

export const metadata = buildMetadata({
  title: "Valgor Score | Descubra quanto sua empresa deixa de vender na internet",
  description:
    "Análise inteligente da presença digital com nota, oportunidades, estimativa de retorno financeiro e plano para atrair mais clientes — gratuito pela VALGOR.",
  path: "/valgor-score",
});

export default function ValgorScorePage() {
  return (
    <Suspense fallback={null}>
      <FoxScoreTool />
    </Suspense>
  );
}
