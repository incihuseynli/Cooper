// ============== Sliders =================================

 // Swiper Js codes
 
 var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      renderBullet: function (index, className) {
        if (index < 3) {
          return `<span class="${className}"></span>`;
        }
        return ''; //
      },
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  





