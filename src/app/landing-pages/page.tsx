import { LandingPagesLanding } from "@/components/services/LandingPagesLanding";
import { getEnrichedServicePage } from "@/lib/services-content";
import { buildMetadata } from "@/lib/seo";

const KEY = "landing-pages";
const page = getEnrichedServicePage(KEY)!;

export const metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: page.slug,
});

export default function Page() {
  return <LandingPagesLanding page={page} />;
}
