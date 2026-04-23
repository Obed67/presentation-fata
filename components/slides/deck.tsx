"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";

import { SlideLayout } from "./SlideLayout";
import { SlideReveal } from "./SlideReveal";

function Brand() {
  return (
    <span className="rounded-md bg-accent px-1.5 py-0.5 font-mono text-foreground">
      fata
    </span>
  );
}

export function Slide01Hook() {
  return (
    <SlideLayout>
      <SlideReveal delay={0.05}>
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Introduction
        </p>
      </SlideReveal>
      <SlideReveal delay={0.12}>
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Apprendre à coder, ce n’est pas difficile…{" "}
          <span className="text-muted-foreground">mais y rester, ça l’est.</span>
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
    <SlideLayout>
      <SlideReveal delay={0.05}>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
          La difficulté
        </h2>
      </SlideReveal>
      <ul className="space-y-6">
        {items.map((t, i) => (
          <SlideReveal key={t} delay={0.1 + i * 0.08}>
            <li className="flex items-center gap-4 text-xl text-foreground sm:text-2xl">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              {t}
            </li>
          </SlideReveal>
        ))}
      </ul>
    </SlideLayout>
  );
}

export function Slide03RealProblem() {
  return (
    <SlideLayout>
      <SlideReveal delay={0.06}>
        <blockquote className="text-balance text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          On n’échoue pas parce qu’on est incapable. On échoue parce qu’on est
          mal accompagné.
        </blockquote>
      </SlideReveal>
      <SlideReveal delay={0.28}>
        <p className="mt-10 max-w-xl text-lg text-muted-foreground">
          Le vrai problème n’est pas le talent — c’est l’environnement
          d’apprentissage.
        </p>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide04WhatIsFata() {
  const items = [
    "Application mobile",
    "Apprentissage programmation + logique",
    "Accessible à tous",
  ];
  return (
    <SlideLayout>
      <SlideReveal delay={0.05}>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          C’est quoi <Brand /> ?
        </h2>
      </SlideReveal>
      <ul className="mt-10 space-y-6">
        {items.map((t, i) => (
          <SlideReveal key={t} delay={0.12 + i * 0.08}>
            <li className="text-xl sm:text-2xl">{t}</li>
          </SlideReveal>
        ))}
      </ul>
    </SlideLayout>
  );
}

export function Slide05Mission() {
  return (
    <SlideLayout>
      <SlideReveal delay={0.06}>
        <p className="mb-6 font-mono text-2xl font-semibold text-primary sm:text-3xl">
          Savoir faire, pouvoir faire
        </p>
      </SlideReveal>
      <SlideReveal delay={0.14}>
        <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Accélérer l’apprentissage du numérique pour la jeunesse africaine
        </h2>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide06HowItWorks() {
  const points = [
    "Parcours structuré",
    "Exercices pratiques",
    "Progression étape par étape",
  ];
  const method = ["Binôme", "Autonomie", "Distanciel + présentiel"];
  return (
    <SlideLayout centered={false} className="justify-center">
      <SlideReveal delay={0.05}>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
          Comment ça marche
        </h2>
      </SlideReveal>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SlideReveal delay={0.1}>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Parcours
            </p>
          </SlideReveal>
          <ul className="space-y-4">
            {points.map((t, i) => (
              <SlideReveal key={t} delay={0.14 + i * 0.06}>
                <li className="text-lg sm:text-xl">{t}</li>
              </SlideReveal>
            ))}
          </ul>
        </div>
        <div>
          <SlideReveal delay={0.2}>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Méthode
            </p>
          </SlideReveal>
          <ul className="space-y-4">
            {method.map((t, i) => (
              <SlideReveal key={t} delay={0.24 + i * 0.06}>
                <li className="text-lg sm:text-xl">{t}</li>
              </SlideReveal>
            ))}
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}

export function Slide07Retention() {
  const items = ["Accompagnement", "Structure", "Discipline"];
  return (
    <SlideLayout>
      <SlideReveal delay={0.05}>
        <h2 className="mb-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Pourquoi tu ne vas pas abandonner
        </h2>
      </SlideReveal>
      <SlideReveal delay={0.12}>
        <p className="mb-12 text-xl text-muted-foreground sm:text-2xl">
          Construit pour te faire tenir dans le temps
        </p>
      </SlideReveal>
      <ul className="space-y-5">
        {items.map((t, i) => (
          <SlideReveal key={t} delay={0.18 + i * 0.07}>
            <li className="text-2xl font-medium sm:text-3xl">{t}</li>
          </SlideReveal>
        ))}
      </ul>
    </SlideLayout>
  );
}

const STACK = [
  "Linux",
  "Docker",
  "Python",
  "TypeScript",
  "React",
  "GitHub",
  "Tailwind",
] as const;

export function Slide08Stack() {
  return (
    <SlideLayout>
      <SlideReveal delay={0.05}>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
          Stack
        </h2>
      </SlideReveal>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {STACK.map((label, i) => (
          <SlideReveal key={label} delay={0.1 + i * 0.05}>
            <motion.span
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 font-mono text-sm font-medium shadow-sm sm:text-base"
            >
              {label}
            </motion.span>
          </SlideReveal>
        ))}
      </div>
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
    <SlideLayout>
      <SlideReveal delay={0.05}>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
          Impact
        </h2>
      </SlideReveal>
      <ul className="space-y-8">
        {items.map((t, i) => (
          <SlideReveal key={t} delay={0.12 + i * 0.08}>
            <li className="border-l-4 border-accent pl-6 text-2xl font-medium sm:text-3xl">
              {t}
            </li>
          </SlideReveal>
        ))}
      </ul>
    </SlideLayout>
  );
}

export function Slide10Demo() {
  return (
    <SlideLayout>
      <SlideReveal delay={0.06}>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
          Démo
        </h2>
      </SlideReveal>
      <SlideReveal delay={0.12}>
        <div className="flex aspect-video w-full max-w-4xl items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/30 text-muted-foreground">
          <span className="text-lg font-medium">Zone démo — à remplacer</span>
        </div>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide11Cta() {
  return (
    <SlideLayout>
      <SlideReveal delay={0.06}>
        <h2 className="mb-10 text-4xl font-semibold tracking-tight sm:text-5xl">
          Commence aujourd’hui
        </h2>
      </SlideReveal>
      <SlideReveal delay={0.16}>
        <Button
          size="lg"
          className="h-14 rounded-full px-10 text-base shadow-md transition-transform hover:scale-[1.02] active:scale-[0.99]"
        >
          Rejoindre <span className="ml-1 font-mono">fata</span>
        </Button>
      </SlideReveal>
    </SlideLayout>
  );
}

export function Slide12Signature() {
  return (
    <SlideLayout>
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        <SlideReveal delay={0.08}>
          <div
            className="flex h-36 w-36 shrink-0 items-center justify-center rounded-2xl border border-dashed border-border bg-muted/50 text-muted-foreground"
            role="img"
            aria-label="Emplacement photo speaker"
          >
            <UserRound className="h-14 w-14" strokeWidth={1.25} />
          </div>
        </SlideReveal>
        <div>
          <SlideReveal delay={0.12}>
            <p className="text-2xl font-semibold sm:text-3xl">Votre nom</p>
          </SlideReveal>
          <SlideReveal delay={0.2}>
            <p className="mt-2 max-w-md text-lg text-muted-foreground">
              Développeur frontend & ambassadeur <Brand />
            </p>
          </SlideReveal>
        </div>
      </div>
    </SlideLayout>
  );
}

export function Slide13Questions() {
  return (
    <SlideLayout>
      <SlideReveal delay={0.08}>
        <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Questions ?
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
  Slide07Retention,
  Slide08Stack,
  Slide09Impact,
  Slide10Demo,
  Slide11Cta,
  Slide12Signature,
  Slide13Questions,
] as const;

export const SLIDE_COUNT = SLIDE_COMPONENTS.length;
