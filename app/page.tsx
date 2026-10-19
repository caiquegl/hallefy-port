import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <div className="bg-gradient-to-r from-white to-surface pt-8 pb-[90px]">
        <Header />
        <div className="pt-10 md:pt-14">
          <Hero />
        </div>
      </div>
      <ProjectsGrid />
      <About />
      <Gallery />
      <Footer />
    </main>
  );
}
