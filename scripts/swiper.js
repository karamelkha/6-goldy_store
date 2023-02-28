var swiper = new Swiper(".promo__swiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".promo__swiper-button-next",
    prevEl: ".promo__swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
});
