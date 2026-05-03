
document.addEventListener("DOMContentLoaded", () => {
  // Active nav on scroll
  const links = [...document.querySelectorAll("[data-nav]")];
  const sections = links
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = "#" + entry.target.id;
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => obs.observe(sec));
});
