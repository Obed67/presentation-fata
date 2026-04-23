import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SlideLayoutProps = {
  children: ReactNode;
  className?: string;
  /** Centrage vertical principal du slide */
  centered?: boolean;
};

export function SlideLayout({
  children,
  className,
  centered = true,
}: SlideLayoutProps) {
  return (
    <div
      className={cn(
        "mx-auto flex min-h-[calc(100dvh-5rem)] w-full max-w-5xl flex-col px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24",
        centered && "justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
