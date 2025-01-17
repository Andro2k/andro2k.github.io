// Selección de elementos
const menuIcon = document.querySelector("#mobile-menu-icon");
const mobileNavbar = document.querySelector("#mobile-navbar");
const navLinks = document.querySelectorAll(".mobile-navbar li a");

// Alternar visibilidad del menú móvil
menuIcon.addEventListener("click", () => {
  mobileNavbar.classList.toggle("active");
});

// Cerrar el menú móvil al hacer clic en un enlace
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNavbar.classList.remove("active");
  });
});
