const bannerSwiper = new Swiper(" .banner-swiper", {
  slidesPerView: 1,

  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
