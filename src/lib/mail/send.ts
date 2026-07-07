import nodemailer, { type Transporter } from "nodemailer";
import { getMailConfig, isMailConfigured } from "./config";

let transporter: Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const config = getMailConfig();
  if (!config) return null;

  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  return transporter;
}

export type SendMailInput = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

export type SendMailResult =
  | { ok: true }
  | { ok: false; skipped?: boolean; error?: unknown };

export async function sendMail(input: SendMailInput): Promise<SendMailResult> {
  if (!isMailConfigured()) {
    console.warn("[mail] SMTP não configurado — e-mail não enviado:", input.subject);
    return { ok: false, skipped: true };
  }

  const config = getMailConfig();
  const transport = getTransporter();
  if (!config || !transport) {
    return { ok: false, skipped: true };
  }

  try {
    await transport.sendMail({
      from: config.from,
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      replyTo: input.replyTo,
    });
    return { ok: true };
  } catch (error) {
    console.error("[mail] falha ao enviar:", error);
    return { ok: false, error };
  }
}

/** Dispara envio em background sem bloquear a resposta da API. */
export function sendMailAsync(input: SendMailInput): void {
  void sendMail(input);
}
