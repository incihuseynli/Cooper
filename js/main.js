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
// =====================================================================================================
// ALL PRODUCTS URL
const ALL_PRODUCTS_URL =
  "https://my-json-server.typicode.com/incihuseynli/json_example/products";

// Getting Products from JSON data
function fetchAndDisplayProducts(productLimit) {
  const PRODUCT_URL =
    `https://my-json-server.typicode.com/incihuseynli/json_example/products?_limit=${productLimit}`;

  const container = document.querySelector(".products-container");

  fetch(PRODUCT_URL)
    .then((response) => {
      return response.json();
    })
    .then((products) => {
      products.forEach(({image, title}) => {
        const data = `
          <div class="product">
            <a href="catalog.html">
              <img src=${image} alt="product1" />
              <h6 class="product-title">${title}</h6>
            </a>
          </div>
        `;
        container.innerHTML += data;
      });
    });
}


// ==============================================================================================

//  FOR PRODUCT SLIDERS
const productsSlider = document.querySelectorAll(".products-slider");

fetch(ALL_PRODUCTS_URL)
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    productsSlider.forEach((container) => {
      const wrapper = container.querySelector(".swiper-wrapper");

      products.forEach(({ image, title, price, onSale }) => {
        const tag = onSale ? '<span class="tag">sale</span>' : "";

        const data = `
          <div class="swiper-slide">
              <div class="card">
                <a href="catalog.html">
                  <div class="card-image">
                      <img
                          src=${image}
                          alt=""
                          class="img"
                      />
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
          </div>
        `;
        wrapper.innerHTML += data;
      });
    });
  });

//  FOR REVIEWS SLIDERS
const ALL_USERS_INFOS =
  "https://my-json-server.typicode.com/incihuseynli/json_example/users";
const reviewSlider = document.querySelectorAll(".reviews");

fetch(ALL_USERS_INFOS)
  .then((response) => {
    return response.json();
  })
  .then((review) => {
    reviewSlider.forEach((container) => {
      const wrapper = container.querySelector(".swiper-wrapper");

      review.forEach(({ name, surname, image, review, reviewDate }) => {
        const data = `
        <div class="swiper-slide">
        <div class="card">
          <div class="review-image">
            <img src=${image} />
          </div>
          <img src="./assets/icons/quote-icon.svg" class="quote" />
          <div class="review">
            <h4 class="username">${name} ${surname}</h4>
            <p class="content">
              ${review}
            </p>
            <span class="date">${reviewDate}</span>
          </div>
        </div>
      </div>
        `;
        wrapper.innerHTML += data;
      });
    });
  });
