/* ============================================================
   NAV SCROLL EFFECT
   Adds a background/shadow to the nav once the page scrolls past
   the hero, so it stays legible over the illustration.
   ============================================================ */
const nav = document.querySelector("#siteNav");

function handleNavScroll() {
  const scrolled = window.scrollY > 40;
  nav.classList.toggle("scrolled", scrolled);
}

window.addEventListener("scroll", handleNavScroll);
handleNavScroll();

/* SCROLL-REVEAL LOGIC  */
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target); // animate in once only
      }
    });
  },
  {
    threshold: 0.2,       // fire when 20% of the card is visible
    rootMargin: "0px 0px -40px 0px"
  }
);

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.12}s`;
  revealObserver.observe(el);
});