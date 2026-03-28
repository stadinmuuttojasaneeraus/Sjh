const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
