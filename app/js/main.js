$(function () {
  $(".slider-main__list").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".silder-brands").slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  });
  var product1 = document.querySelector('[data-ref="product"]');
  var design1 = document.querySelector('[data-ref="design"]');

  var config = {
    controls: {
      scope: "local",
    },
  };
  var mixer = mixitup(product1, config);
  var mixer2 = mixitup(design1, config);
});
