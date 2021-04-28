$(function () {
  $(".product-details__link").on("click", function (e) {
    e.preventDefault();
    $(".product-details__link").removeClass("product-details__link--active");
    $(this).addClass("product-details__link--active");
    $(".product-details__tab").removeClass("product-details__tab--active");
    $($(this).attr("href")).addClass("product-details__tab--active");
  });
  if ($(".slider-main__list").length > 0) {
    $(".slider-main__list").slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
  if ($(".products-slider__list").length > 0) {
    $(".products-slider__list").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 2,
      prevArrow:
        '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><defs><style>.cls-1 {fill: #a3bbc8;fill-rule: evenodd;}</style></defs><path class="cls-1" d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)"/></svg></button>',
      nextArrow:
        '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><defs> <style>.cls-1 {fill: #a3bbc8;fill-rule: evenodd; } </style></defs><path class="cls-1" d="M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z" transform="translate(-1509 -1327)"/></svg></button>',
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
          },
        },

        {
          breakpoint: 548,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".photo-slide__min").length > 0) {
    $(".photo-slide__min").slick({
      asNavFor: ".photo-slide__big",
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            vertical: false,
          },
        },
      ],
    });
    $(".photo-slide__big").slick({
      asNavFor: ".photo-slide__min",
      draggable: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    });
  }
  if ($(".slider-brands__list").length > 0) {
    $(".slider-brands__list").slick({
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

  $(".product-list__btn").on("click", function () {
    $(".product-list__btn").removeClass("product-list__btn--active");
    $(this).addClass("product-list__btn--active");
  });
  $(".button-list").on("click", function () {
    $(".product-card").addClass("product-card--list");
    $(".product-list__container").addClass("product-list__container--list");
  });
  $(".button-grid").on("click", function () {
    $(".product-card").removeClass("product-card--list");
    $(".product-list__container").removeClass("product-list__container--list");
  });

  $(".menu__open").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu__open").toggleClass("menu__open--active");
    $(".menu__nav").toggleClass("menu__nav--active");
  });
  $(".product-list__filterback").on("click", function () {
    $(".product-list__filters").toggleClass("product-list__filters--active");
    $(".product-list__close").toggleClass("product-list__close--active");
  });
  $(".product-list__close").on("click", function () {
    $(".product-list__filters").removeClass("product-list__filters--active");
    $(".product-list__close").removeClass("product-list__close--active");
  });
  $(window).on("scroll", function () {
    if (document.documentElement.scrollTop > 200)
      $(".header__inner").addClass("header__inner--fixed");
    else if (document.documentElement.scrollTop < 20)
      $(".header__inner").removeClass("header__inner--fixed");
  });
  $(".price__input").ionRangeSlider({
    onStart: function (data) {
      $(".price__from").text(data.from + ".00");
      $(".price__to").text(data.to + ".00");
    },
    onChange: function (data) {
      $(".price__from").text(data.from + ".00");
      $(".price__to").text(data.to + ".00");
    },
  });
  $(".select-style,.product-details__input").styler();
  $(".resent__star").rateYo({
    starWidth: "12px",
    starHeight: "12px",
    spacing: "6px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    starSvg:
      '<svg  viewBox="0 0 576 512"><path  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
  });
  $(".product-card__star,.product-details__star").rateYo({
    starWidth: "19px",
    starHeight: "19px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "10px",
    starSvg:
      '<svg  viewBox="0 0 576 512"><path  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
  });
});
