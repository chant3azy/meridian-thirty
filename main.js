(function () {
  const header = document.getElementById("header");
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 48);
  }

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function openNav() {
    if (!nav || !toggle) return;
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      if (isOpen) closeNav();
      else openNav();
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
