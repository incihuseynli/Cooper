let currentPage = 1;
let newsList = document.querySelectorAll(".news .card");
let limitNewsPosts = 4;

// console.log(newsList)



// Getting DATAS from db.json

const ALL_NEWS_URL = "http://localhost:3000/news";

const newsContainer = document.querySelector(".news");

fetch(ALL_NEWS_URL)
  .then((response) => {
    return response.json();
  })
  .then((news) => {
    news.forEach(({id, title, date, content, image }) => {
      const data = `
                <div class="newsList card" id="news-card" data-id="${id}">
                <div class="card-image">
                <img src=${image} alt="post1" class="img" />
                <h5>${title}</h5>
                <div class="date-of-post">
                    <p>${date}</p>
                </div>
                </div>
                <div class="card-info">
                <p>${content}</p>
                <div class="read-more">
                    <a href="news_post.html?id=${id}">Daha ətraflı oxuyun</a>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                </div>
            </div>

            `;
            newsContainer.innerHTML += data;
    });
  });




function showNews() {
  // Starting value
  let start = limitNewsPosts * (currentPage - 1);
  // Ending value
  let end = limitNewsPosts * currentPage - 1;
  newsList.forEach((item, num) => {
    if (num >= start && num <= end) {
      item.style.display = "flex";
      // console.log(item)
    } else {
      item.style.display = "none";
    }
  });
  getNewsPage();
}
showNews();

function getNewsPage() {
  let count = Math.ceil(newsList.length / limitNewsPosts);
  document.querySelector(".page-numbers").innerHTML = "";
  if (currentPage != 1) {
    let prev = document.createElement("li");
    prev.classList.add("prevBtn");
    prev.setAttribute("onclick", "changeNewsPage(" + (currentPage - 1) + ")");
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
    newPage.setAttribute("onclick", "changeNewsPage(" + i + ")");
    document.querySelector(".page-numbers").appendChild(newPage);
  }
  if (currentPage != count) {
    let next = document.createElement("li");
    next.classList.add("nextBtn");
    next.setAttribute("onclick", "changeNewsPage(" + (currentPage + 1) + ")");
    document.querySelector(".page-numbers").appendChild(next);
  } else {
    let next = document.createElement("li");
    next.classList.add("nextBtn");
    next.setAttribute("disabled", "");
    document.querySelector(".page-numbers").appendChild(next);
    next.style.cursor = "not-allowed";
  }
}

function changeNewsPage(i) {
  currentPage = i;
  showNews();
}