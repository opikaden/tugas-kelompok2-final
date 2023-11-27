// Nav Menu saat aktif
const navbarNav = document.querySelector(".navbar-nav");
// Saat Menu di klik
document.querySelector("#menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Search jika aktif
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik diluar elemen untuk menutup elemen
const sidebar = document.querySelector("#menu");
const search = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!sidebar.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
