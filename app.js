const notiH = document.getElementById("notificationsIcon");
const dropdown4 = document.getElementById("dropdown-contents4");

notiH.onclick = function () {
  dropdown0.style.display = "none";
  dropdown1.style.display = "none";
  dropdown2.style.display = "none";

  if (dropdown4.style.display === "none") {
    dropdown4.style.display = "block";
  } else {
    dropdown4.style.display = "none";
  }
};
