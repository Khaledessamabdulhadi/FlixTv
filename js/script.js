// Start Swiper Js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
// ENd Swiper Js 

// Start Owl Carousel
$(document).ready(function(){
  var one = $("#subscription")
  var two = $("#originals")
    one.owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    two.owlCarousel({
      ltr:true,
      loop:true,
      margin:30,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1200:{
              items:3
          }
      }
  });
  }); 
// End Owl Carousel 
// Start Owl Carousel
// End Owl Carousel 
