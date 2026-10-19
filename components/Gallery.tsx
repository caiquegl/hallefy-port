import Image from "next/image";
import { site } from "@/content/site";

export function Gallery() {
  return (
    <section className="bg-surface py-16 md:py-20" aria-label="Galeria">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {site.gallery.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-sm bg-white ${
                i % 5 === 0 ? "aspect-[4/3] md:col-span-2" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
