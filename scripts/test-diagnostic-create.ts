import { PrismaClient } from "@prisma/client";
import { diagnosticFormSchema, normalizeDiagnosticPayload } from "../src/lib/diagnostics/validators";

const prisma = new PrismaClient();

const body = {
  companyName: "Agência",
  city: "São Paulo",
  responsibleName: "Flavio Godoi Alencar",
  whatsapp: "17991093195",
  email: "contato@valgor.com.br",
  websiteUrl: "https://www.valgor.com.br/",
  instagramUrl: "",
  googleBusinessUrl: "",
  segment: "Tecnologia",
  consentAccepted: true,
};

async function main() {
  try {
    const parsed = diagnosticFormSchema.parse(body);
    console.log("validation OK", normalizeDiagnosticPayload(parsed));
  } catch (e) {
    console.error("validation FAIL", e);
    return;
  }

  try {
    const data = normalizeDiagnosticPayload(diagnosticFormSchema.parse(body));
    const row = await prisma.digitalDiagnostic.create({
      data: {
        companyName: data.companyName,
        responsibleName: data.responsibleName,
        email: data.email,
        whatsapp: data.whatsapp,
        city: data.city,
        segment: data.segment ?? null,
        websiteUrl: data.websiteUrl ?? null,
        instagramUrl: data.instagramUrl ?? null,
        googleBusinessUrl: data.googleBusinessUrl ?? null,
        status: "processing",
        progress: 0,
        consentAccepted: true,
        consentAcceptedAt: new Date(),
      },
    });
    console.log("create OK", row.id);
    await prisma.digitalDiagnostic.delete({ where: { id: row.id } });
  } catch (e) {
    console.error("prisma FAIL", e);
  }
}

main().finally(() => prisma.$disconnect());
