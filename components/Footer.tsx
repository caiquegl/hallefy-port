import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-black/5 py-14 md:py-16">
      <div className="container-site">
        <h2 className="font-[family-name:var(--font-nimbus-bold)] text-2xl text-accent md:text-3xl">
          {site.email}
        </h2>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-[family-name:var(--font-nimbus)] text-accent">
          <Link
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            Resumo
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            LinkedIn
          </Link>
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            Instagram
          </Link>
          <Link
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            WhatsApp
          </Link>
        </div>
        <p className="mt-10 font-[family-name:var(--font-nimbus-light)] text-sm text-muted">
          {site.copyright}
        </p>
      </div>
    </footer>
  );
}
