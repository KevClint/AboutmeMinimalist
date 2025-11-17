// Safe DOM lookups for notification dropdowns
const notiH = document.getElementById("notificationsIcon");
const dropdown4 = document.getElementById("dropdown-contents4");
const dropdown0 = document.getElementById("dropdown-contents0");
const dropdown1 = document.getElementById("dropdown-contents1");
const dropdown2 = document.getElementById("dropdown-contents2");

// Guard against missing elements to avoid runtime errors
if (notiH) {
  notiH.addEventListener("click", function (e) {
    // hide other dropdowns if they exist
    [dropdown0, dropdown1, dropdown2].forEach((d) => {
      if (d) d.style.display = "none";
    });

    if (!dropdown4) return;

    // toggle dropdown4 visibility reliably
    const current = getComputedStyle(dropdown4).display;
    dropdown4.style.display = current === "none" ? "block" : "none";
  });
}

// dropdown
const home = document.getElementById("show-home");
const homeNoti = document.getElementById("notification1");

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


/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", (e) => {
  if (!moreBtn.contains(e.target)) dropdownMenu.classList.remove("active");
});




// mobile view navbar
const menuToggle = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

