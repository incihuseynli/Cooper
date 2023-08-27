
// ================= Responsive Mobile Menu ======================

const openedMenu = document.querySelector("#openedMenu");
const closedMenu = document.querySelector("#closedMenu");
const smNavMenu = document.querySelector(".navbar-sm");

openedMenu.addEventListener("click", () => {
  smNavMenu.style.transform = "translateY(0%)";
});
closedMenu.addEventListener("click", () => {
  smNavMenu.style.transform = "translateY(-200%)";
});



// =============== Page Up Button ==============================
const toTop = document.getElementById("toTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}
function pageUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// Products Filter by Product Price
