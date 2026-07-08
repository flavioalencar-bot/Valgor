import { SegmentPageView } from "@/components/segments/SegmentPageView";
import { getSegmentPage, segmentSlugs } from "@/lib/segment-pages";
import { isRedirectedSegment, segmentRedirectTarget } from "@/lib/seo-redirects";
import { buildMetadata } from "@/lib/seo";
import { notFound, redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return segmentSlugs
    .filter((slug) => !isRedirectedSegment(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getSegmentPage(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.description,
    path: page.slug,
  });
}

export default async function SegmentRoute({ params }: Props) {
  const { slug } = await params;
  const target = segmentRedirectTarget(slug);
  if (target) redirect(target);
  const page = getSegmentPage(slug);
  if (!page) notFound();
  return <SegmentPageView page={page} />;
}
