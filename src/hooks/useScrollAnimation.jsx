"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          } else {
            setIsVisible(true);
            setHasAnimated(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { elementRef, isVisible };
}

export function useStaggeredAnimation(
  itemCount,
  baseDelay = 0,
  staggerDelay = 100,
) {
  const [visibleItems, setVisibleItems] = useState(
    new Array(itemCount).fill(false),
  );
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < itemCount; i++) {
            setTimeout(
              () => {
                setVisibleItems((prev) => {
                  const newState = [...prev];
                  newState[i] = true;
                  return newState;
                });
              },
              baseDelay + i * staggerDelay,
            );
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [itemCount, baseDelay, staggerDelay]);

  return { containerRef, visibleItems };
}
