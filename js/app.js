function initHeaderScripts() {
  // --- NOTIFICATION DROPDOWNS ---
  const notiH = document.getElementById("notificationsIcon");
  const dropdown4 = document.getElementById("dropdown-contents4");
  const dropdown0 = document.getElementById("dropdown-contents0");
  const dropdown1 = document.getElementById("dropdown-contents1");
  const dropdown2 = document.getElementById("dropdown-contents2");

  if (notiH) {
    notiH.addEventListener("click", function (e) {
      // hide all other dropdowns safely
      [dropdown0, dropdown1, dropdown2].forEach((d) => {
        if (d) d.style.display = "none";
      });

      if (!dropdown4) return;

      // toggle visibility safely
      const current = getComputedStyle(dropdown4).display;
      dropdown4.style.display = current === "none" ? "block" : "none";
    });
  }

  // --- DESKTOP DROPDOWN ---
  const moreBtn = document.getElementById("moreBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  moreBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu?.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!moreBtn?.contains(e.target)) {
      dropdownMenu?.classList.remove("active");
    }
  });

  // --- MOBILE NAVBAR ---
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  hamburger?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("active");
  });

  hamburger?.addEventListener("click", () => {
    mobileMenu?.classList.add("show");
  });

  closeMenu?.addEventListener("click", () => {
    mobileMenu?.classList.remove("show");
  });
}
