const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active',
  },

  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
