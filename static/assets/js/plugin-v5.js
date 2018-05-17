(function ($) {
    "use strict"; // this function is executed in strict mode	

    jQuery(document).ready(function () {
	
		if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	};
	 
	 
	 $('.testimonial').owlCarousel({
		dots: true,
		nav: false,
		autoHeight: true,
		items: 1,
		dotsEach: 1,
		slideBy: 1,
		margin: 15,
		autoplay: 3000,
		mouseDrag: false,
		touchDrag: false, 
	});
	
	 
	
	
	});
	 
})(jQuery);

