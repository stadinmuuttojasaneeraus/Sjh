// Hitta toggle-knappen och menyn
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav ul');

// När man klickar på ☰-knappen
toggle.addEventListener('click', () => {
  nav.classList.toggle('active'); // visar eller döljer menyn
});
