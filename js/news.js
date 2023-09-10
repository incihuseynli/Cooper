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
    news.forEach(({ id, title, date, content, image }) => {
      newsContainer.innerHTML += `
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
      
     
    });
    const newsCards = document.querySelectorAll(".newsList");
    newsCards.forEach((newsCard) => {
      newsCard.addEventListener("click", () => {
        const newsPostId = newsCard.getAttribute("data-id");

        const newsPost = news.find((p) => p.id === newsPostId);
      });
    });
  });

console.log();
