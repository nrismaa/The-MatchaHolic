// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu diklik
document.querySelector(".navbar-extra #menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


// Klik di luar sidebar untuk menghilangkan navbar
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
 