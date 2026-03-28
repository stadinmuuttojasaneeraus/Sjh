function initMap() {
  const location = { lat: 60.1699, lng: 24.9384 }; // Helsingfors exempel
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  new google.maps.Marker({ position: location, map: map });
}
const form = document.querySelector('form');
const statusDiv = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      statusDiv.textContent = "Tack! Meddelandet skickades.";
      form.reset();
    } else {
      response.json().then(data => {
        statusDiv.textContent = "Fel: Meddelandet kunde inte skickas.";
      })
    }
  }).catch(error => {
    statusDiv.textContent = "Fel: Meddelandet kunde inte skickas.";
  });
});
