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
