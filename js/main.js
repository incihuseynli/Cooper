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

// ================================Getting Datas=====================================================================
// ALL PRODUCTS URL
const ALL_PRODUCTS_URL = "http://localhost:3000/products";

// Getting Products from JSON data
function fetchAndDisplayProducts(productLimit) {
  const PRODUCT_URL = `http://localhost:3000/products?_limit=${productLimit}`;

  const container = document.querySelector(".products-container");

  fetch(PRODUCT_URL)
    .then((response) => {
      return response.json();
    })
    .then((products) => {
      products.forEach((product) => {
        const data = `
          <div class="product" data-id="${product.id}">
            <a href="card-product.html?id=${product.id}">
              <img src=${product.image} alt="product1" />
              <h6 class="product-title">${product.title}</h6>
            </a>
          </div>
        `;
        container.innerHTML += data;
        const productItems = document.querySelectorAll(".product");

        productItems.forEach((productItem) => {
          productItem.addEventListener("click", () => {
            const productId = productItem.getAttribute("data-id");

            const product = products.find((p) => p.id === productId);

            // if (product) {
            //   displayProductDetails(product);
            // } else {
            //   console.error("Product not found:", productId);
            // }
          });
        });
      });
    });
}

function displayProductDetails(product) {
  const productName = document.querySelector(".product-name");
  const productDetails = document.getElementById("product-details");
  const productDesc = document.getElementById("product-desc");
  productName.innerHTML = `
  <a>${product.title}</a>`;
  productDetails.innerHTML = `
  <div class="product-images">
  <div class="small-images-container">
    <div class="image-icon">
      <i class="fa-solid fa-angle-up"></i>
    </div>
    <div class="small-images">
      <div class="small-image">
        <img src= alt="product1" />
      </div>
      <div class="small-image">
        <img src= alt="product1" />
      </div>
      <div class="small-image">
        <img src= alt="product1" />
      </div>
      <div class="small-image">
        <img src= alt="product1" />
      </div>
    </div>
    <div class="image-icon">
      <i class="fa-solid fa-angle-down"></i>
    </div>
  </div>
  <div class="product-image">
    <div class="card">
      <div class="card-image">
        <img
          src=${product.image}
          alt=""
          class="img"
        />
        <span class="tag">sale</span>
        <div class="heart-icon">
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="product-detail">
  <div class="product-condition">
    <h1 class="title">${product.title}</h1>
    <div class="status">
      <div class="inStock">
        <i class="fa-solid fa-check"></i>
        <h5>Stokda var</h5>
      </div>
      <div class="contains">
        <h5>Element:</h5>
        <span class="elementCode">${product.elementCode}</span>
      </div>
    </div>
  </div>
  <div class="product-desc">
    <h4 class="desc-title">Təsvir</h4>
    <p class="desc-text">${product.subDescription}</p>
  </div>
  <div class="product-priceBox">
    <div class="priceBox-top">
      <h4 class="price-title">Qiymət</h4>
      <span class="currentPrice">${product.currentPrice}</span>
      <span class="prevPrice"> ${product.prevPrice}</span>
    </div>
    <div class="priceBox-bottom">
      <div class="product-count">
        <i class="fa-solid fa-minus"></i>
        <input
          type="number"
          placeholder="1"
          value="1"
          name="amount"
          id="amount"
        />
        <i class="fa-solid fa-plus"></i>
      </div>
      <button class="btn"><a href="order_page.html">Satın al</a></button>
    </div>
  </div>
  <div class="share">
    <h4>Paylaşın</h4>
    <div class="socials">
      <i class="fa-brands fa-facebook-f fa-xl"></i>
      <i class="fa-brands fa-twitter fa-xl"></i>
      <i class="fa-brands fa-instagram fa-xl"></i>
    </div>
  </div>
</div>
  `;
  productDesc.innerHTML = `
  <h4 class="desc-title">Təsvir</h4>
      <p class="desc-text">
        ${product.fullDescription}
      </p>
      <p class="desc-text">
      ${product.fullDescription}
      </p>
  `;
}
// console.log(displayProductDetails());
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
const ALL_USERS_INFOS = "http://localhost:3000/users";
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
