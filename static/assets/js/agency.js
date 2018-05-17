(function ($) {
    'use strict'

    jQuery(document).ready(function () {   
	// external js: isotope.pkgd.js

	var $grid = $('.portfolio-agency').isotope({
	  itemSelector: '.portfolio-agency-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1
	  }
	})
	
	})
	 
})(jQuery);