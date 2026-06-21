import { notFound } from "next/navigation";
import type { Metadata } from "next";
import templates from "@/data/templates.json";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TemplateInfo from "@/components/template/TemplateInfo";

interface PageProps {
  params: Promise<{ template_name: string }>;
}

export async function generateStaticParams() {
  return templates.map((t) => ({ template_name: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { template_name } = await params;
  const template = templates.find((t) => t.slug === template_name);

  if (!template) {
    return { title: "Template Not Found — WebGram" };
  }

  const title = `${template.name} — ${template.category} Template | WebGram`;
  const description = template.description;
  const imageUrl = template.images?.[0] || "/preview.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${template.name} Website Template Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function TemplatePage({ params }: PageProps) {
  const { template_name } = await params;
  const template = templates.find((t) => t.slug === template_name);

  if (!template) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <TemplateInfo data={template} />
      </main>
      <Footer />
    </>
  );
}
