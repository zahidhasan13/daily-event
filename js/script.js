"use strict";
// Nav Toggle
const navLinks = document.querySelector(".nav-links");
const navToggle = document.querySelector(".mobile-nav-icon");

navToggle.addEventListener("click", () => {
  if (navLinks.classList.contains("nav-open")) {
    navLinks.classList.remove("nav-open");
    document.querySelector("html").style.overflow = "visible";
  } else {
    navLinks.classList.add("nav-open");
    document.querySelector("html").style.overflow = "hidden";
  }
});

navLinks.addEventListener("click", () => {
  navLinks.classList.contains("nav-open") &&
    navLinks.classList.remove("nav-open");
  document.querySelector("html").style.overflow = "visible";
});
// Smooth behavior
navLinks.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const attr = e.target.getAttribute("href");
    document.querySelector(attr).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////
// Navbar Sticky
///////////////////////
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const navHeight = nav.getBoundingClientRect().height;

const sticky = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const heroObs = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0.9,
  rootMargin: `${navHeight}px`,
});

heroObs.observe(hero);
