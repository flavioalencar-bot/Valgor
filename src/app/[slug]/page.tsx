import { SegmentPageView } from "@/components/segments/SegmentPageView";
import { getSegmentPage, segmentSlugs } from "@/lib/segment-pages";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return segmentSlugs.map((slug) => ({ slug }));
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
  const page = getSegmentPage(slug);
  if (!page) notFound();
  return <SegmentPageView page={page} />;
}
