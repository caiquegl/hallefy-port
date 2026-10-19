import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hallefy.com.br"),
  title: {
    default: site.title,
    template: `%s – Hallefy`,
  },
  description: site.hero.intro,
  openGraph: {
    title: site.title,
    description: site.about.agencies,
    locale: "pt_BR",
    type: "website",
    siteName: "Hallefy",
    images: [{ url: "/images/logo.png", width: 300, height: 300, alt: "Hallefy" }],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.about.agencies,
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
