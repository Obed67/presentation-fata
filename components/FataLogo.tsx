import Image from "next/image";

import { cn } from "@/lib/utils";

type FataLogoProps = {
  className?: string;
  /** Pour le header ou la première slide */
  priority?: boolean;
};

export function FataLogo({ className, priority }: FataLogoProps) {
  return (
    <Image
      src="/logo/fata.jpeg"
      alt="fata"
      width={200}
      height={64}
      priority={priority}
      className={cn("h-8 w-auto object-contain object-left sm:h-9 md:h-10", className)}
    />
  );
}
