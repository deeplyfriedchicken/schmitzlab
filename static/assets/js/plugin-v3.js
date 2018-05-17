(function ($) {
    'use strict'
    jQuery(document).ready(function () { 
	// init Isotope
	var $grid = $('.portfolio-grid').isotope({
	  itemSelector: '.portfolio-grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.portfolio-grid-item'
	  }
	});

	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	
	//for menu active class
	$('.portfolio-button button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	$('.great-team').owlCarousel({
		loop:true,
		margin:20,
		dots: false,
		autoplay: 3000,
		navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		responsiveClass:false,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:true
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			},
			1200:{
				items:3,
				nav:true,
				loop:true
			}
			
			
		}
	});
	$('.profil-v3').owlCarousel({
		dots: true,
		nav: false,
		autoplay: 3000,
		autoHeight: true,
		items: 1,
		dotsEach: 1,
		slideBy: 1, 
		mouseDrag: false,
		touchDrag: false,
		loop: true
	});
	 
	var a = 0;
		$(window).scroll(function() {

		  var oTop = $('#counter').offset().top - window.innerHeight;
		  if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
			  var $this = $(this),
				countTo = $this.attr('data-count');
			  $({
				countNum: $this.text()
			  }).animate({
				  countNum: countTo
				},

				{

				  duration: 6000,
				  easing: 'swing',
				  step: function() {
					$this.text(Math.floor(this.countNum));
				  },
				  complete: function() {
					$this.text(this.countNum);
					//alert('finished');
				  }

				});
			});
			a = 1;
		  }

		});
	
	
	});
	 
})(jQuery);