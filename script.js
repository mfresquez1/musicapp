$(document).ready(function () {
  // side-btn
  $(".side-btn").click(function () {
    $(".nav-links").slideToggle(2000);
    $(".side-btn").toggleClass("change");
  });
  // nav-btn
  $(".nav-btn").click(function () {
    $(".side-nav").toggleClass("margin");
    $(".nav-btn").toggleClass("change");
    $(".main").toggleClass("max-width");
  });
  $(".songs-center").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 1000,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
