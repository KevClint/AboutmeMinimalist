const lat = 7.855166;
const lon = 123.435611;

// Create map
const map = L.map("map").setView([lat, lon], 15);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap"
}).addTo(map);

// Add marker to your location
L.marker([lat, lon]).addTo(map).bindPopup("My Location").openPopup();



