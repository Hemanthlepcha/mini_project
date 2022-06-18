var header = document.getElementById("header");
var sbar = document.getElementById("sidebar");
var nav = document.getElementById("navbar");
var icon = document.getElementById("icon");

function toggle() {
  if (icon.className === "fa-solid fa-bars-staggered") {
    icon.className = "fa-solid fa-xmark";
    sbar.innerHTML = nav.innerHTML;
    sbar.style.display = "block";
  } else {
    icon.className = "fa-solid fa-bars-staggered";
    sbar.style.display = "none";
  }
}
