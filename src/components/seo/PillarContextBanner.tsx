import { type BreadcrumbItem } from "@/lib/breadcrumbs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  pillar: BreadcrumbItem;
  description?: string;
};

/** Reforça hierarquia SEO: página de segmento → serviço pilar. */
export function PillarContextBanner({ pillar, description }: Props) {
  return (
    <div className="mb-6 rounded-xl border border-border bg-muted-bg/60 px-4 py-3">
      <Link
        href={pillar.href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-valgor-600 transition hover:text-valgor-500 dark:text-valgor-400"
      >
        <ArrowLeft className="h-4 w-4" />
        {pillar.name}
      </Link>
      {description && <p className="mt-1 text-xs leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
