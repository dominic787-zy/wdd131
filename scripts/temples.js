// Footer: copyright year and last-modified date
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.textContent = isOpen ? "\u2716" : "\u2630"; // X when open, hamburger when closed
  menuButton.setAttribute("aria-expanded", String(isOpen));
});