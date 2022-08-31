const header = document.querySelector("header");
const heroSection = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      header.classList.add("header-background");
    } else if (ent.isIntersecting) {
      header.classList.remove("header-background");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.95,
  }
);

obs.observe(heroSection);
