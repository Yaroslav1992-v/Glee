$(function () {
  $(".slider__list").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  var mixer = mixitup(".products__cards");
});
