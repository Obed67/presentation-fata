"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type Options = {
  total: number;
  wheelThreshold?: number;
};

export function useSlideNavigation({ total, wheelThreshold = 80 }: Options) {
  const [index, setIndexState] = useState(0);
  const [direction, setDirection] = useState(1);
  const prevIndex = useRef(0);
  const wheelAccum = useRef(0);
  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clamp = useCallback(
    (i: number) => Math.max(0, Math.min(i, total - 1)),
    [total],
  );

  useLayoutEffect(() => {
    if (index !== prevIndex.current) {
      setDirection(index > prevIndex.current ? 1 : -1);
      prevIndex.current = index;
    }
  }, [index]);

  const goTo = useCallback(
    (i: number) => {
      setIndexState(clamp(i));
    },
    [clamp],
  );

  const goNext = useCallback(() => {
    setIndexState((i) => clamp(i + 1));
  }, [clamp]);

  const goPrev = useCallback(() => {
    setIndexState((i) => clamp(i - 1));
  }, [clamp]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, goTo, total]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const dominant =
        Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (dominant === 0) return;
      wheelAccum.current += dominant;
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
      wheelTimeout.current = setTimeout(() => {
        wheelAccum.current = 0;
      }, 200);
      if (wheelAccum.current > wheelThreshold) {
        wheelAccum.current = 0;
        goNext();
      } else if (wheelAccum.current < -wheelThreshold) {
        wheelAccum.current = 0;
        goPrev();
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
    };
  }, [goNext, goPrev, wheelThreshold]);

  return {
    index,
    direction,
    setIndex: goTo,
    goNext,
    goPrev,
    total,
    isFirst: index === 0,
    isLast: index === total - 1,
  };
}
