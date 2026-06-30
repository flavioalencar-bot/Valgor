import { AdminPlaceholder } from "@/components/admin/AdminPlaceholder";

export const metadata = { title: "Admin — Mensagens", robots: { index: false } };

export default function Page() {
  return <AdminPlaceholder title="Mensagens de contato" path="messages" />;
}
