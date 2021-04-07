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
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 548,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
  $(".menu__open").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu__open").toggleClass("menu__open--active");
  });

  $(window).on("scroll", function () {
    if (document.documentElement.scrollTop > 200)
      $(".header__inner").addClass("header__inner--fixed");
    else if (document.documentElement.scrollTop == 0)
      $(".header__inner").removeClass("header__inner--fixed");
  });
});
