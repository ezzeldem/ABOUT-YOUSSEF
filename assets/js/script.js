$(document).ready(function(){


  // opne-searchBar
  $('.open-search-icon i').click(function(){
    $('.search-box').addClass('open-search');
  });
  $('.nav-bar-section .search-box .search-form form .closeSearch').click(function(){
    $('.search-box').removeClass('open-search');
  });


    // opne-products-box
    $('.products-section .products-container .products-box').click(function(){
      $(this).toggleClass('active').siblings().removeClass('active');
    });

    // intro-slider
    $('.intro-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay:true,
        dots: true, 
        arrows:false, 
        fade:true
      });
    $('.our-taem-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        outhight:true,
        prevArrow:"<div class='circle-arrow devo-left'></div>",
        nextArrow:"<div class='circle-arrow devo-right'></div>",
        autoplaySpeed: 2000,
        autoplay:false,
        centerMode: true,
        centerPadding: '0px',
        dots: true, 
        arrows:true, 
           responsive: [
           
            {
              breakpoint: 997,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true, 
                arrows:true, 
              }
            },
          ]
      });

      // tilt
      $('.js-tilt').tilt({
        maxTilt:10,
        speed:1000,
        scale:1,
        maxGlare:10,
        perspective:1000,
      });


});