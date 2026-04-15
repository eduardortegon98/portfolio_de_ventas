import { useEffect, useRef, useState } from "react";

export default function useInViewOnce(options = {}) {
  const {
    root = null,
    rootMargin = "250px 0px",
    threshold = 0.01,
  } = options;

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [inView, root, rootMargin, threshold]);

  return { ref, inView };
}