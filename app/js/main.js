$(function () {
  if ($(".slider-main__list").length > 0) {
    $(".slider-main__list").slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
  if ($(".silder-brands").length > 0) {
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
  }
  if ($(".products__cards").length > 0) {
    var product1 = document.querySelector('[data-ref="product"]');
    var mixer = mixitup(product1, config);
  }
  if ($(".design").length > 0) {
    var design1 = document.querySelector('[data-ref="design"]');

    var mixer2 = mixitup(design1, config);
  }

  var config = {
    controls: {
      scope: "local",
    },
  };

  $(".menu__open").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu__open").toggleClass("menu__open--active");
    $(".menu__nav").toggleClass("menu__nav--active");
  });

  $(window).on("scroll", function () {
    if (document.documentElement.scrollTop > 200)
      $(".header__inner").addClass("header__inner--fixed");
    else if (document.documentElement.scrollTop < 20)
      $(".header__inner").removeClass("header__inner--fixed");
  });
});
