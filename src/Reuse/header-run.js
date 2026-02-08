function initHeaderScripts() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  /* HAMBURGER TOGGLE */
  hamburger?.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  /* CLOSE MOBILE MENU */
  closeMenu?.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
}