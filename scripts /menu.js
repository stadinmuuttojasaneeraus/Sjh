const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const accordionBtns = document.querySelectorAll(".accordion-btn");

// Öppna/stäng mobilmenyn
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Accordion funktion för undermenyer på mobil
accordionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const submenu = btn.nextElementSibling;
    submenu.classList.toggle("open");
  });
});
