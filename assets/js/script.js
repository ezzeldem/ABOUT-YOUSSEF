$(document).ready(function () {

  // opne-menu
  $('.nav-bar-section .menu-icon i').click(function () {
    $('.nav-bar-section .nav-ul').addClass('open-menuCLass');
    $('body').addClass('overlay-over');
  });
  $('.nav-bar-section .nav-ul .close-icon i').click(function () {
    $('.nav-bar-section .nav-ul').removeClass('open-menuCLass');
    $('body').removeClass('overlay-over');
  });



  // opne-searchBar
  $('.open-search-icon i').click(function () {
    $('.search-box').addClass('open-search');
  });
  $('.nav-bar-section .search-box .search-form form .closeSearch').click(function () {
    $('.search-box').removeClass('open-search');
  });


  // opne-products-box
  $('.products-section .products-container .products-box').click(function () {
    $(this).toggleClass('active').siblings().removeClass('active');
  });
  // scroll link

  $('.intro-section .intro-slider .intro-slider-item .scrol-icon').click(function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 900);
  });


  // opne-searchFooter
  $('.footer-section .buttom-link span').click(function () {
    $('.footer-form-box').addClass('active-box');
  });
  $('.footer-section .footer-form-box form i').click(function () {
    $('.footer-form-box').removeClass('active-box');
  });








  // intro-slider
  $('.intro-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    dots: true,
    arrows: false,
    fade: true
  });


  // pmacCourses-slider
  $('.pmacCourses-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    outhight: true,
    // prevArrow: "<div class='circle-arrow devo-left'></div>",
    // nextArrow: "<div class='circle-arrow devo-right'></div>",
    autoplaySpeed: 2000,
    autoplay: false,
    dots: false,
    arrows: true,
    responsive: [

      {
        breakpoint: 997,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 772,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  // tilt
  $('.js-tilt').tilt({
    maxTilt: 10,
    speed: 800,
    scale: 1,
    maxGlare: 10,
    perspective: 800,
  });
  // tilt
  $('.fastJs-tilt').tilt({
    maxTilt: 10,
    speed: 700,
    scale: 1,
    maxGlare: 10,
    perspective: 700,
  });



  // open popup
  $('.pop-up-opner').click(function (s) {
    s.stopPropagation();
    $("#" + $(this).data("opne")).addClass('open-poUp-box');
    $('body').addClass('overlay-over');
  });
  $('.pop-up-box .closePop-icon i').click(function () {
    $(".pop-up-box").removeClass('open-poUp-box');
    $('body').removeClass('overlay-over');

  });



  // AOS
  AOS.init();
});