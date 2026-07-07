import { SeoLanding } from "@/components/services/SeoLanding";
import { getEnrichedServicePage } from "@/lib/services-content";
import { buildMetadata } from "@/lib/seo";

const KEY = "seo-otimizacao-de-site";
const page = getEnrichedServicePage(KEY)!;

export const metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: page.slug,
});

export default function Page() {
  return <SeoLanding page={page} />;
}
