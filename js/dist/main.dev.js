"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function openModal($el) {
  $(".on-front-desc.active").removeClass("active");

  var _target = $el.attr('aria-label');

  $(".modal_content[aria-target='" + _target + "']:not(.active)").addClass("active");
}

$(".btn-more-info").click(function () {
  openModal($(this));
});
$(".btn-add-cart").click(function () {
  openModal($(this));
});
$(".btn-more-info-6").click(function () {
  openModal($(this));
});
$(".btn-add-cart-6").click(function () {
  openModal($(this));
});
$(".btn-more-info-7").click(function () {
  openModal($(this));
});
$(".btn-add-cart-7").click(function () {
  openModal($(this));
});
$(".navToggle").click(function () {
  $(this).toggleClass("open");
  $("nav").toggleClass("open");
});
$(".btn-next").click(function () {
  $(".swiper-pagination-bullet-active").next().click();
});
$(".btn-more-colse-modal").click(function () {
  $(".on-front-desc.active").removeClass("active");
});
$(".navToggle").click(function () {
  console.log($(this)[0]);

  if ($(this).hasClass('open')) {
    $(".menu-text").html("ЗАКРЫТЬ");
  } else {
    $(".menu-text").html("МЕНЮ");
  }
});
$(".menulist>li").click(function () {
  $("li.active").removeClass("active");
  $(this).addClass("active");
  $(".navToggle.open").click();
  $(".swiper-pagination-bullet")[$(this).index()].click();
}); // breakpoint where swiper will be destroyed
// and switches to a dual-column layout

var breakpoint = window.matchMedia('(min-width:480px)'); // keep track of swiper instances to destroy later

var mySwiper; //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

var breakpointChecker = function breakpointChecker() {
  // if larger viewport and multi-row layout needed
  if (breakpoint.matches === true) {
    // fire small viewport version of swiper
    return enableSwiper(); // else if a small viewport and single column layout needed
  } else if (breakpoint.matches === false) {
    // clean up old instances and inline styles when available
    if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing

    return;
  }
}; //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


var enableSwiper = function enableSwiper() {
  var _ref;

  mySwiper = new Swiper('.swiper-container', (_ref = {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }, _defineProperty(_ref, "slidesPerView", 'auto'), _defineProperty(_ref, "breakpoints", {
    480: {
      noSwiping: false
    }
  }), _ref));
}; //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes


breakpoint.addListener(breakpointChecker); // kickstart

breakpointChecker();