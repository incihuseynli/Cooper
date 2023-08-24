// Responsive Mobile Menu

const openedMenu = document.querySelector("#openedMenu");
const closedMenu = document.querySelector("#closedMenu");
const smNavMenu = document.querySelector(".navbar-sm");

openedMenu.addEventListener("click", () => {
  smNavMenu.style.transform = "translateY(0%)";
});
closedMenu.addEventListener("click", () => {
  smNavMenu.style.transform = "translateY(-200%)";
});

// Page Up Button
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

// Searching Products in Catalog

const searchProducts = () => {
  const searchProduct = document
    .querySelector("#searchInput")
    .value.toUpperCase();
  const products = document.querySelector(".products-list");
  const product = document.querySelectorAll(".card");
  const productName = products.getElementsByTagName("h3");

  for (let i = 0; i < productName.length; i++) {
    let checkMatch = product[i].getElementsByTagName("h3")[0];

    if (checkMatch) {
      let condition = checkMatch.textContent || checkMatch.innerHTML;
      if (condition.toUpperCase().indexOf(searchProduct) > -1) {
        product[i].style.display = "";
        // console.log(product[i]);
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

// Products Filter by Product Price
