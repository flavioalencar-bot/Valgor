import { z } from "zod";

function normalizeUrl(val: unknown) {
  if (typeof val !== "string" || !val.trim()) return undefined;
  const t = val.trim();
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

const instagramSchema = z.preprocess(
  (val) => (typeof val === "string" && !val.trim() ? undefined : val),
  z
    .string()
    .max(200)
    .optional()
    .refine(
      (v) => {
        if (!v) return true;
        return (
          /^@[\w.]+$/.test(v) ||
          /^https?:\/\/(www\.)?instagram\.com\/[\w.]+\/?$/i.test(v) ||
          /^(www\.)?instagram\.com\/[\w.]+\/?$/i.test(v)
        );
      },
      { message: "Instagram inválido" },
    ),
);

export const diagnosticFormSchema = z.object({
  companyName: z.string().min(2).max(200),
  city: z.string().min(2).max(120),
  responsibleName: z.string().min(2).max(120),
  whatsapp: z.string().min(10).max(20),
  email: z.string().email().max(200),
  segment: z.preprocess(
    (val) => (typeof val === "string" && !val.trim() ? undefined : val),
    z.string().max(120).optional(),
  ),
  websiteUrl: z.preprocess(normalizeUrl, z.string().url("URL do site inválida").optional()),
  /** compat fase 1 */
  website: z.preprocess(normalizeUrl, z.string().url().optional()),
  instagramUrl: instagramSchema,
  instagram: instagramSchema,
  googleBusinessUrl: z.preprocess(
    (val) => (typeof val === "string" && !val.trim() ? undefined : val),
    z.string().max(500).optional(),
  ),
  consentAccepted: z.boolean().refine((v) => v === true, {
    message: "É necessário aceitar o uso dos dados para gerar o diagnóstico.",
  }),
});

export type DiagnosticFormInput = z.infer<typeof diagnosticFormSchema>;

export function normalizeDiagnosticPayload(data: DiagnosticFormInput) {
  return {
    companyName: data.companyName,
    city: data.city,
    responsibleName: data.responsibleName,
    whatsapp: data.whatsapp,
    email: data.email,
    segment: data.segment,
    websiteUrl: data.websiteUrl ?? data.website,
    instagramUrl: data.instagramUrl ?? data.instagram,
    googleBusinessUrl: data.googleBusinessUrl,
    consentAccepted: data.consentAccepted,
  };
}
