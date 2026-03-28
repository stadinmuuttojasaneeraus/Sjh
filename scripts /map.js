function initMap() {
  const location = { lat: 60.1699, lng: 24.9384 }; // Helsingfors exempel
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  new google.maps.Marker({ position: location, map: map });
}
