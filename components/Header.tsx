import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="w-full">
      <div className="container-site flex items-center justify-between gap-6 py-2">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Hallefy"
            width={48}
            height={48}
            className="h-10 w-10 object-contain"
            priority
          />
        </Link>
        <nav
          aria-label="Principal"
          className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 font-[family-name:var(--font-nimbus-light)] text-[15px] md:text-[19px] text-foreground"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
