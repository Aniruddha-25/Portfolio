import { useEffect } from "react";

function useAnimation() {
  useEffect(() => {
    const observeCollection = (
      selector: string,
      options: IntersectionObserverInit = { threshold: 0.2 }
    ) => {
      if (!("IntersectionObserver" in window)) return;

      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      }, options);

      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };

    const cleanups: Array<(() => void) | undefined> = [];

    // 🔥 Add all animated elements here
    cleanups.push(observeCollection(".scroll-animation"));
    cleanups.push(observeCollection(".skill"));
    cleanups.push(observeCollection(".experience-card"));
    cleanups.push(observeCollection(".education-card"));
    cleanups.push(observeCollection(".certification-card"));
    cleanups.push(observeCollection(".PersonalPhoto", { threshold: 0.5 }));

    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
    };
  }, []);
}

export default useAnimation;