$(function () {
  $(".slider-main__list").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".silder-brands").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
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
