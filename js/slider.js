// const firstSwiper = new Swiper('.first-slider', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     },
//   // autoplay: {
//   //       delay: 2500,
//   //       disableOnInteraction: false,
//   //     },


// });

// const secondSwiper = new Swiper('.second-slider', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     },
// });
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});

// const secondSwiper = new Swiper('.second-slider', {
//     direction: 'horizontal',
//     loop: true,
//     pagination: {
//         el: '.pagination-second',
//     },
// });