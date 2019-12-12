$(document).ready(function() {
  $(".case-study__showcase").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    cssEase: "ease-in",
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function() {
  $(".reviews__stories").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    cssEase: "ease-in",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});

// Mobile menu

var mobileBtn = document.querySelector(".nav__btn");
var menu = document.querySelector(".mobile-nav");
var overlay = document.querySelector(".overlay");

mobileBtn.addEventListener("click", function() {
  if (menu.className !== "mobile-nav open") {
    menu.className += " open";
    overlay.className += " open";
  } else {
    menu.className = "mobile-nav";
    overlay.className = "overlay";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === overlay) {
    menu.className = "mobile-nav";
    overlay.className = "overlay";
  }
});

// Rotating cards for touch devices

var cardFront = document.querySelector(".card-2__side--front");
var cardBack = document.querySelector(".card-2__side--back");

cardFront.addEventListener("touchend", function()  {
  console.log('Touch');
  if (cardFront.className !== "card-2__side card-2__side--front rotate180") {
    cardFront.className += " rotate180";
  } else {
    cardFront.className += "card-2__side card-2__side--front";
  }
});

cardBack.addEventListener("touchend", function()  {
  if (cardFront.className === "card-2__side card-2__side--front rotate180") {
    cardBack.className += " rotate0";
  } else if (cardBack.className === "card-2__side card-2__side--back rotate0")  {
    cardBack.className = "card-2__side card-2__side--back";
    cardFront.className = "card-2__side card-2__side--front";
  }
});