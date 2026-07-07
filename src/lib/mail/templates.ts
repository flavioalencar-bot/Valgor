import { site } from "@/lib/site";
import { getMailConfig } from "./config";
import { sendMail, sendMailAsync } from "./send";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function layout(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;color:#1a1a1a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <tr>
            <td style="padding:20px 24px;background:#111827;color:#ffffff;font-size:18px;font-weight:bold;">
              ${escapeHtml(site.brand)}
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <h1 style="margin:0 0 16px;font-size:20px;">${escapeHtml(title)}</h1>
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background:#f9fafb;font-size:12px;color:#6b7280;">
              ${escapeHtml(site.brand)} · ${escapeHtml(site.email)} · ${escapeHtml(site.phoneDisplay)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function list(items: string[]) {
  if (!items.length) return "";
  return `<ul style="margin:12px 0;padding-left:20px;">${items
    .map((item) => `<li style="margin-bottom:6px;">${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

export type ContactMessagePayload = {
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
};

export async function notifyTeamContactMessage(data: ContactMessagePayload) {
  const config = getMailConfig();
  if (!config) return { ok: false as const, skipped: true };

  const html = layout(
    "Novo contato pelo site",
    `
      <p style="margin:0 0 12px;">Chegou uma nova mensagem pelo formulário.</p>
      <p style="margin:0 0 6px;"><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
      <p style="margin:0 0 6px;"><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
      ${data.phone ? `<p style="margin:0 0 6px;"><strong>Telefone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
      <p style="margin:0 0 6px;"><strong>Assunto:</strong> ${escapeHtml(data.subject)}</p>
      <p style="margin:16px 0 6px;"><strong>Mensagem:</strong></p>
      <p style="margin:0;white-space:pre-wrap;line-height:1.5;">${escapeHtml(data.message)}</p>
    `,
  );

  return sendMail({
    to: config.notifyEmail,
    subject: `[VALGOR] Novo contato: ${data.subject}`,
    html,
    replyTo: data.email,
    text: `Novo contato de ${data.name} (${data.email})\n\n${data.message}`,
  });
}

export function sendContactConfirmation(data: ContactMessagePayload) {
  const html = layout(
    "Recebemos sua mensagem",
    `
      <p style="margin:0 0 12px;">Olá, ${escapeHtml(data.name)}.</p>
      <p style="margin:0 0 12px;">Recebemos sua solicitação sobre <strong>${escapeHtml(data.subject)}</strong> e nossa equipe retorna em até 1 dia útil.</p>
      <p style="margin:0;">Se preferir resposta mais rápida, fale conosco pelo WhatsApp: ${escapeHtml(site.phoneDisplay)}.</p>
    `,
  );

  sendMailAsync({
    to: data.email,
    subject: "Recebemos sua mensagem — VALGOR",
    html,
    text: `Olá, ${data.name}. Recebemos sua mensagem sobre ${data.subject}. Retornaremos em até 1 dia útil.`,
  });
}

export type DiagnosticLeadPayload = {
  id: string;
  companyName: string;
  responsibleName: string;
  email: string;
  whatsapp: string;
  city: string;
  segment?: string | null;
  websiteUrl?: string | null;
};

export async function notifyTeamNewDiagnostic(data: DiagnosticLeadPayload) {
  const config = getMailConfig();
  if (!config) return { ok: false as const, skipped: true };

  const adminUrl = `${site.url}/admin/diagnosticos`;
  const html = layout(
    "Novo diagnóstico digital",
    `
      <p style="margin:0 0 12px;">Um lead iniciou o Valgor Score / diagnóstico digital.</p>
      <p style="margin:0 0 6px;"><strong>Empresa:</strong> ${escapeHtml(data.companyName)}</p>
      <p style="margin:0 0 6px;"><strong>Responsável:</strong> ${escapeHtml(data.responsibleName)}</p>
      <p style="margin:0 0 6px;"><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
      <p style="margin:0 0 6px;"><strong>WhatsApp:</strong> ${escapeHtml(data.whatsapp)}</p>
      <p style="margin:0 0 6px;"><strong>Cidade:</strong> ${escapeHtml(data.city)}</p>
      ${data.segment ? `<p style="margin:0 0 6px;"><strong>Segmento:</strong> ${escapeHtml(data.segment)}</p>` : ""}
      ${data.websiteUrl ? `<p style="margin:0 0 6px;"><strong>Site:</strong> ${escapeHtml(data.websiteUrl)}</p>` : ""}
      <p style="margin:16px 0 0;"><a href="${escapeHtml(adminUrl)}" style="color:#ff6600;">Ver no painel admin</a></p>
    `,
  );

  return sendMail({
    to: config.notifyEmail,
    subject: `[VALGOR] Novo diagnóstico: ${data.companyName}`,
    html,
    replyTo: data.email,
  });
}

export type DiagnosticReportPayload = {
  id: string;
  companyName: string;
  responsibleName: string;
  email: string;
  city: string;
  score: number;
  classification: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  commercialMessage?: string | null;
};

export async function sendDiagnosticReportEmail(data: DiagnosticReportPayload) {
  const resultUrl = `${site.url}/valgor-score?id=${encodeURIComponent(data.id)}`;
  const html = layout(
    `Seu diagnóstico digital — nota ${data.score}/100`,
    `
      <p style="margin:0 0 12px;">Olá, ${escapeHtml(data.responsibleName)}.</p>
      <p style="margin:0 0 12px;">Segue o resumo do diagnóstico de <strong>${escapeHtml(data.companyName)}</strong> (${escapeHtml(data.city)}).</p>
      <p style="margin:0 0 6px;font-size:28px;font-weight:bold;color:#ff6600;">${data.score}/100</p>
      <p style="margin:0 0 16px;">Classificação: <strong>${escapeHtml(data.classification)}</strong></p>
      ${data.strengths.length ? `<p style="margin:0 0 6px;"><strong>Pontos fortes</strong></p>${list(data.strengths.slice(0, 5))}` : ""}
      ${data.weaknesses.length ? `<p style="margin:0 0 6px;"><strong>Oportunidades</strong></p>${list(data.weaknesses.slice(0, 5))}` : ""}
      ${data.recommendations.length ? `<p style="margin:0 0 6px;"><strong>Recomendações</strong></p>${list(data.recommendations.slice(0, 5))}` : ""}
      ${data.commercialMessage ? `<p style="margin:16px 0 0;line-height:1.5;">${escapeHtml(data.commercialMessage)}</p>` : ""}
      <p style="margin:20px 0 0;"><a href="${escapeHtml(resultUrl)}" style="display:inline-block;background:#ff6600;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:bold;">Ver resultado completo</a></p>
    `,
  );

  return sendMail({
    to: data.email,
    subject: `Seu Valgor Score: ${data.score}/100 — ${data.companyName}`,
    html,
    text: `Diagnóstico ${data.companyName}: ${data.score}/100 (${data.classification}). Ver: ${resultUrl}`,
  });
}

export function notifyTeamContactMessageAsync(data: ContactMessagePayload) {
  void notifyTeamContactMessage(data);
}

export function notifyTeamNewDiagnosticAsync(data: DiagnosticLeadPayload) {
  void notifyTeamNewDiagnostic(data);
}

export function sendDiagnosticReportEmailAsync(data: DiagnosticReportPayload) {
  void sendDiagnosticReportEmail(data);
}
