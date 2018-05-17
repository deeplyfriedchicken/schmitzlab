(function ($) {
    'use strict'; 
    jQuery(document).ready(function () { 
	//slicknav
	$('#menu').slicknav();
	// YouTube video click box
	$('.video-v').magnificPopup({ 
	  type: 'iframe'
	  // other options
	});
	// init Isotope
	var $grid = $('.portfolio-v1-grid').isotope({
	  itemSelector: '.portfolio-grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1
	  }
	});
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});	 
	 
	
	$('.great-team').owlCarousel({
		stagePadding: 50,
		loop:true,
		margin:10, 
		autoplay: 3000,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		dots: false,
		nav:true,
		navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	
	// text
	var TxtRotate = function(el, toRotate, period) {
	  this.toRotate = toRotate;
	  this.el = el;
	  this.loopNum = 0;
	  this.period = parseInt(period, 10) || 2000;
	  this.txt = '';
	  this.tick();
	  this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function() {
	  var i = this.loopNum % this.toRotate.length;
	  var fullTxt = this.toRotate[i];

	  if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	  } else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	  }

	  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	  var that = this;
	  var delta = 300 - Math.random() * 100;

	  if (this.isDeleting) { delta /= 2; }

	  if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	  } else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	  }

	  setTimeout(function() {
		that.tick();
	  }, delta);
	};

	window.onload = function() {
	  var elements = document.getElementsByClassName('txt-rotate');
	  for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
		  new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	  }
	  // INJECT CSS
	  var css = document.createElement("style");
	  css.type = "text/css";
	  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	  document.body.appendChild(css);
	};
	
	
	$('.best-shots').owlCarousel({
		stagePadding: 200,
		loop:true,
		margin:10, 
		items:1,
		lazyLoad: true,
		autoplay:4000,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
				stagePadding: 60
			},
			600:{
				items:1,
				stagePadding: 100
			},
			1000:{
				items:1,
				stagePadding: 200
			},
			1200:{
				items:1,
				stagePadding: 250
			},
			1400:{
				items:1,
				stagePadding: 300
			},
			1600:{
				items:1,
				stagePadding: 350
			},
			1800:{
				items:1,
				stagePadding: 400
			}
		}
	})
	
	
	
	});
})(jQuery);