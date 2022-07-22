import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

// Now you can use Swiper
const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation, Pagination, Scrollbar, Autoplay],
  navigation: {
    nextEl: '.slider__button',
  },
  breakpoints: {
    320: { slidesPerView: 1, slidesPerGroup: 1 },
    768: { slidesPerView: 2, spaceBetween: 15, slidesPerGroup: 2 },
    1200: { slidesPerView: 3, spaceBetween: 25, slidesPerGroup: 3 },
  },

  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
