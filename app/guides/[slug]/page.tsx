import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideShell } from "../../_components/GuideShell";
import { guidePages, SITE_URL } from "../../_content/site";

export function generateStaticParams() {
  return Object.keys(guidePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidePages[slug];
  if (!guide) return {};
  const title = guide.title;
  const socialTitle = `${guide.title} | Anomaly Clinic: SANDBOXX Guide`;
  const url = `${SITE_URL}/guides/${guide.slug}`;
  return {
    title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: socialTitle, description: guide.description, url, type: "article", images: [] },
    twitter: { card: "summary", title: socialTitle, description: guide.description, images: [] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidePages[slug];
  if (!guide) notFound();
  return <GuideShell guide={guide} />;
}
