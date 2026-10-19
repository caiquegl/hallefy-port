import Link from "next/link";
import { site } from "@/content/site";

export function About() {
  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="container-site grid items-start gap-10 md:grid-cols-[57%_43%] md:gap-14 md:min-h-[640px]">
        <div>
          <h2 className="font-[family-name:var(--font-nimbus-bold)] text-3xl text-[#222] md:text-4xl">
            {site.about.heading}
          </h2>
          <p className="mt-6 font-[family-name:var(--font-nimbus)] text-base leading-relaxed text-muted md:text-lg">
            {site.about.agencies} {site.about.expertise}
          </p>
          <p className="mt-5 font-[family-name:var(--font-nimbus-light)] text-base leading-relaxed text-muted">
            {site.about.experience}
          </p>
          <ul className="mt-6 space-y-2 font-[family-name:var(--font-nimbus)] text-sm text-muted md:text-base">
            {site.about.certifications.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-6 font-[family-name:var(--font-nimbus)]">
            <li>
              <Link
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80"
              >
                Resumo
              </Link>
            </li>
            <li>
              <Link
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <aside className="md:pt-2">
          <blockquote className="font-[family-name:var(--font-nimbus-bold)] text-2xl leading-snug text-[#222] md:text-3xl">
            {site.about.quote}
          </blockquote>
          <p className="mt-6 font-[family-name:var(--font-nimbus-light)] text-base leading-relaxed text-muted md:text-lg">
            {site.about.quoteSupport}
          </p>
        </aside>
      </div>
    </section>
  );
}
