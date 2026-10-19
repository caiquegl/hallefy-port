import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function CaseLayout({ project }: { project: Project }) {
  return (
    <>
      <div className="border-b border-black/5 bg-gradient-to-r from-white to-surface py-6">
        <Header />
      </div>
      <article>
        <div className="relative min-h-[42vh] w-full md:min-h-[60vh]">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-site pb-10 pt-24 text-white">
              <Link
                href="/#projetos"
                className="font-[family-name:var(--font-nimbus-light)] text-sm text-white/80 hover:text-white"
              >
                ← Projetos
              </Link>
              <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-nimbus-bold)] text-3xl leading-tight md:text-5xl">
                {project.subtitle}
              </h1>
              <p className="mt-3 font-[family-name:var(--font-nimbus)] text-lg text-white/90">
                {project.title}
              </p>
            </div>
          </div>
        </div>

        <div className="container-site py-14 md:py-20">
          {project.recoveredPartial && (
            <p className="mb-10 rounded-sm border border-accent/30 bg-accent/5 px-4 py-3 font-[family-name:var(--font-nimbus-light)] text-sm text-muted">
              Texto parcialmente recuperado do Archive / fontes públicas — revise se tiver a
              versão original do case.
            </p>
          )}

          <div className="space-y-14 md:space-y-16">
            {project.sections.map((section) => (
              <section key={section.title} className="max-w-3xl">
                <h2 className="font-[family-name:var(--font-nimbus-bold)] text-2xl text-[#222] md:text-3xl">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="mt-2 font-[family-name:var(--font-nimbus-light)] text-muted">
                    {section.subtitle}
                  </p>
                )}
                <p className="mt-5 font-[family-name:var(--font-nimbus)] text-base leading-relaxed text-muted md:text-lg">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {project.images && project.images.length > 0 && (
            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {project.images.map((src) => (
                <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-sm bg-surface">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
