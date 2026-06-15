import { Bell, Download, HeartHandshake, ShieldCheck, User } from "lucide-react";
import {
  Badge,
  Button,
  LogoMark,
  SlashMark,
  Spinner,
  Typography,
  type TypographyVariant,
  brandColors,
  spacingTokens,
  typographyTokens,
} from "@/design-system";

const darkTextTokens = new Set(["sc-yellow-500", "sc-cyan-500", "sc-white", "sc-orange-500"]);

const typographyVariants: TypographyVariant[] = [
  "display",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "lead",
  "body-lg",
  "body-base",
  "body-sm",
  "caption1",
  "caption2",
  "caption3",
  "caption4",
];

function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="border-t border-slate-200 py-8">
      <h2 className="mb-4 text-base font-semibold tracking-tight text-slate-950">{title}</h2>
      {children}
    </section>
  );
}

function SpecCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-sm border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,.03)] ${className}`}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 text-sm font-semibold text-slate-700">{children}</p>;
}

function ColorTile({
  color,
}: {
  color: (typeof brandColors)[number];
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-slate-200 bg-white">
      <div className="h-20" style={{ backgroundColor: color.hex }} />
      <div className={darkTextTokens.has(color.token) ? "border-t border-slate-200 p-3 text-slate-950" : "border-t border-slate-200 p-3 text-slate-950"}>
        <p className="text-sm font-semibold">{color.name}</p>
        <code className="block text-xs text-slate-500">{color.hex}</code>
        <code className="block text-xs text-slate-500">bg-{color.token}</code>
      </div>
    </div>
  );
}

function ButtonRow({ size }: { size: "sm" | "md" | "lg" }) {
  const iconSize = size === "sm" ? 14 : size === "md" ? 16 : 18;
  const iconOnlySize = size === "sm" ? "icon-sm" : size === "md" ? "icon-md" : "icon-lg";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size={size}>Accent</Button>
      <Button size={size}>
        <ShieldCheck size={iconSize} strokeWidth={2.5} /> Accent
      </Button>
      <Button size={size} variant="secondary">
        secondary
      </Button>
      <Button size={iconOnlySize} aria-label="Notifications">
        <Bell size={iconSize} strokeWidth={2.5} />
      </Button>
      <Button size={iconOnlySize} variant="secondary" aria-label="Notifications secondary">
        <Bell size={iconSize} strokeWidth={2.5} />
      </Button>
      <Button size={iconOnlySize} variant="ghost" aria-label="Telecharger">
        <Download size={iconSize} strokeWidth={2.5} />
      </Button>
      <Button size={size} variant="outline">
        outline
      </Button>
      <Button size={size} disabled>
        disabled
      </Button>
    </div>
  );
}

function ProjectButtonExamples() {
  const rows = [
    {
      description: "Actions rapides dans une barre d'outils ou une ligne de tableau.",
      label: "Small",
      size: "sm" as const,
      iconSize: 14,
      iconOnlySize: "icon-sm" as const,
    },
    {
      description: "Actions courantes dans les formulaires et panneaux de validation.",
      label: "Medium",
      size: "md" as const,
      iconSize: 16,
      iconOnlySize: "icon-md" as const,
    },
    {
      description: "Actions prioritaires sur une page ou un module important.",
      label: "Large",
      size: "lg" as const,
      iconSize: 18,
      iconOnlySize: "icon-lg" as const,
    },
  ];

  return (
    <SpecCard className="mt-3 space-y-8">
      <div className="grid gap-3 md:grid-cols-[220px_1fr]">
        <div>
          <Label>Project manager usage</Label>
          <Typography component="p" theme="gray" variant="body-sm">
            Exemples nommes pour aider les chefs de projet a choisir le bon niveau d&apos;action dans
            les maquettes et tickets.
          </Typography>
        </div>
        <div className="grid gap-2 text-xs text-slate-500 sm:grid-cols-2 lg:grid-cols-4">
          <p>
            <strong className="block text-slate-800">Primary</strong>
            Action principale d&apos;un ecran.
          </p>
          <p>
            <strong className="block text-slate-800">Secondary</strong>
            Action alternative ou moins prioritaire.
          </p>
          <p>
            <strong className="block text-slate-800">Outline</strong>
            Action neutre ou navigation.
          </p>
          <p>
            <strong className="block text-slate-800">Disabled</strong>
            Etat indisponible, en attente de condition.
          </p>
        </div>
      </div>

      {rows.map((row) => (
        <div key={row.label} className="grid gap-3 md:grid-cols-[220px_1fr]">
          <div>
            <p className="text-sm font-semibold text-slate-700">{row.label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{row.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size={row.size}>
              <HeartHandshake size={row.iconSize} strokeWidth={2.5} /> Faire un don
            </Button>
            <Button size={row.size}>Publier</Button>
            <Button size={row.size} variant="secondary">
              Modifier
            </Button>
            <Button size={row.size} variant="outline">
              Voir details
            </Button>
            <Button size={row.size} disabled>
              En attente
            </Button>
            <Button size={row.iconOnlySize} aria-label="Assigner un responsable">
              <User size={row.iconSize} strokeWidth={2.5} />
            </Button>
            <Button size={row.iconOnlySize} variant="secondary" aria-label="Responsable secondaire">
              <User size={row.iconSize} strokeWidth={2.5} />
            </Button>
            <Button size={row.iconOnlySize} variant="ghost" aria-label="Responsable neutre">
              <User size={row.iconSize} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      ))}
    </SpecCard>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f5] px-4 py-8 text-slate-950 md:px-8">
      <div className="mx-auto max-w-[1040px]">
        <header className="mb-8 flex items-start justify-between gap-6 border-b border-slate-200 pb-6">
          <div>
            <p className="text-sm font-semibold text-sc-blue-800">Solidarite Congo</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              Design system
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Catalogue des tokens et composants React/Tailwind pour construire les prochaines
              interfaces avec le meme langage visuel.
            </p>
          </div>
          <LogoMark priority size="sm" />
        </header>

        <Section title="Colors">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {brandColors.map((color) => (
              <ColorTile key={color.token} color={color} />
            ))}
          </div>
        </Section>

        <Section title="Typography">
          <div className="grid gap-3 md:grid-cols-3">
            {typographyTokens.map((item) => (
              <SpecCard key={item.name}>
                <p className="text-sm text-slate-500">{item.name}</p>
                <Typography
                  className="mt-1"
                  component="p"
                  variant={item.variant as TypographyVariant}
                  weight="bold"
                >
                  {item.sample}
                </Typography>
                <Typography
                  component="p"
                  theme="primary"
                  variant={item.variant as TypographyVariant}
                  weight="medium"
                >
                  Medium
                </Typography>
                <code className="mt-3 block text-xs text-slate-500">{item.value}</code>
              </SpecCard>
            ))}
          </div>
          <SpecCard className="mt-3">
            <Label>Simple usage</Label>
            <pre className="overflow-x-auto rounded-sm bg-slate-950 p-4 text-xs leading-5 text-slate-100">
              <code>{`<Typography component="h1" weight="bold">Solidarite Congo</Typography>
<Typography component="p" theme="gray">Texte de paragraphe</Typography>
<Typography component="span" variant="caption2" theme="primary">Caption</Typography>`}</code>
            </pre>
          </SpecCard>
          <SpecCard className="mt-3">
            <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
              {typographyVariants.map((variant) => (
                <div key={variant} className="border-b border-slate-100 pb-3 last:border-b-0">
                  <code className="mb-1 block text-xs text-slate-500">variant=&quot;{variant}&quot;</code>
                  <Typography component="p" variant={variant} weight="bold">
                    Solidarite Congo
                  </Typography>
                </div>
              ))}
            </div>
          </SpecCard>
          <SpecCard className="mt-3">
            <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
              {(["h1", "h2", "h3", "h4", "h5", "p", "span"] as const).map((component) => (
                <div key={component} className="border-b border-slate-100 pb-3 last:border-b-0">
                  <code className="mb-1 block text-xs text-slate-500">
                    component=&quot;{component}&quot;
                  </code>
                  <Typography component={component}>Solidarite Congo</Typography>
                </div>
              ))}
            </div>
          </SpecCard>
          <SpecCard className="mt-3">
            <div className="grid gap-4 md:grid-cols-3">
              {(["black", "gray", "primary", "secondary", "white"] as const).map((theme) => (
                <div
                  key={theme}
                  className={`rounded-sm p-3 ${theme === "white" ? "bg-sc-blue-950" : "bg-slate-50"}`}
                >
                  <code className="mb-1 block text-xs text-slate-500">theme=&quot;{theme}&quot;</code>
                  <Typography component="p" theme={theme} weight="medium">
                    Solidarite Congo
                  </Typography>
                </div>
              ))}
            </div>
          </SpecCard>
        </Section>

        <Section title="Assets">
          <div className="grid gap-5 md:grid-cols-[1fr_2fr]">
            <SpecCard>
              <Label>Spinners</Label>
              <div className="flex h-20 items-center gap-4">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
            </SpecCard>

            <SpecCard>
              <Label>Logo</Label>
              <div className="flex h-32 items-center gap-4">
                <LogoMark size="xs" />
                <LogoMark size="sm" />
                <LogoMark size="md" />
                <LogoMark size="lg" />
              </div>
            </SpecCard>
          </div>
        </Section>

        <Section title="Buttons">
          <SpecCard className="space-y-7">
            <div>
              <Label>Small</Label>
              <ButtonRow size="sm" />
            </div>
            <div>
              <Label>Medium</Label>
              <ButtonRow size="md" />
            </div>
            <div>
              <Label>Large</Label>
              <ButtonRow size="lg" />
            </div>
          </SpecCard>
          <ProjectButtonExamples />
        </Section>

        <Section title="Badges">
          <SpecCard>
            <div className="flex flex-wrap gap-2">
              <Badge>26-28 juin</Badge>
              <Badge tone="yellow">Bruxelles</Badge>
              <Badge tone="cyan">Main stage</Badge>
              <Badge tone="red">Urgence RDC</Badge>
            </div>
          </SpecCard>
        </Section>

        <Section title="Identity Motifs">
          <div className="grid gap-3 md:grid-cols-2">
            <SpecCard>
              <Label>Griffe</Label>
              <div className="flex h-28 items-center justify-center rounded-sm bg-slate-50">
                <SlashMark />
              </div>
            </SpecCard>
            <SpecCard>
              <Label>Call to action block</Label>
              <div className="rounded-sm bg-sc-blue-950 p-5 text-white">
                <p className="font-heading text-sm uppercase text-sc-yellow-500">Temps fort</p>
                <p className="mt-2 text-2xl font-extrabold">Dimanche 28 juin</p>
                <Button className="mt-4" size="sm" variant="accent">
                  <HeartHandshake size={14} strokeWidth={2.5} /> Faire un don
                </Button>
              </div>
            </SpecCard>
          </div>
        </Section>

        <Section title="Spacing">
          <SpecCard>
            <div className="flex flex-wrap items-end gap-3">
              {spacingTokens.map((space) => (
                <span
                  key={space}
                  className="inline-flex items-center justify-center rounded-sm bg-sc-blue-800 text-[10px] font-semibold text-white"
                  style={{ width: space, height: space, minWidth: "24px", minHeight: "24px" }}
                >
                  {space}
                </span>
              ))}
            </div>
          </SpecCard>
        </Section>
      </div>
    </main>
  );
}
