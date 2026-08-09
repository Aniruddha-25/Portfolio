import { useEffect } from "react";
import { prioritizeSectionsUpTo } from "../lazy_section/sectionQueue";

export default function useNavigation() {
  useEffect(() => {
    // Navigation init (handles sidebar highlighting and smooth scrolling)
    const initNavigation = () => {
      const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".sidebar ul li a"));
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));

      if (!navLinks.length || !sections.length) {
        return () => {};
      }

      // Lazy sections may still be at their placeholder size when a jump
      // starts; force every section up to the target to mount and wait for
      // layout to settle so the computed scroll target reflects real
      // heights, not collapsed placeholders.
      const waitForStableLayout = (targetId: string) =>
        new Promise<void>((resolve) => {
          prioritizeSectionsUpTo(targetId);
          // Revealed sections still need a render pass to mount, so give
          // height changes a moment to happen rather than just one frame.
          const maxWaitMs = 800;
          const pollIntervalMs = 50;
          const stableChecksNeeded = 3;
          const start = Date.now();
          let lastHeight = -1;
          let stableChecks = 0;
          const poll = () => {
            const height = document.documentElement.scrollHeight;
            if (height === lastHeight) {
              stableChecks += 1;
            } else {
              stableChecks = 0;
              lastHeight = height;
            }
            if (stableChecks >= stableChecksNeeded || Date.now() - start >= maxWaitMs) {
              resolve();
              return;
            }
            setTimeout(poll, pollIntervalMs);
          };
          setTimeout(poll, pollIntervalMs);
        });

      // Re-queries the target after waiting: revealing a lazy section swaps
      // its placeholder <section> for the real component's own <section>,
      // so a node reference captured before the wait would go stale.
      const scrollToSection = async (targetSelector: string) => {
        await waitForStableLayout(targetSelector.replace(/^#/, ""));
        const targetSection = document.querySelector<HTMLElement>(targetSelector);
        if (!targetSection) return;
        const targetTop = targetSection.getBoundingClientRect().top + window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({
          top: Math.min(targetTop, maxScroll),
          behavior: "smooth",
        });
      };

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
          if (targetSection && targetSelector) {
            event.preventDefault();
            void scrollToSection(targetSelector);
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
          if (!targetSection || !targetSelector) return;
          event.preventDefault();
          void scrollToSection(targetSelector);
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