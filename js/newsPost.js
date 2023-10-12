async function displayNewsDetails() {
  const NEWS_URL = new URLSearchParams(document.location.search);
  let id = NEWS_URL.get("id");

  // let res = await fetch(`http://localhost:3000/news/${id}`);
  let res = await fetch(
    `https://my-json-server.typicode.com/incihuseynli/CooperData3/news/${id}`
  );
  let newsPost = await res.json();
  // console.log(newsPost);
  const newsPosts = document.querySelector(".news-post");
  const headingPost = document.querySelector(".heading.post");
  const newsPostTitle = document.querySelector(".newsPostTitle");
  newsPostTitle.innerHTML = `<a>${newsPost.title}</a>`;
  headingPost.innerHTML = `
    <h1 class="title">${newsPost.title}</h1>
        <div class="share">
          <h4>Paylaşın</h4>
          <div class="socials">
            <i class="fa-brands fa-facebook-f fa-xl"></i>
            <i class="fa-brands fa-twitter fa-xl"></i>
            <i class="fa-brands fa-instagram fa-xl"></i>
          </div>
        </div>
    `;
  newsPosts.innerHTML = `
    <div class="post">
    <div class="news-card">
      <div class="card-image">
        <img src=${newsPost.image} alt="post1" class="img" />
        <div class="date-of-post">
          <p>${newsPost.date}</p>
        </div>
      </div>
      <div class="card-info">
        <div>
          <p>${newsPost.content}</p>
          <p>${newsPost.content}</p>
        </div>
        <div>
          <h4 class="text-title">${newsPost.subContents[0].title}</h4>
          <p>${newsPost.subContents[0].content}</p>
          <ul>
            <li>${newsPost.subContents[0].list[0]}</li>
            <li>${newsPost.subContents[0].list[1]}</li>
            <li>
              ${newsPost.subContents[0].list[2]}
            </li>
            <li>${newsPost.subContents[0].list[3]}</li>
            <li>${newsPost.subContents[0].list[4]}</li>
          </ul>
          <p>${newsPost.subContents[0].info}</p>
        </div>
        <div>
          <h4 class="text-title">${newsPost.subContents[1].title}</h4>
          <p>${newsPost.subContents[1].content}</p>
          <ul>
            <li>${newsPost.subContents[1].list[0]}</li>
            <li>${newsPost.subContents[1].list[1]}</li>
            <li>${newsPost.subContents[1].list[2]}</li>
            <li>${newsPost.subContents[1].list[3]}</li>
          </ul>
          <p>
          ${newsPost.subContents[1].info}
          </p>
        </div>
        <div>
          <h4 class="text-title">${newsPost.subContents[2].title}</h4>
          <p>${newsPost.subContents[2].content}</p>
          <ul>
          <li>${newsPost.subContents[2].list[0]}</li>
          <li>${newsPost.subContents[2].list[1]}</li>
          <li>${newsPost.subContents[2].list[2]}</li>
          <li>${newsPost.subContents[2].list[3]}</li>
          </ul>
          <p>${newsPost.subContents[2].info}
          </p>
        </div>
        <div>
          <h4 class="text-title">${newsPost.guidesTitle}</h4>
          <p>${newsPost.guidesInfo}</p>
        </div>
      </div>
    </div>
    
    <div class="post-bottom">
      <div class="post-pagination">
        <div class="left">
          <i class="fa-solid fa-chevron-left"></i>
          <h5>${newsPost.title}</h5>
        </div>
        <div class="line"></div>
        <div class="right">
          <h5>${newsPost.title}</h5>
          <i class="fa-solid fa-chevron-right"></i>
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
  </div>
    `;
}
displayNewsDetails();
