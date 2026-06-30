import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { Container, Section } from "@/components/ui/Section";

export const metadata = { title: "Admin — Login", robots: { index: false } };

export default function AdminLoginPage() {
  return (
    <Section className="min-h-[60vh] bg-surface pt-28">
      <Container>
        <h1 className="mb-8 text-center font-[family-name:var(--font-poppins)] text-2xl font-bold">
          Painel VALGOR
        </h1>
        <AdminLoginForm />
      </Container>
    </Section>
  );
}
