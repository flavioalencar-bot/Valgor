import { redirect } from "next/navigation";

/** Mantém URL legada indexada — redireciona para a página de conversão PRD */
export default function LegacyContatoPage() {
  redirect("/solicitar-orcamento");
}
