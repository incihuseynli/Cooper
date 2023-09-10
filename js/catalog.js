let currentPage = 1;
let limitProducts = 6;
let productsList = document.querySelectorAll(".products-list .card");
const list = document.querySelector(".products-list");

function fetchAndDisplayProducts(page) {
  const URL = `http://localhost:3000/products?_page=${page}&_limit=${limitProducts}`;

  fetch(URL)
    .then((response) => response.json())
    .then((products) => {
      list.innerHTML = ""; // Clear previous products
      products.forEach(({ id, image, title, price, onSale }) => {
        const tag = onSale ? '<span class="tag">sale</span>' : "";
        list.innerHTML += `
          <div class="card" data-id="${id}">
            <a href="card-product.html?id=${id}">
              <div class="card-image">
                <img src=${image} alt="" class="img" />
                ${tag}
                <div class="heart-icon">
                  <i class="far fa-heart"></i>
                </div>
              </div>
              <div class="card-info">
                <h3>${title}</h3>
                <span>${price}</span>
              </div>
            </a>
          </div>
        `;
        const productCards = document.querySelectorAll(".card");
        productCards.forEach((productCard) => {
          productCard.addEventListener("click", () => {
            const productId = productCard.getAttribute("data-id");

            const product = products.find((p) => p.id === productId);
          });
        });
      });
      getProductPages(page);
    });
}

fetchAndDisplayProducts(currentPage);

function showProducts() {
  // Starting value
  let start = limitProducts * (currentPage - 1);
  // Ending value
  let end = limitProducts * currentPage - 1;
  productsList.forEach((item, num) => {
    if (num >= start && num <= end) {
      item.style.display = "block";
      // console.log(item);
    } else {
      item.style.display = "none";
      // console.log("error");
    }
  });
  getProductPages(currentPage);
}
showProducts();

function getProductPages(currentPage) {
  let count = Math.ceil(productsList.length / limitProducts);
  document.querySelector(".page-numbers").innerHTML = "";
  if (currentPage != 1) {
    let prev = document.createElement("li");
    prev.classList.add("prevBtn");
    prev.setAttribute(
      "onclick",
      "changeProductsPage(" + (currentPage - 1) + ")"
    );
    document.querySelector(".page-numbers").appendChild(prev);
  } else {
    let prev = document.createElement("li");
    prev.classList.add("prevBtn");
    prev.setAttribute("disabled", "");
    document.querySelector(".page-numbers").appendChild(prev);
    prev.style.cursor = "not-allowed";
  }
  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.classList.add("page-number");
    newPage.innerText = i;
    if (i == currentPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changeProductsPage(" + i + ")");
    document.querySelector(".page-numbers").appendChild(newPage);
  }
  if (currentPage != count) {
    let next = document.createElement("li");
    next.classList.add("nextBtn");
    next.setAttribute(
      "onclick",
      "changeProductsPage(" + (currentPage + 1) + ")"
    );
    document.querySelector(".page-numbers").appendChild(next);
  } else {
    let next = document.createElement("li");
    next.classList.add("nextBtn");
    next.setAttribute("disabled", "");
    document.querySelector(".page-numbers").appendChild(next);
    next.style.cursor = "not-allowed";
  }
}

function changeProductsPage(i) {
  currentPage = i;
  showProducts();
}
// ============================= Searching Products in Catalog =================================================

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

// =============x=============== Searching Products in Catalog ==========x======================================
