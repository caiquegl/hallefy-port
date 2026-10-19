import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-[min(100%-2.5rem,1200px)] flex-col items-start justify-center">
      <h1 className="text-3xl font-semibold text-[#222]">Página não encontrada</h1>
      <p className="mt-3 text-[#444]">
        O endereço que você tentou acessar não existe neste portfólio.
      </p>
      <Link href="/" className="mt-8 text-[#159cd5] hover:opacity-80">
        Voltar para a home
      </Link>
    </main>
  );
}
