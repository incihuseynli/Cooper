let currentPage = 1;
let itemsPerPage = 3;
let startIndex = 1;
let endIndex = startIndex + itemsPerPage;

let productsList = document.querySelectorAll(".products-list .card");
const list = document.querySelector(".products-list");

function b(startIndex, endIndex) {
  const URL = `https://my-json-server.typicode.com/dbStoreForProjects/CooperData2/products`;

  console.log(startIndex,endIndex);
  axios.get(URL).then(({ data }) => {
    list.innerHTML = ""; // Clear previous products
    data.forEach(({ id, image, title, price, onSale }, index) => {
      if (index + 1 >= startIndex && index + 1 < endIndex ) {
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
      }
    });

    const element_count = data.length;
    const pages = Math.ceil(element_count / itemsPerPage);
    const pagesContainer = document.querySelector(".page-numbers");
    pagesContainer.innerHTML = "";
    for (let i = 1; i <= pages; i++) {
      pagesContainer.innerHTML += `<li onclick="a(${i})">${i}</li>`;
    }
  });
}

function a(i) {
  if (i === 1) {
    currentPage = 1;
    startIndex = 1;
    endIndex = startIndex + itemsPerPage;
    b(startIndex, endIndex);
  } else {
    currentPage = i;
    startIndex = currentPage * itemsPerPage - itemsPerPage + 1 ;
    endIndex = startIndex + itemsPerPage;
    b(startIndex, endIndex);
  }
}

b(startIndex, endIndex);

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
