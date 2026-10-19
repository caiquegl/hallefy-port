import Image from "next/image";
import Link from "next/link";
import { homeFeatured, otherProjectCovers } from "@/content/projects";
import { site } from "@/content/site";

function CoverCard({
  title,
  image,
  href,
  className = "",
}: {
  title: string;
  image: string;
  href?: string;
  className?: string;
}) {
  const inner = (
    <>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="font-[family-name:var(--font-nimbus-bold)] text-lg md:text-xl">
          {title}
        </h3>
      </div>
    </>
  );

  const cls = `project-card group relative block overflow-hidden rounded-sm bg-surface ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return <div className={cls}>{inner}</div>;
}

export function ProjectsGrid() {
  return (
    <section id="projetos" className="py-16 md:py-24">
      <div className="container-site">
        {/* Lead image from Elementor (Sem-Titulo-1-2) */}
        <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-sm bg-surface md:mb-5 md:aspect-[21/9]">
          <Image
            src={site.featuredHero}
            alt="Projetos em destaque"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {homeFeatured.map((item) => (
            <CoverCard
              key={item.title}
              title={item.title}
              image={item.image}
              href={item.href}
              className="aspect-[3/2] min-h-[200px]"
            />
          ))}
        </div>

        <h2 className="mt-16 font-[family-name:var(--font-nimbus-bold)] text-2xl text-[#222] md:mt-20 md:text-3xl">
          Outros Projetos
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {otherProjectCovers.map((item) => (
            <CoverCard
              key={item.title}
              title={item.title}
              image={item.image}
              href={item.href}
              className="aspect-[3/2]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
