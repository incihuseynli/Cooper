
// const list = document.querySelector(".products-list");
// //  FOR PRODUCT LIST
// // const URL = `https://my-json-server.typicode.com/incihuseynli/json_example/products?_page=${limitProducts}`;

// fetch(ALL_PRODUCTS_URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((products) => {
//       products.forEach(({ image, title, price, onSale }) => {
//         const tag = onSale ? '<span class="tag">sale</span>' : "";
//         const data = `
//               <div class="card">
//                 <a href="catalog.html">
//                   <div class="card-image">
//                       <img
//                           src=${image}
//                           alt=""
//                           class="img"
//                       />
//                       ${tag}
//                       <div class="heart-icon">
//                          <i class="far fa-heart"></i>
//                       </div>
//                   </div>
//                   <div class="card-info">
//                       <h3>${title}</h3>
//                       <span>${price}</span>
//                   </div>
//                 </a>
//               </div>
//         `;
//         list.innerHTML += data;
//       });
//     });

// // Pagination
// let currentPage = 1;
// let limitProducts = 6;
// let productsList = document.querySelectorAll(".products-list .card");

// function showProducts() {
//   // Starting value
//   let start = limitProducts * (currentPage - 1);
//   // Ending value
//   let end = limitProducts * currentPage - 1;
//   productsList.forEach((item, num) => {
//     if (num >= start && num <= end) {
//       item.style.display = "block";
//       // console.log(item);
//     } else {
//       item.style.display = "none";
//     }
//   });
//   getProductPages();
// }
// showProducts();

// function getProductPages() {
//   let count = Math.ceil(productsList.length / limitProducts);
//   document.querySelector(".page-numbers").innerHTML = "";
//   if (currentPage != 1) {
//     let prev = document.createElement("li");
//     prev.classList.add("prevBtn");
//     prev.setAttribute(
//       "onclick",
//       "changeProductsPage(" + (currentPage - 1) + ")"
//     );
//     document.querySelector(".page-numbers").appendChild(prev);
//   } else {
//     let prev = document.createElement("li");
//     prev.classList.add("prevBtn");
//     prev.setAttribute("disabled", "");
//     document.querySelector(".page-numbers").appendChild(prev);
//     prev.style.cursor = "not-allowed";
//   }
//   for (i = 1; i <= count; i++) {
//     let newPage = document.createElement("li");
//     newPage.classList.add("page-number");
//     newPage.innerText = i;
//     if (i == currentPage) {
//       newPage.classList.add("active");
//     }
//     newPage.setAttribute("onclick", "changeProductsPage(" + i + ")");
//     document.querySelector(".page-numbers").appendChild(newPage);
//   }
//   if (currentPage != count) {
//     let next = document.createElement("li");
//     next.classList.add("nextBtn");
//     next.setAttribute(
//       "onclick",
//       "changeProductsPage(" + (currentPage + 1) + ")"
//     );
//     document.querySelector(".page-numbers").appendChild(next);
//   } else {
//     let next = document.createElement("li");
//     next.classList.add("nextBtn");
//     next.setAttribute("disabled", "");
//     document.querySelector(".page-numbers").appendChild(next);
//     next.style.cursor = "not-allowed";
//   }
// }

// function changeProductsPage(i) {
//   currentPage = i;
//   showProducts();
// }


let currentPage = 1;
let limitProducts = 6;
let productsList = document.querySelectorAll(".products-list .card");
const list = document.querySelector(".products-list");

function fetchAndDisplayProducts(page) {
  const URL = `https://my-json-server.typicode.com/incihuseynli/json_example/products?_page=${page}&_limit=${limitProducts}`;
  
  fetch(URL)
    .then((response) => response.json())
    .then((products) => {
      list.innerHTML = ""; // Clear previous products
      products.forEach(({ image, title, price, onSale }) => {
        const tag = onSale ? '<span class="tag">sale</span>' : "";
        const data = `
          <div class="card">
            <a href="catalog.html">
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
        list.innerHTML += data;
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