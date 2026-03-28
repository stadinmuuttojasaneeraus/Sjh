const contactForm = document.getElementById('contactForm');
const status = document.getElementById('contact-status');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Simulerad skickning
  status.textContent = "Kiitos! Viesti lähetetty.";
  status.style.color = "green";

  contactForm.reset();
});
