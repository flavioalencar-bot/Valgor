import { redirect } from "next/navigation";

/** Fallback do 301 em next.config — mesmo destino para consistência */
export default function LegacyContatoPage() {
  redirect("/criacao-de-sites");
}
