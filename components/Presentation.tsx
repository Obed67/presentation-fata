"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { useRef } from "react";

import { SLIDE_COMPONENTS, SLIDE_COUNT } from "@/components/slides/deck";
import { SlideContainer } from "@/components/slides/SlideContainer";
import { Button } from "@/components/ui/button";
import { useFullscreen } from "@/hooks/useFullscreen";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";

export function Presentation() {
  const shellRef = useRef<HTMLDivElement>(null);
  const {
    index,
    direction,
    goNext,
    goPrev,
    total,
    isFirst,
    isLast,
  } = useSlideNavigation({ total: SLIDE_COUNT });
  const { isFullscreen, toggle } = useFullscreen(shellRef);

  const Current = SLIDE_COMPONENTS[index];
  const progress = ((index + 1) / total) * 100;

  return (
    <div
      ref={shellRef}
      className="relative flex min-h-dvh flex-col bg-background text-foreground"
    >
      <a
        href="#contenu-slide"
        className="absolute left-4 top-4 z-[60] -translate-y-[200%] rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-md transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Aller au contenu de la slide
      </a>

      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-1 bg-border"
        aria-hidden
      >
        <motion.div
          className="h-full bg-primary"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 24 }}
        />
      </div>

      <header className="flex shrink-0 items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <span className="rounded-md bg-accent px-2 py-1 font-mono text-sm font-semibold text-foreground">
          fata
        </span>
        <div className="flex items-center gap-2 sm:gap-3">
          <span
            className="tabular-nums text-sm text-muted-foreground"
            aria-live="polite"
            aria-atomic="true"
          >
            {index + 1} / {total}
          </span>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="shrink-0 rounded-full border-border"
            onClick={toggle}
            aria-pressed={isFullscreen}
            aria-label={
              isFullscreen ? "Quitter le plein écran" : "Mode plein écran"
            }
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </header>

      <main
        id="contenu-slide"
        tabIndex={-1}
        className="flex flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <SlideContainer slideKey={index} direction={direction}>
          <Current />
        </SlideContainer>
      </main>

      <footer className="flex shrink-0 items-center justify-center gap-4 px-4 py-6 sm:gap-6 sm:py-8">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full border-border transition-transform hover:scale-105 active:scale-95"
          disabled={isFirst}
          onClick={goPrev}
          aria-label="Slide précédente"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          variant="default"
          size="icon"
          className="h-12 w-12 rounded-full bg-primary shadow-md transition-transform hover:scale-105 active:scale-95"
          disabled={isLast}
          onClick={goNext}
          aria-label="Slide suivante"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </footer>
    </div>
  );
}
