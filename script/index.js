
  // Fade in elements on scroll
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-up").forEach(el => {
      el.classList.add("opacity-0", "translate-y-10", "transition", "duration-1000", "ease-out");
      observer.observe(el);
    }
);
  }
  );
