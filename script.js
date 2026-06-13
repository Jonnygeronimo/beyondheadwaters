const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const rivers = document.querySelectorAll(".river");
const form = document.querySelector(".join-form");
const status = document.querySelector(".form-status");

function toggleMenu(force) {
  const isOpen =
    typeof force === "boolean" ? force : !document.body.classList.contains("menu-open");

  document.body.classList.toggle("menu-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
  mobileMenu?.setAttribute("aria-hidden", String(!isOpen));
}

menuToggle?.addEventListener("click", () => toggleMenu());
mobileLinks.forEach((link) => link.addEventListener("click", () => toggleMenu(false)));

rivers.forEach((river) => {
  river.querySelector("button").addEventListener("click", () => {
    rivers.forEach((item) => item.classList.remove("active"));
    river.classList.add("active");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.querySelector("input").value.trim();

  if (!email) return;

  if (status) {
    status.textContent = "Schön, dass du dabei bist. Wir melden uns vom Wasser.";
  }
  form.reset();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
