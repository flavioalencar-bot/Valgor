export type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  notifyEmail: string;
};

export function isMailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

export function getMailConfig(): MailConfig | null {
  if (!isMailConfigured()) return null;

  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure =
    process.env.SMTP_SECURE === "true" || process.env.SMTP_SECURE === "1" || port === 465;

  const user = process.env.SMTP_USER!;
  const from = process.env.SMTP_FROM ?? `"VALGOR" <${user}>`;
  const notifyEmail = process.env.NOTIFY_EMAIL ?? user;

  return {
    host: process.env.SMTP_HOST!,
    port,
    secure,
    user,
    pass: process.env.SMTP_PASSWORD!,
    from,
    notifyEmail,
  };
}
