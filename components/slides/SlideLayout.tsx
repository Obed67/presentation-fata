import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SlideLayoutProps = {
  children: ReactNode;
  className?: string;
  /** Centrage vertical dans la zone slide */
  centered?: boolean;
  /** Alignement horizontal du bloc de contenu */
  align?: "start" | "center";
  /** Largeur max du bloc (la colonne reste centrée sur la page) */
  contentMax?: "sm" | "md" | "lg" | "xl" | "2xl" | "wide";
};

const contentMaxClass = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
  xl: "max-w-4xl",
  "2xl": "max-w-5xl",
  wide: "max-w-6xl",
} as const;

export function SlideLayout({
  children,
  className,
  centered = true,
  align = "start",
  contentMax = "2xl",
}: SlideLayoutProps) {
  return (
    <div
      className={cn(
        "mx-auto flex min-h-0 min-w-0 w-full max-w-6xl flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-contain px-3 py-4 sm:px-5 sm:py-5 md:px-8 md:py-6 lg:px-12 lg:py-7",
        centered && "justify-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col gap-4 md:gap-5",
          contentMaxClass[contentMax],
          "mx-auto",
          align === "center" && "items-center text-center",
          align === "start" && "items-start text-left",
        )}
      >
        {children}
      </div>
    </div>
  );
}
