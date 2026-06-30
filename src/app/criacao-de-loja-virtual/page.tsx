import { ServicePageView } from "@/components/services/ServicePageView";
import { getEnrichedServicePage } from "@/lib/services-content";
import { buildMetadata } from "@/lib/seo";

const KEY = "criacao-de-loja-virtual";
const page = getEnrichedServicePage(KEY)!;

export const metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: page.slug,
});

export default function Page() {
  return <ServicePageView page={page} />;
}
