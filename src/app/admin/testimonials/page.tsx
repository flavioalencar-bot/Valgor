import { AdminPlaceholder } from "@/components/admin/AdminPlaceholder";

export const metadata = { title: "Admin — Depoimentos", robots: { index: false } };

export default function Page() {
  return <AdminPlaceholder title="Depoimentos" path="testimonials" />;
}
