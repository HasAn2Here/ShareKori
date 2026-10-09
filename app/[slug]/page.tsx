import { notFound } from "next/navigation";
import InfoPage, { type InfoSlug } from "@/components/InfoPage";

const SLUGS: InfoSlug[] = ["safety", "contact", "privacy", "terms"];
export const dynamicParams = false;
export const generateStaticParams = () => SLUGS.map((slug) => ({ slug }));

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug as InfoSlug)) notFound();
  return <InfoPage slug={slug as InfoSlug} />;
}
