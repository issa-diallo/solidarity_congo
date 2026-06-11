export const brandColors = [
  { name: "Nuit Congo", token: "sc-blue-950", hex: "#001743" },
  { name: "Bleu fond", token: "sc-blue-900", hex: "#012062" },
  { name: "Bleu scene", token: "sc-blue-800", hex: "#01398B" },
  { name: "Bleu action", token: "sc-blue-500", hex: "#016ED8" },
  { name: "Jaune appel", token: "sc-yellow-500", hex: "#EFE80F" },
  { name: "Rouge alerte", token: "sc-red-600", hex: "#D91524" },
  { name: "Orange rythme", token: "sc-orange-500", hex: "#FF7A1A" },
  { name: "Cyan rythme", token: "sc-cyan-500", hex: "#05A7E8" },
  { name: "Blanc logo", token: "sc-white", hex: "#F0F1EC" },
  { name: "Ombre acier", token: "sc-steel", hex: "#5A6A8E" },
] as const;

export const typographyTokens = [
  {
    name: "Display",
    sample: "Display",
    variant: "display",
    value: "Hanken Grotesk / var(--font-display)",
    usage: "Titres hero, titres de section, labels forts.",
  },
  {
    name: "H1",
    sample: "Regular",
    variant: "h1",
    value: "Hanken Grotesk / var(--font-heading)",
    usage: "Titre principal de page.",
  },
  {
    name: "Body base",
    sample: "Medium",
    variant: "body-base",
    value: "Inter / var(--font-body)",
    usage: "Paragraphes courts, captions, libelles de composants.",
  },
] as const;

export const spacingTokens = [
  "4px",
  "8px",
  "12px",
  "16px",
  "24px",
  "32px",
  "48px",
  "72px",
] as const;
