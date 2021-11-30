$(document).ready(function() {

/*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset - 30
    }, 500);
  });
/*=========/smooth scroll=============*/

/*===============Mobile menu======================*/
	$(".header__burger").on("click", function(event) {
		event.preventDefault();
		$(".mobile-menu").addClass("show");
		$('body').addClass("hidden");
	});
	$(".mobile-menu__close").on("click", function(event) {
		event.preventDefault();
		$(".mobile-menu").removeClass("show");
		$('body').removeClass("hidden");
	});
/*==============/Mobile menu=================*/

/*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(".mobile-menu").removeClass("show");
		$('body').removeClass("hidden");
 
    $("html, body").animate ({
      scrollTop: blockOffset 
    }, 500);
  });
/*=========/smooth scroll=============*/

	/*======Slider-about=============*/
	$('.about__slider').slick({
  		infinite: true,
  		fade: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		prevArrow: $('.about-arrow_prev'),
		nextArrow: $('.about-arrow_next'),
	});
	/*=============/slider-about==============*/



});