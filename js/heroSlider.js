/**
 * * Getting datas to Hero Swiper
 */

// const SLIDER_URL = "http://localhost:3000/sliderProducts";
const SLIDER_URL = "https://my-json-server.typicode.com/dbStoreForProjects/CooperData1/sliderProducts";

const swiperWrapper = document.querySelector(".swiper-wrapper");

const getSliderData = () => {
  fetch(SLIDER_URL).then((response) => {
    return response.json();
  }).then((data) => {
    data.forEach(({id,tag, name, price,lgHeroImg, mdHeroImg, smHeroImg }) => {
      swiperWrapper.innerHTML += `
      <div class="swiper-slide">
      <div class="hero">
        <div class="hero-info">
          <h1>${tag}</h1>
          <div class="line"></div>
          <p>${name}</p>
          <div class="hero-price">
            <h5>Qiymət:</h5>
            <span class="price-tag">${price}</span>
          </div>
          <button class="btn">
            <a href="order_page.html">Satın al</a>
          </button>
        </div>
        <div class="hero-images">
          <img src=${lgHeroImg} class="lgHeroImg" />
          <img src=${mdHeroImg} class="mdHeroImg" />
          <img src=${smHeroImg} class="smHeroImg" />
        </div>
      </div>
    </div>
      `;
    });
  })
}
getSliderData();