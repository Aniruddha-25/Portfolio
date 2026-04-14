import { useEffect } from "react";

export default function useNavigation() {
  useEffect(() => {
    // Navigation init (handles sidebar highlighting and smooth scrolling)
    const initNavigation = () => {
      const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".sidebar ul li a"));
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));

      if (!navLinks.length || !sections.length) {
        return () => {};
      }

      const clearActive = () => navLinks.forEach((link) => link.classList.remove("active"));

      const setActiveLink = (hash?: string | null) => {
        if (!hash) return;
        clearActive();
        const activeLink = navLinks.find((link) => link.getAttribute("href") === hash);
        if (activeLink) activeLink.classList.add("active");
      };

      const updateActiveOnScroll = () => {
        let currentSection = sections[0]?.id || "";
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        // If at (or near) bottom, force last section active
        if (Math.abs(scrollPosition - pageHeight) < 2) {
          currentSection = sections[sections.length - 1]?.id || currentSection;
        } else {
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
              currentSection = section.id;
            }
          });
        }
        setActiveLink(`#${currentSection}`);
      };

      window.addEventListener("scroll", updateActiveOnScroll);

      const navLinkHandlers: Array<() => void> = [];
      navLinks.forEach((link) => {
        const handler = (event: Event) => {
          const targetSelector = link.getAttribute("href");
          const targetSection = targetSelector ? document.querySelector<HTMLElement>(targetSelector) : null;
          if (targetSection) {
            event.preventDefault();
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          setActiveLink(targetSelector);
        };

        link.addEventListener("click", handler);
        // store remover
        navLinkHandlers.push(() => link.removeEventListener("click", handler));
      });

      const anchorHandlers: Array<() => void> = [];
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
        if (anchor.closest(".sidebar")) return;
        const handler = (event: Event) => {
          const targetSelector = anchor.getAttribute("href");
          const targetSection = targetSelector ? document.querySelector<HTMLElement>(targetSelector) : null;
          if (!targetSection) return;
          event.preventDefault();
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveLink(targetSelector);
        };

        anchor.addEventListener("click", handler);
        anchorHandlers.push(() => anchor.removeEventListener("click", handler));
      });

      const initialHash = window.location.hash || "#home";
      setActiveLink(initialHash);
      updateActiveOnScroll();

      // cleanup
      return () => {
        window.removeEventListener("scroll", updateActiveOnScroll);
        navLinkHandlers.forEach((remove) => remove());
        anchorHandlers.forEach((remove) => remove());
      };
    };

    const cleanup = initNavigation();
    return cleanup;
  }, []);
}