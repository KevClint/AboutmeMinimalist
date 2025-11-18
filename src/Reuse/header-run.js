function initHeaderScripts() {
  const home = document.getElementById("show-home");
  const homeNoti = document.getElementById("notification1");

  const moreBtn = document.getElementById("moreBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  const mobileMoreHeader = document.getElementById("mobileMoreHeader");
  const mobileMoreItems = document.getElementById("mobileMoreItems");

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  /* HAMBURGER TOGGLE */
  hamburger?.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  /* DESKTOP DROPDOWN */
  moreBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("active");
  });

  /* CLOSE WHEN CLICK OUTSIDE */
  document.addEventListener("click", (e) => {
    if (!moreBtn?.contains(e.target)) {
      dropdownMenu?.classList.remove("active");
    }
  });

  /* MOBILE NAV MENU */
  hamburger?.addEventListener("click", () => {
    mobileMenu.classList.add("show");
  });

  closeMenu?.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
}