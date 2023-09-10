async function displayProductDetails() {
  const url = new URLSearchParams(document.location.search);
  let id = url.get("id");

  let res = await fetch(`http://localhost:3000/products/${id}`);
  let product = await res.json();
  // console.log(product);
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
displayProductDetails();
