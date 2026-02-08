// Load header
// fetch("/src/Reuse/header.html")
//   .then((res) => res.text())
//   .then((html) => {
//     document.getElementById("header").innerHTML = html;

//     initHeaderScripts();
//   });

// Load footer
fetch("/src/Reuse/footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
  });
