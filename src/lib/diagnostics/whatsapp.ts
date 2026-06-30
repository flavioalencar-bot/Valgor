export function buildDiagnosticWhatsAppUrl(score: number, phone = "5517991093195"): string {
  const text = encodeURIComponent(
    `Olá, fiz o Diagnóstico Digital VALGOR e minha empresa recebeu nota ${score}/100. Gostaria de entender como melhorar minha presença digital.`,
  );
  return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
}

export function buildFoxScoreWhatsAppUrl(params: {
  companyName: string;
  score: number;
  targetScore: number;
  city?: string;
  phone?: string;
  whatsapp?: string;
}): string {
  const phone = params.phone ?? "5517991093195";

  const text = encodeURIComponent(
    `Olá.

Realizei o diagnóstico Valgor Score.

Minha empresa recebeu nota ${params.score}.

Gostaria de entender como posso chegar aos ${params.targetScore} pontos.

Empresa: ${params.companyName}
Cidade: ${params.city ?? ""}
Telefone: ${params.whatsapp ?? ""}`,
  );
  return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
}

export function buildLeadWhatsAppUrl(whatsapp: string, companyName: string): string {
  const digits = whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(
    `Olá! Vi o diagnóstico digital da empresa ${companyName} no painel VALGOR e gostaria de conversar.`,
  );
  return `https://api.whatsapp.com/send?phone=${digits}&text=${text}`;
}

export function normalizeInstagramHandle(raw?: string): string | undefined {
  if (!raw?.trim()) return undefined;
  const v = raw.trim();
  if (v.startsWith("@")) return v;
  const m = v.match(/instagram\.com\/([^/?#]+)/i);
  if (m?.[1]) return `@${m[1]}`;
  return v.includes("@") ? v : `@${v.replace(/^@/, "")}`;
}
