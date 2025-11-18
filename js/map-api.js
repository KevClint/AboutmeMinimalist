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



// clock
function pad(n) {
  return String(n).padStart(2, "0");
}

function updateClock() {
  const now = new Date();

  let hr = now.getHours();
  let min = pad(now.getMinutes());
  let sec = pad(now.getSeconds());

  let ampm = hr >= 12 ? "PM" : "AM";

  hr = hr % 12;
  hr = hr ? hr : 12; // converts "0" to "12"
  hr = pad(hr);

  document.getElementById("clock").textContent = `${hr}:${min}:${sec} ${ampm}`;
}

setInterval(updateClock, 1000); // updates every second
updateClock(); // run immediately
