"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SlideLayout } from "./SlideLayout";
import { SlideReveal } from "./SlideReveal";

/** Titres de slide : toujours centrés dans la colonne de contenu */
const slideTitle = "w-full text-balance text-center";

export function Slide01Hook() {
  return (
    <SlideLayout align="center" contentMax="xl">
      <SlideReveal delay={0.05}>
        <p
          className={cn(
            slideTitle,
            "text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground",
          )}
        >
          Introduction
        </p>
      </SlideReveal>
      <SlideReveal delay={0.12}>
        <h1
          className={cn(
            slideTitle,
            "text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl",
          )}
        >
          Apprendre à coder, ce n’est pas difficile…{" "}
          <span className="text-muted-foreground">
            mais y rester, ça l’est.
          </span>
        </h1>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide02Difficulty() {
  const items = [
    "Motivation instable",
    "Trop de contenus",
    "Pas de cadre",
    "Abandon rapide",
  ];
  return (
    <SlideLayout contentMax="2xl" align="start">
      <SlideReveal delay={0.05} className="w-full">
        <h2
          className={cn(
            slideTitle,
            "text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl",
          )}
        >
          La difficulté
        </h2>
      </SlideReveal>
      <ul className="m-0 grid w-full list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4 md:gap-5">
        {items.map((t, i) => (
          <li key={t} className="min-w-0">
            <SlideReveal delay={0.1 + i * 0.08}>
              <div className="flex h-full min-h-[4.25rem] items-start gap-4 rounded-2xl border border-border bg-muted/25 px-4 py-4 sm:min-h-[5rem] sm:items-center sm:px-5 sm:py-5 md:gap-5">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-sm font-semibold tabular-nums text-primary sm:mt-0 sm:h-10 sm:w-10 sm:text-base"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1 text-balance pt-0.5 text-base font-medium leading-snug text-foreground sm:pt-0 sm:text-lg md:text-xl">
                  {t}
                </span>
              </div>
            </SlideReveal>
          </li>
        ))}
      </ul>
    </SlideLayout>
  );
}

export function Slide03RealProblem() {
  return (
    <SlideLayout align="center" contentMax="xl">
      <SlideReveal delay={0.06}>
        <blockquote
          className={cn(
            slideTitle,
            "text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl",
          )}
        >
          On n’échoue pas parce qu’on est incapable. On échoue parce qu’on est
          mal accompagné.
        </blockquote>
      </SlideReveal>
      <SlideReveal delay={0.28}>
        <p
          className={cn(
            slideTitle,
            "mx-auto max-w-xl text-base text-muted-foreground sm:text-lg",
          )}
        >
          Le vrai problème n’est pas le talent — c’est l’environnement
          d’apprentissage.
        </p>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide04WhatIsFata() {
  const pillars = [
    {
      label: "Vision",
      text: "Un accès équitable aux compétences tech et à l’entrepreneuriat numérique.",
    },
    {
      label: "Mission",
      text: "Accélérer l’apprentissage numérique pour la jeunesse africaine.",
    },
    {
      label: "Axes",
      text: "Emploi & initiative, confiance en soi, compétences concrètes, rayonnement de l’Afrique connectée.",
    },
  ] as const;
  return (
    <SlideLayout align="center" contentMax="xl" centered>
      <SlideReveal delay={0.05} className="w-full">
        <h2
          className={cn(
            slideTitle,
            "text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl",
          )}
        >
          <span>C’est quoi </span>
          <span className="whitespace-nowrap align-middle">
            <span className="font-semibold text-accent">{`{`}</span>
            <span className="font-bold text-foreground">fata</span>
            <span className="font-semibold text-accent">{`}`}</span>
          </span>
          <span> ?</span>
        </h2>
      </SlideReveal>

      <SlideReveal delay={0.1} className="w-full max-w-xl">
        <p className="text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          <strong className="text-foreground">App + web</strong> · nouvelle
          école de <strong className="text-foreground">programmation</strong>{" "}
          pour apprendre autrement.
        </p>
      </SlideReveal>

      <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {pillars.map((p, i) => (
          <SlideReveal key={p.label} delay={0.14 + i * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-muted/25 px-4 py-4 text-center shadow-sm sm:px-5 sm:py-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {p.label}
              </span>
              <p className="mt-2 text-balance text-sm leading-snug text-foreground sm:text-[0.95rem]">
                {p.text}
              </p>
            </div>
          </SlideReveal>
        ))}
      </div>
    </SlideLayout>
  );
}

export function Slide05Mission() {
  return (
    <SlideLayout align="center" contentMax="xl" centered>
      <SlideReveal delay={0.06}>
        <p
          className={cn(
            slideTitle,
            "font-mono text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl",
          )}
        >
          Savoir faire, pouvoir faire
        </p>
      </SlideReveal>
      <SlideReveal delay={0.14}>
        <p
          className={cn(
            slideTitle,
            "mx-auto max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg",
          )}
        >
          Numérique accessible :{" "}
          <span className="text-foreground">mobile</span>,{" "}
          <span className="text-foreground">web</span>, au rythme de chacun.
        </p>
      </SlideReveal>
    </SlideLayout>
  );
}

const HOW_PILLARS = [
  {
    title: "Apprendre vite",
    text: "Micro-leçons, XP, classements. Rester motivé au quotidien.",
  },
  {
    title: "Coder pour de vrai",
    text: "Python, web, IA… Exercices et pratique, pas que de la théorie.",
  },
  {
    title: "Partout",
    text: "Android, iOS et web : et une communauté pour progresser ensemble.",
  },
  {
    title: "Défis",
    text: "Challenges et concours autour de l’XP pour pousser plus loin.",
  },
] as const;

export function Slide06HowItWorks() {
  return (
    <SlideLayout align="center" contentMax="xl" centered>
      <SlideReveal delay={0.05} className="w-full">
        <h2
          className={cn(
            slideTitle,
            "text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl",
          )}
        >
          Comment ça marche
        </h2>
      </SlideReveal>
      <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {HOW_PILLARS.map((block, i) => (
          <SlideReveal key={block.title} delay={0.1 + i * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-muted/20 px-4 py-4 text-center shadow-sm sm:px-5 sm:py-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {block.title}
              </span>
              <p className="mt-2 text-balance text-sm leading-snug text-foreground sm:text-base">
                {block.text}
              </p>
            </div>
          </SlideReveal>
        ))}
      </div>
    </SlideLayout>
  );
}

export function Slide06AppScreenshots() {
  return (
    <SlideLayout
      align="start"
      centered={false}
      className="justify-center"
      contentMax="wide"
    >
      <SlideReveal delay={0.06} className="w-full">
        <div className="flex w-full flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
          <div className="flex min-w-0 shrink-0 flex-col justify-center text-left md:max-w-[40%] lg:max-w-sm xl:max-w-md">
            <p className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[2.65rem] md:leading-[1.06] lg:text-6xl">
              Aperçu de
              <br />
              l&apos;application.
            </p>
          </div>

          <figure className="flex min-w-0 flex-1 flex-col items-center md:min-w-0 md:items-end">
            <div className="w-full max-w-full overflow-hidden rounded-2xl border border-border shadow-md md:ml-auto md:mr-0 md:w-auto md:max-w-[min(100%,52rem)]">
              <Image
                src="/fata-screenshots.png"
                alt="L'interface de l'application fata"
                width={960}
                height={620}
                className="block h-auto w-full max-w-full object-contain max-h-[min(46vh,360px)] sm:max-h-[min(52vh,420px)] md:max-h-[min(58vh,500px)] lg:max-h-[min(62vh,560px)]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
                priority={false}
              />
            </div>
          </figure>
        </div>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide07Retention() {
  const items = [
    "Badges",
    "Classement",
    "Challenges journaliers",
    "Récompenses (événements)",
    "Progression comme un jeu",
    "C'est un vrai jeu",
  ];
  return (
    <SlideLayout align="center" contentMax="2xl">
      <SlideReveal delay={0.05}>
        <h2
          className={cn(
            slideTitle,
            "mx-auto max-w-3xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl",
          )}
        >
          Pourquoi tu ne vas pas abandonner&nbsp;?
        </h2>
      </SlideReveal>
      <ul className="m-0 grid w-full max-w-4xl list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-4">
        {items.map((t, i) => (
          <li key={t} className="min-w-0">
            <SlideReveal delay={0.12 + i * 0.06}>
              <div className="flex min-h-[4.75rem] flex-col items-center justify-center rounded-2xl border border-border bg-card/50 px-4 py-4 text-center shadow-sm sm:min-h-[5.25rem] sm:px-5 sm:py-5">
                <span className="text-balance text-base font-semibold tracking-tight text-foreground sm:text-lg md:text-xl">
                  {t}
                </span>
              </div>
            </SlideReveal>
          </li>
        ))}
      </ul>
    </SlideLayout>
  );
}

export function Slide09Impact() {
  const items = [
    "Formation de talents",
    "Opportunités",
    "Transformation digitale",
  ];
  return (
    <SlideLayout align="center" contentMax="2xl">
      <SlideReveal delay={0.05}>
        <h2
          className={cn(
            slideTitle,
            "text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl",
          )}
        >
          Impact
        </h2>
      </SlideReveal>
      <ul className="m-0 grid w-full max-w-5xl list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:gap-5">
        {items.map((t, i) => (
          <li key={t} className="min-w-0">
            <SlideReveal delay={0.12 + i * 0.08}>
              <div className="flex h-full min-h-[6.5rem] flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-muted/25 px-4 py-6 text-center shadow-sm sm:min-h-[7.5rem] sm:px-5 sm:py-7 md:px-4">
                <span
                  className="h-1 w-10 shrink-0 rounded-full bg-accent sm:w-12"
                  aria-hidden
                />
                <span className="text-balance text-lg font-semibold leading-snug text-foreground sm:text-xl md:text-2xl">
                  {t}
                </span>
              </div>
            </SlideReveal>
          </li>
        ))}
      </ul>
    </SlideLayout>
  );
}

export function Slide10Demo() {
  return (
    <SlideLayout align="center" contentMax="lg" centered>
      <SlideReveal delay={0.08}>
        <div className="flex flex-col items-center">
          <p
            className={cn(
              slideTitle,
              "text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl",
            )}
          >
            Démo
          </p>
          <span
            className="mt-6 block h-1.5 w-14 rounded-full bg-gradient-to-r from-primary via-accent to-primary sm:mt-8 sm:w-20"
            aria-hidden
          />
        </div>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide11Cta() {
  return (
    <SlideLayout align="center" contentMax="lg">
      <SlideReveal delay={0.06}>
        <h2
          className={cn(
            slideTitle,
            "text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
          )}
        >
          Rejoindre fata
        </h2>
      </SlideReveal>
      <SlideReveal delay={0.12}>
        <p
          className={cn(
            slideTitle,
            "mx-auto max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg",
          )}
        >
          Télécharge l’application sur le site officiel{" "}
          <strong className="font-medium text-foreground">App Store</strong>,{" "}
          <strong className="font-medium text-foreground">Google Play</strong>{" "}
          et accès web.
        </p>
      </SlideReveal>
      <SlideReveal delay={0.2} className="flex flex-col items-center gap-4">
        <Button
          size="lg"
          className="h-12 w-full max-w-sm touch-manipulation rounded-full px-8 text-base shadow-md transition-transform hover:scale-[1.02] active:scale-[0.99] sm:h-14 sm:w-auto sm:px-10"
          asChild
        >
          <Link
            href="https://fata.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ouvrir fata.dev
          </Link>
        </Button>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide12Signature() {
  return (
    <SlideLayout align="center" contentMax="2xl" centered>
      <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:items-start md:gap-12 lg:gap-16">
        <SlideReveal
          delay={0.08}
          className="flex justify-center md:justify-start"
        >
          <div className="relative aspect-[3/4] w-52 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-xl ring-2 ring-accent/45 sm:w-56 md:w-60 lg:w-64">
            <Image
              src="/obed.png"
              alt="Photo de Obed AGBOHOUN"
              fill
              className="object-cover object-[50%_18%]"
              sizes="(max-width: 768px) 208px, 256px"
              priority
            />
          </div>
        </SlideReveal>

        <div className="flex min-w-0 flex-col items-center text-center md:items-start md:justify-center md:pt-1 md:text-left">
          <SlideReveal delay={0.12}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-base">
              C’était
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              S. Obed AGBOHOUN
            </h2>
          </SlideReveal>
          <SlideReveal delay={0.2}>
            <ul className="mt-6 space-y-3 border-t border-border/80 pt-6 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>Développeur full-stack</span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>Étudiant en génie logiciel</span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>
                  Ambassadeur{" "}
                  <span className="whitespace-nowrap font-semibold">
                    <span className="text-accent">{`{`}</span>
                    <span className="text-foreground">fata</span>
                    <span className="text-accent">{`}`}</span>
                  </span>{" "}
                  Bénin
                </span>
              </li>
            </ul>
          </SlideReveal>
        </div>
      </div>
    </SlideLayout>
  );
}

export function Slide13Questions() {
  return (
    <SlideLayout align="center" contentMax="lg">
      <SlideReveal delay={0.08}>
        <h2
          className={cn(
            slideTitle,
            "text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
          )}
        >
          Questions ?
        </h2>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide14Thanks() {
  return (
    <SlideLayout align="center" contentMax="lg" centered>
      <SlideReveal delay={0.08}>
        <p
          className={cn(
            slideTitle,
            "text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground",
          )}
        >
          Fin de présentation
        </p>
      </SlideReveal>
      <SlideReveal delay={0.16}>
        <h2
          className={cn(
            slideTitle,
            "mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl",
          )}
        >
          Merci pour votre attention
        </h2>
      </SlideReveal>
    </SlideLayout>
  );
}

export const SLIDE_COMPONENTS = [
  Slide01Hook,
  Slide02Difficulty,
  Slide03RealProblem,
  Slide04WhatIsFata,
  Slide05Mission,
  Slide06HowItWorks,
  Slide06AppScreenshots,
  Slide07Retention,
  Slide09Impact,
  Slide10Demo,
  Slide11Cta,
  Slide12Signature,
  Slide13Questions,
  Slide14Thanks,
] as const;

export const SLIDE_COUNT = SLIDE_COMPONENTS.length;
