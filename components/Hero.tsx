import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="home" className="container-site">
      <div className="max-w-3xl">
        <h1 className="font-[family-name:var(--font-nimbus-bold)] text-[34px] font-semibold leading-tight text-[#222] md:text-[44px]">
          {site.name}
        </h1>
        <p className="mt-2 font-[family-name:var(--font-nimbus-bold)] text-xl text-[#444] md:text-2xl">
          {site.role}
        </p>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-nimbus)] text-base leading-relaxed text-muted md:text-lg">
          {site.hero.intro}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:max-w-xl">
          {site.clientsImages.map((src) => (
            <Image
              key={src}
              src={src}
              alt="Empresas e marcas"
              width={900}
              height={120}
              className="h-auto w-full object-contain object-left"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
