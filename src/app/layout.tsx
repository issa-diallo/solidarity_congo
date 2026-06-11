import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solidarite Congo x Couleur Cafe",
  description:
    "Concert solidaire au festival Couleur Cafe, Bruxelles, au profit des femmes victimes de violences en Republique democratique du Congo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
