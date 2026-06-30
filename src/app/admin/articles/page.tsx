import { AdminPlaceholder } from "@/components/admin/AdminPlaceholder";

export const metadata = { title: "Admin — Artigos", robots: { index: false } };

export default function Page() {
  return <AdminPlaceholder title="Artigos do blog" path="articles" />;
}
