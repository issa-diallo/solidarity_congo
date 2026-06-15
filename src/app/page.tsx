import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  MapPin,
  Megaphone,
  Music2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { LogoLockup } from "@/design-system";
import { assetPath } from "@/design-system/lib/asset-path";

const impactItems = [
  {
    title: "Ecoute et protection",
    text: "Soutenir les associations qui accueillent les femmes victimes de violences.",
  },
  {
    title: "Reconstruction",
    text: "Financer des besoins concrets: accompagnement, orientation, dignite, presence.",
  },
  {
    title: "Visibilite",
    text: "Transformer une scene populaire en relais public pour une cause trop souvent tenue loin du regard.",
  },
];

const fundSteps = [
  "Collecte pendant la campagne et le concert",
  "Lecture des besoins avec les partenaires de terrain",
  "Reversement cible aux structures qui accompagnent les femmes",
];

const donationAmounts = ["15", "30", "50", "100"];

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-black uppercase leading-5 tracking-[0.22em] text-sc-red-600">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-sc-cream text-sc-blue-950">
      <header className="absolute left-0 right-0 top-0 z-50 px-4 py-5 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-sc-white">
          <a href="#top" aria-label="Solidarite Congo">
            <LogoLockup className="shadow-[0_12px_30px_rgba(0,0,0,.22)]" priority size="nav" />
          </a>
          <div className="hidden items-center gap-8 text-[11px] font-black uppercase tracking-[0.1em] text-sc-white/78 md:flex">
            <a className="transition hover:text-sc-yellow-500" href="#cause">
              Cause
            </a>
            <a className="transition hover:text-sc-yellow-500" href="#impact">
              Impact
            </a>
            <a className="transition hover:text-sc-yellow-500" href="#don">
              Donner
            </a>
          </div>
          <a
            className="inline-flex h-11 items-center gap-2 rounded-sc-pill bg-sc-yellow-500 px-5 text-xs font-black uppercase text-sc-blue-950 shadow-[0_10px_0_rgba(0,0,0,.18)] transition hover:-translate-y-0.5 hover:bg-sc-white"
            href="#don"
          >
            Faire un don <HeartHandshake size={16} strokeWidth={2.6} />
          </a>
        </nav>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-sc-blue-950 text-sc-white">
        <Image
          alt="Concert solidaire pour soutenir les femmes du Congo"
          className="-z-30 h-full w-full object-cover object-[50%_38%] opacity-62"
          fill
          priority
          sizes="100vw"
          src={assetPath("/images/solidarite-congo-concert-solidarite.png")}
        />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_18%,rgba(239,232,15,.22),transparent_22%),radial-gradient(circle_at_15%_72%,rgba(5,167,232,.34),transparent_28%),linear-gradient(180deg,rgba(0,23,67,.9)_0%,rgba(0,23,67,.8)_46%,rgba(0,23,67,.97)_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.28] sc-texture" />
        <div className="absolute left-[-8vw] top-40 -z-10 hidden h-48 w-[42vw] rotate-[-18deg] bg-sc-yellow-500/90 blur-[1px] md:block" />
        <div className="absolute right-[-16vw] top-28 -z-10 hidden h-56 w-[42vw] rotate-[18deg] bg-sc-cyan-500/78 blur-[1px] md:block" />
        <div className="absolute bottom-0 left-1/2 -z-10 hidden h-44 w-[120vw] -translate-x-1/2 rotate-[-3deg] border-y-[28px] border-sc-blue-500/50 md:block" />
        <div className="absolute bottom-24 right-[7vw] hidden rotate-[-10deg] rounded-sc-pill bg-sc-red-600 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-sc-white shadow-[0_12px_40px_rgba(0,0,0,.28)] lg:block">
          live solidaire
        </div>
        <div className="absolute left-[8vw] top-[24vh] hidden rotate-[8deg] rounded-sc-pill bg-sc-yellow-500 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-sc-blue-950 shadow-[0_10px_34px_rgba(0,0,0,.24)] md:block">
          main stage
        </div>

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-12 pt-24 text-center md:px-8 md:pt-32">
          <LogoLockup className="mb-8 hidden md:inline-block" priority size="hero" />
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.18em] text-sc-yellow-500 md:text-[11px]">
            <span className="rounded-sc-pill border border-sc-yellow-500/50 bg-sc-blue-950/58 px-4 py-2 backdrop-blur">
              Couleur Cafe
            </span>
            <span className="rounded-sc-pill border border-sc-white/20 bg-sc-white/10 px-4 py-2 text-sc-white backdrop-blur">
              Bruxelles
            </span>
            <span className="rounded-sc-pill border border-sc-yellow-500/50 bg-sc-blue-950/58 px-4 py-2 backdrop-blur">
              28 juin 2026
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-[clamp(2.75rem,7vw,7.25rem)] font-black uppercase leading-[0.86] tracking-normal text-sc-white shadow-title md:mt-8">
            Concert
            <span className="block text-sc-yellow-500">solidaire</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-sc-white/86 md:text-xl md:leading-9">
            Pour soutenir les femmes du Congo et financer les associations qui protegent, ecoutent
            et accompagnent les survivantes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex h-13 min-h-13 items-center gap-2 rounded-sc-pill bg-sc-yellow-500 px-7 text-sm font-black uppercase text-sc-blue-950 shadow-[0_9px_0_rgba(0,0,0,.34)] transition hover:-translate-y-0.5 hover:bg-sc-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-sc-white"
              href="#don"
            >
              Faire un don <ArrowRight size={18} />
            </a>
            <a
              className="inline-flex h-13 min-h-13 items-center gap-2 rounded-sc-pill border border-sc-white/40 bg-sc-white/8 px-7 text-sm font-black uppercase text-sc-white backdrop-blur transition hover:border-sc-yellow-500 hover:text-sc-yellow-500 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sc-yellow-500"
              href="#impact"
            >
              Voir les actions
            </a>
          </div>

          <div className="mt-10 grid w-full max-w-4xl gap-3 text-left md:grid-cols-3">
            {[
              { icon: CalendarDays, label: "Date", value: "Dim. 28 juin" },
              { icon: MapPin, label: "Lieu", value: "Bruxelles" },
              { icon: Music2, label: "Scene", value: "Main Stage" },
            ].map((item) => (
              <div
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-sc-white/16 bg-sc-white/10 px-4 backdrop-blur"
                key={item.label}
              >
                <item.icon className="shrink-0 text-sc-yellow-500" size={22} strokeWidth={2.5} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sc-white/54">
                    {item.label}
                  </p>
                  <p className="mt-1 text-base font-black uppercase text-sc-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sc-yellow-500 px-4 py-5 text-sc-blue-950 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 text-sm font-black uppercase tracking-[0.08em] md:grid-cols-3">
          {[
            { icon: CalendarDays, label: "28 juin 2026" },
            { icon: MapPin, label: "Bruxelles" },
            { icon: Music2, label: "Main Stage" },
          ].map((item) => (
            <p className="flex min-h-12 items-center gap-3" key={item.label}>
              <item.icon size={21} strokeWidth={2.5} /> {item.label}
            </p>
          ))}
        </div>
      </section>

      <section id="cause" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <SectionKicker>Pourquoi ce concert</SectionKicker>
            <h2 className="mt-4 text-4xl font-black leading-[1] md:text-6xl">
              Pas seulement collecter. Prendre position.
            </h2>
          </div>
          <div className="grid gap-8">
            <p className="text-2xl font-black leading-tight md:text-4xl">
              Solidarite Congo utilise l&apos;energie du live pour soutenir un sujet grave avec
              pudeur: les femmes victimes de violences en Republique democratique du Congo.
            </p>
            <p className="max-w-3xl text-lg leading-8 text-sc-blue-900">
              Le concert donne de la visibilite, la collecte cree un levier concret, et les
              partenaires de terrain transforment ce soutien en accompagnement direct.
            </p>
          </div>
        </div>
      </section>

      <section id="impact" className="sc-logo-blue-bg px-4 py-16 text-sc-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sc-yellow-500">
                Ce que le don permet
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1] md:text-6xl">
                Un impact lisible, relie au terrain.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-sc-white/72">
              Le site doit rester simple: on comprend la cause, on comprend le trajet du don, on
              sait pourquoi on participe.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {impactItems.map((item) => (
              <article className="border-t border-sc-white/22 pt-6" key={item.title}>
                <Sparkles className="text-sc-yellow-500" size={28} />
                <h3 className="mt-8 text-3xl font-black leading-none">{item.title}</h3>
                <p className="mt-5 text-base leading-7 text-sc-white/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[58%_42%_48%_52%/42%_58%_42%_58%] bg-sc-blue-950 md:min-h-[620px]">
            <Image
              alt="Cercle d'accompagnement et d'ecoute entre femmes congolaises"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              src={assetPath("/images/solidarite-congo-collectif-soutien.png")}
            />
          </div>

          <div>
            <SectionKicker>Le trajet du fonds</SectionKicker>
            <h2 className="mt-4 text-4xl font-black leading-[1] md:text-6xl">
              Une chaine courte, annoncee publiquement.
            </h2>
            <div className="mt-8 grid gap-5">
              {fundSteps.map((step, index) => (
                <div className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-sc-blue-950/16 pt-5" key={step}>
                  <p className="text-4xl font-black text-sc-red-600">{String(index + 1).padStart(2, "0")}</p>
                  <p className="text-xl font-black leading-snug">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="don" className="bg-sc-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div>
            <SectionKicker>Faire un don</SectionKicker>
            <h2 className="mt-4 text-4xl font-black leading-[1] md:text-6xl">
              Chaque billet, chaque don, chaque presence compte.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-sc-blue-900">
              Prototype de parcours: le paiement final pourra etre branche apres validation du
              partenaire de collecte.
            </p>
          </div>

          <div className="bg-sc-cream p-5 shadow-[14px_14px_0_var(--sc-blue-950)] md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-sc-blue-950/18 pb-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sc-steel">
                  Montant libre
                </p>
                <h3 className="mt-2 text-3xl font-black uppercase">Choisir un soutien</h3>
              </div>
              <ShieldCheck className="text-sc-red-600" size={30} />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {donationAmounts.map((amount) => (
                <button
                  className="min-h-20 bg-sc-white px-4 text-xl font-black transition hover:bg-sc-yellow-500 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sc-red-600"
                  key={amount}
                  type="button"
                >
                  {amount} EUR
                </button>
              ))}
            </div>
            <button className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-sc-pill bg-sc-red-600 px-6 text-sm font-black uppercase text-sc-white transition hover:bg-sc-blue-950 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sc-blue-950">
              Continuer le don <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-sc-blue-950 px-4 py-16 text-sc-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sc-yellow-500">
              Le soir du concert
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-[1] md:text-6xl">
              Une scene, une foule, une cause.
            </h2>
          </div>
          <a
            className="inline-flex min-h-13 w-fit items-center gap-2 rounded-sc-pill bg-sc-yellow-500 px-7 text-sm font-black uppercase text-sc-blue-950 transition hover:bg-sc-white"
            href="#don"
          >
            Participer <Megaphone size={18} />
          </a>
        </div>
      </section>

      <footer className="bg-sc-black px-4 py-10 text-sc-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm md:flex-row md:items-center">
          <LogoLockup size="footer" />
          <p className="text-sc-white/62">Festival Couleur Cafe - Bruxelles - 28 juin 2026</p>
        </div>
      </footer>
    </main>
  );
}
