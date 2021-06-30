//This is to Open Search Box 
$(".search .search-icon").click(function() {
	// $("body").addClass("overflow")
	$(".search .search-icon").removeClass("open-search")
	$(".search .search-icon").addClass("close-search")
	$(".search-box").addClass("search-open");
	$(".overlay-box").fadeIn(500);
});

$(".overlay-box").click(function() {
	$("body").removeClass("overflow")
	$(".search .search-icon").addClass("open-search")
	$(".search .search-icon").removeClass("close-search")
	$(".search-box").removeClass("search-open");
	$(".overlay-box").fadeOut(500);
});

$(document).ready(function() {
	new WOW().init();

	//phone size menu onclick
	if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeIn(300);
           $(".navgition").addClass("reset-left");
           $("body").addClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeOut(300);
           $(".navgition").removeClass("reset-left");
           $("body").removeClass("overflow");
       });

	   //dropdown inside menu
	   $('.cat-li.dropdown .cat-anchor').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		
		})
		
   	}
	
	//Main Slider Carousel
	$('.main-slider .owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		rtl: true,
		margin: 20,
		navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: true,
				loop: true
			},
			768: {
				items: 1,
				nav: false,
				dots: true,
				loop: true
			},
			992: {
				items: 1,
				nav: true,
				dots: true,
				loop: true
			},
			1200: {
				items: 1,
				nav: true,
				dots: true,
				loop: true
			}
		}
	});

	//product slider Carousel
	$('.product-slider .owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		margin: 10,
		rtl: true,
		navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: true,
				loop: true
			},
			480: {
				items: 2,
				nav: false,
				dots: true,
				loop: true
			},
			720: {
				items: 2,
				nav: false,
				dots: true,
				loop: true
			},
			1200: {
				items: 4,
				nav: true,
				dots: false,
				loop: true
			}
		}
	});

	////////////** footer transfer into accordion **//////////

	if ($(window).width() <= 767) {
		$(".nav-foot-header").addClass("footer-accordion");
		$(".nav-foot").addClass("footer-panel");
	}
	$('.footer-accordion').click(function () {
		var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
		$(".footer-accordion").not(this).removeClass("active");
		$(this).toggleClass("active");
		if ($(this).siblings().css('max-height') == '0px') {
			$(this).siblings().css('max-height', x);
			$(this).siblings('.nav-foot').css('padding-top', "15px");
		} else {
			$(this).siblings().css('max-height', '0');
			$(this).siblings('.nav-foot').css('padding-top', "0");
		}

		$(".footer-accordion").not(this).siblings().css('max-height', '0');
		$(".footer-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
	})


		/////////test/////////////////////

	if ( $(window).width() < 920 ) {
		$(".image-row").addClass("owl-carousel");
		$('.image-grid .owl-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 4000,
			margin: 10,
			rtl: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false,
					dots: true,
					loop: true
				},
				480: {
					items: 2,
					nav: false,
					dots: true,
					loop: true
				},
				720: {
					items: 2,
					nav: false,
					dots: true,
					loop: true
				}
			}
		});		
	} else {
		$(".image-row").removeClass("owl-Carousel");

	}


});









	
	
		
	
		

