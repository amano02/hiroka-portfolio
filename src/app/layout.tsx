import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Shippori_Mincho } from "next/font/google";
import { site } from "@/lib/design";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
});

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  variable: "--font-shippori",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description:
    "Web / DX / SNS / Art / 3D / AI — つくることを通して、世界と関わる。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${shippori.variable} ${inter.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
