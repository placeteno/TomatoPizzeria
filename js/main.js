const header = document.querySelector("header");
const navMenu = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const openNavBtn = document.querySelector('ion-icon[name="menu-outline"]');
const closeNavBtn = document.querySelector('ion-icon[name="close-outline"]');
const heroSection = document.querySelector(".hero-section");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-open");
    openNavBtn.style.display = "block";
  });
});

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
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

openNavBtn.addEventListener("click", () => {
  navMenu.classList.add("nav-open");
  openNavBtn.style.display = "none";
});

closeNavBtn.addEventListener("click", () => {
  navMenu.classList.remove("nav-open");
  openNavBtn.style.display = "block";
});

document.querySelector("main").addEventListener("click", () => {
  if (navMenu.classList.contains("nav-open")) {
    navMenu.classList.remove("nav-open");
    openNavBtn.style.display = "block";
  }
});
