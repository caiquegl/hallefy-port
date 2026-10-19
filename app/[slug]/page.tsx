import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseLayout } from "@/components/CaseLayout";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getProject, getProjectSlugs, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

const CASES_SLUG = "cases";

export function generateStaticParams() {
  return [{ slug: CASES_SLUG }, ...getProjectSlugs().map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === CASES_SLUG) {
    return {
      title: "Cases",
      description: "Projetos e cases do portfólio Hallefy Moraes",
    };
  }
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: [{ url: project.cover }],
    },
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  if (slug === CASES_SLUG) {
    return <CasesListing />;
  }

  const project = getProject(slug);
  if (!project) notFound();
  return <CaseLayout project={project} />;
}

function CasesListing() {
  return (
    <main>
      <div className="border-b border-black/5 bg-gradient-to-r from-white to-surface py-6">
        <Header />
      </div>
      <section className="container-site py-14 md:py-20">
        <h1 className="font-[family-name:var(--font-nimbus-bold)] text-3xl text-[#222] md:text-4xl">
          Cases
        </h1>
        <p className="mt-3 max-w-2xl font-[family-name:var(--font-nimbus-light)] text-muted">
          Seleção de projetos em gestão de campanhas, eventos e produtos digitais.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${project.slug}`}
              className="project-card group overflow-hidden rounded-sm bg-surface"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h2 className="font-[family-name:var(--font-nimbus-bold)] text-lg text-[#222]">
                  {project.title}
                </h2>
                <p className="mt-1 font-[family-name:var(--font-nimbus-light)] text-sm text-muted line-clamp-2">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
