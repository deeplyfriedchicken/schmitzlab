(function ($) {
    'use strict'

    jQuery(document).ready(function () {
	
	// YouTube video click box
	$('.video-v').magnificPopup({ 
	  type: 'iframe'
	  // other options
	});  
	// init Isotope
	var $grid = $('.portfolio-mix-item').isotope({
		itemSelector: '.mix'
	}); 
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	}); 
	//for menu active class
	$('.button-group button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
	// feedbacks click 
	$('.feedbacks').owlCarousel({
		loop:true,
		navText:false,
		margin:10,
		autoplay: 3000,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		}
	});

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	new WOW().init();
	 
	});
	 
})(jQuery);