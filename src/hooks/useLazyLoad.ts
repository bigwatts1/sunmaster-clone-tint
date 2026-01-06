import { useState, useEffect, useRef, RefObject } from "react";

export function useLazyLoad<T extends HTMLElement>(): [RefObject<T>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [elementRef, isVisible];
}
