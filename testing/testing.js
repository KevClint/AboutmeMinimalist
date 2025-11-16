const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

const moreBtn = document.getElementById("moreBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

const mobileMoreHeader = document.getElementById("mobileMoreHeader");
const mobileMoreItems = document.getElementById("mobileMoreItems");

/* HAMBURGER TOGGLE */
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

/* DESKTOP DROPDOWN */
moreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("active");
});

/* MOBILE MORE DROPDOWN */
mobileMoreHeader.addEventListener("click", () => {
  mobileMoreItems.classList.toggle("active");
});

/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", (e) => {
  if (!moreBtn.contains(e.target)) dropdownMenu.classList.remove("active");
});
