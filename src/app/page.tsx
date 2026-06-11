import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  HeartHandshake,
  MapPin,
  Music2,
  ShieldCheck,
} from "lucide-react";
import { LogoMark } from "@/design-system";
import { assetPath } from "@/design-system/lib/asset-path";

const redistributionSteps = [
  {
    label: "01",
    title: "Collecte",
    text: "Les dons sont centralises autour du concert et de la billetterie solidaire.",
  },
  {
    label: "02",
    title: "Selection",
    text: "Les associations partenaires identifient les besoins les plus urgents sur le terrain.",
  },
  {
    label: "03",
    title: "Reversement",
    text: "Les fonds sont redistribues aux structures qui accompagnent les femmes victimes de violences.",
  },
];

const donationAmounts = ["15", "30", "50", "100"];

const faqs = [
  {
    q: "A qui sont destines les dons ?",
    a: "Aux associations qui accompagnent les femmes victimes de violences en Republique democratique du Congo.",
  },
  {
    q: "Pourquoi Couleur Cafe ?",
    a: "Parce que le festival offre une scene visible, populaire et rassembleuse pour transformer un moment culturel en soutien concret.",
  },
  {
    q: "L'association est-elle belge ?",
    a: "Le projet est porte depuis la Belgique par une association loi 1901, avec un dispositif de reversement dedie.",
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-[11px] font-black uppercase tracking-[0.28em] ${
        light ? "text-sc-yellow-500" : "text-sc-red-600"
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-sc-white text-sc-blue-950">
      <header className="sticky top-0 z-50 border-b border-sc-yellow-500/25 bg-sc-blue-950 px-5 py-4 text-sc-white md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a className="flex min-w-0 items-center" href="#top" aria-label="Solidarite Congo">
            <LogoMark className="shrink-0" priority size="xs" />
          </a>
          <div className="hidden items-center gap-7 text-xs font-bold uppercase text-sc-white/70 md:flex">
            <a className="transition hover:text-sc-yellow-500" href="#cause">
              Cause
            </a>
            <a className="transition hover:text-sc-yellow-500" href="#redistribution">
              Redistribution
            </a>
            <a className="transition hover:text-sc-yellow-500" href="#don">
              Don
            </a>
          </div>
          <a
            className="inline-flex h-10 items-center gap-2 rounded-sc-pill bg-sc-red-600 px-5 text-sm font-black text-sc-white transition hover:bg-sc-yellow-500 hover:text-sc-blue-950"
            href="#don"
          >
            Faire un don <HeartHandshake size={16} strokeWidth={2.5} />
          </a>
        </nav>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-sc-white">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[45vw] bg-sc-blue-950 lg:block" />
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl gap-0 px-5 py-8 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:py-12">
          <div className="flex flex-col justify-center border-y border-sc-blue-950/20 py-12 lg:pr-10">
            <Eyebrow>Dimanche 28 juin 2026 - Main Stage</Eyebrow>
            <h1 className="mt-6 max-w-4xl font-serif text-[clamp(4rem,10vw,10rem)] font-black leading-[0.82] text-sc-blue-950">
              Solidarite
              <span className="block text-sc-red-600">Congo</span>
            </h1>
            <div className="mt-8 grid gap-6 border-l-4 border-sc-yellow-500 pl-5 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-xl font-bold leading-8 text-sc-blue-900 md:text-2xl">
                Un concert solidaire au festival Couleur Cafe pour soutenir les femmes victimes de
                violences en Republique democratique du Congo.
              </p>
              <a
                className="inline-flex w-fit items-center gap-2 rounded-sc-pill bg-sc-blue-950 px-6 py-4 text-sm font-black uppercase text-sc-white transition hover:bg-sc-red-600"
                href="#don"
              >
                Je participe <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <aside className="relative mt-8 min-h-[430px] overflow-hidden border border-sc-blue-950 bg-sc-blue-950 shadow-[18px_18px_0_var(--sc-yellow-500)] md:min-h-[560px] lg:mt-0">
            <Image
              alt="Portrait digne d'une femme congolaise, symbole de resilience et de solidarite"
              className="h-full w-full object-cover object-[58%_center]"
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 54vw, 100vw"
              src={assetPath("/images/solidarite-congo-hero-resilience.png")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sc-blue-950 via-sc-blue-950/12 to-transparent" />
            <div className="absolute left-0 top-0 h-5 w-full bg-sc-red-600" />
            <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-5 text-sm font-bold uppercase text-sc-white md:grid-cols-3">
              <p className="flex items-center gap-2">
                <CalendarDays size={17} /> 28 juin 2026
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={17} /> Bruxelles
              </p>
              <p className="flex items-center gap-2">
                <Music2 size={17} /> Couleur Cafe
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="cause" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden border border-sc-blue-950 bg-sc-blue-950 shadow-[12px_12px_0_var(--sc-red-600)] md:min-h-[560px]">
            <Image
              alt="Cercle d'accompagnement et d'ecoute entre femmes congolaises"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              src={assetPath("/images/solidarite-congo-collectif-soutien.png")}
            />
          </div>

          <div className="lg:pl-10">
            <Eyebrow>Le sens</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-5xl font-black leading-[0.92] text-sc-blue-950 md:text-7xl">
              Une scene pour ne pas detourner le regard.
            </h2>
            <p className="mt-8 text-lg leading-8 text-sc-blue-900 md:text-xl">
              Solidarite Congo tient une ligne claire: parler d&apos;un sujet grave avec pudeur,
              sans pathos, et reunir l&apos;energie d&apos;un festival autour d&apos;un soutien concret.
            </p>
            <div className="mt-8 grid gap-4 border-t border-sc-blue-950/15 pt-8">
              {["Dignite du sujet", "Transparence du don", "Force du collectif"].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-3 text-sm font-black uppercase text-sc-blue-950"
                >
                  <CheckCircle2 className="shrink-0 text-sc-red-600" size={18} /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate min-h-[620px] overflow-hidden bg-sc-blue-950 px-5 py-16 text-sc-white md:px-8 md:py-24">
        <Image
          alt="Concert solidaire avec public et lumiere de scene"
          className="-z-10 h-full w-full object-cover opacity-75"
          fill
          sizes="100vw"
          src={assetPath("/images/solidarite-congo-concert-solidarite.png")}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sc-blue-950 via-sc-blue-950/70 to-sc-blue-950/12" />
        <div className="mx-auto flex min-h-[500px] max-w-7xl items-end">
          <div className="max-w-3xl">
            <Eyebrow light>Festival Couleur Cafe</Eyebrow>
            <h2 className="mt-4 font-serif text-5xl font-black leading-[0.92] md:text-8xl">
              Faire d&apos;un concert un geste collectif.
            </h2>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-sc-white/78">
              La scene donne de la visibilite. Le don transforme cette attention en soutien direct
              pour les structures qui accompagnent les femmes victimes de violences.
            </p>
          </div>
        </div>
      </section>

      <section id="redistribution" className="bg-sc-blue-950 px-5 py-20 text-sc-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow light>Redistribution</Eyebrow>
              <h2 className="mt-4 font-serif text-5xl font-black leading-none md:text-8xl">
                Le trajet du don.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-sc-white/70">
              Un parcours simple, lisible et public: collecte, selection des besoins, reversement
              aux structures de terrain.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-sc-white/18 md:grid-cols-3">
            {redistributionSteps.map((step) => (
              <article key={step.label} className="bg-sc-blue-950 p-7 md:min-h-[280px]">
                <p className="font-mono text-sm font-black text-sc-yellow-500">{step.label}</p>
                <h3 className="mt-14 font-serif text-4xl font-black">{step.title}</h3>
                <p className="mt-5 text-base leading-7 text-sc-white/72">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="don" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Faire un don</Eyebrow>
            <h2 className="mt-4 font-serif text-5xl font-black leading-[0.92] text-sc-blue-950 md:text-7xl">
              Donner ici. Agir la-bas.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-sc-blue-900">
              Chaque contribution alimente le fonds solidaire lie au concert. Le don peut rester
              modeste: c&apos;est l&apos;addition des presences qui compte.
            </p>
          </div>

          <div className="border border-sc-blue-950 bg-sc-white p-5 shadow-[12px_12px_0_var(--sc-blue-950)] md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-sc-blue-950/18 pb-5">
              <p className="text-sm font-black uppercase">Montant</p>
              <ShieldCheck className="text-sc-red-600" size={22} />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {donationAmounts.map((amount) => (
                <button
                  className="h-16 border border-sc-blue-950 bg-sc-white text-xl font-black transition hover:bg-sc-yellow-500"
                  key={amount}
                  type="button"
                >
                  {amount} EUR
                </button>
              ))}
            </div>
            <button className="mt-5 flex h-14 w-full items-center justify-center gap-2 bg-sc-red-600 text-sm font-black uppercase text-sc-white transition hover:bg-sc-blue-950">
              Finaliser le don <ExternalLink size={17} />
            </button>
            <p className="mt-5 text-sm leading-6 text-sc-steel">
              Prototype de parcours: le lien de paiement final pourra etre branche apres validation
              du partenaire de collecte.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-sc-blue-950/15 px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-black text-sc-blue-950">FAQ</h2>
          </div>
          <div className="divide-y divide-sc-blue-950/15 border-y border-sc-blue-950/15">
            {faqs.map((item) => (
              <details className="group py-6" key={item.q}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black">
                  {item.q}
                  <span className="text-sc-red-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-7 text-sc-blue-900/76">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-sc-black px-5 py-10 text-sc-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm md:flex-row">
          <LogoMark size="xs" />
          <p className="text-sc-white/62">Festival Couleur Cafe - Bruxelles - 28 juin 2026</p>
        </div>
      </footer>
    </main>
  );
}
