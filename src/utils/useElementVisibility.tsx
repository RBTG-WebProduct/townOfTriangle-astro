import { useEffect, useRef, useState } from "react";

function useElementVisibility(threshold = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    };

    if (ref.current) {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: threshold,
      });
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  return [ref, visible] as const;
}

export default useElementVisibility;
