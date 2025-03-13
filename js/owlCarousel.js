$(document).ready(function () {
  $(".featured-brand-container").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000 /* Increases time between slides */,
    autoplayHoverPause: true /* Pauses on hover */,
    smartSpeed: 1000 /* Slower transition for smoothness */,
    animateOut: "fadeOut" /* Optional: fade effect */,
    animateIn: "fadeIn",
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 5 },
    },
  });
});
