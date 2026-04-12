// main.js — global scripts

const yearEl = document.getElementById("footer-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

(function () {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.remove("bg-transparent");
      nav.classList.add("bg-page/95", "border-b", "border-white/10");
    } else {
      nav.classList.add("bg-transparent");
      nav.classList.remove("bg-page/95", "border-b", "border-white/10");
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/** Hero background parallax (matches Figma / motion: ~0% → 30% translateY while hero scrolls through) */
(function () {
  const hero = document.getElementById("hero");
  const layer = document.getElementById("hero-parallax-bg");
  if (!hero || !layer) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let ticking = false;

  function update() {
    ticking = false;
    if (reduceMotion.matches) {
      layer.style.transform = "";
      return;
    }
    const h = hero.offsetHeight || 1;
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, -rect.top / h));
    const yPercent = progress * 30;
    layer.style.transform = "translate3d(0, " + yPercent + "%, 0)";
  }

  function onScrollOrResize() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  update();
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });
  reduceMotion.addEventListener("change", update);
})();

(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
