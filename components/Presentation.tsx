"use client";

import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { useRef } from "react";

import { FataLogo } from "@/components/FataLogo";
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

  return (
    <div
      ref={shellRef}
      className="relative flex h-dvh max-h-dvh flex-col overflow-hidden overscroll-none bg-background pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0px,env(safe-area-inset-left))] pr-[max(0px,env(safe-area-inset-right))] pt-[max(0px,env(safe-area-inset-top))] text-foreground"
    >
      <a
        href="#contenu-slide"
        className="absolute left-[max(1rem,env(safe-area-inset-left))] top-[max(1rem,env(safe-area-inset-top))] z-[60] -translate-y-[200%] rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-md transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Aller au contenu de la slide
      </a>

      <header className="flex min-h-12 min-w-0 shrink-0 flex-wrap items-center justify-between gap-2 px-3 py-2 sm:min-h-14 sm:gap-3 sm:px-5 sm:py-2.5 md:px-7">
        <div className="flex min-w-0 items-center">
          <FataLogo priority className="sm:h-9 md:h-10" />
        </div>
        <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          <span
            className="tabular-nums text-xs text-muted-foreground sm:text-sm"
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
        className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <SlideContainer slideKey={index} direction={direction}>
          <Current />
        </SlideContainer>
      </main>

      <footer className="flex min-h-[3.75rem] shrink-0 items-center justify-center gap-3 px-3 py-3 sm:min-h-16 sm:gap-5 sm:px-4 sm:py-4 md:py-5">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-11 w-11 touch-manipulation rounded-full border-border transition-transform hover:scale-105 active:scale-95 sm:h-12 sm:w-12"
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
          className="h-11 w-11 touch-manipulation rounded-full bg-primary shadow-md transition-transform hover:scale-105 active:scale-95 sm:h-12 sm:w-12"
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
