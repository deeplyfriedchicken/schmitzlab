 

jQuery( document ).ready(function( $ ) {
	"use strict"; // this function is executed in strict mode	
	 
	
	/* ------------------------------------------------------ */
	/*  1. MENU ACTIVE CLASS JS
	/* ------------------------------------------------------ */ 
	var navChildren = $("#menu li").children();
	var aArray = [];
	for (var i = 0; i < navChildren.length; i++) {
		var aChild = navChildren[i];
		var ahref = $(aChild).attr('href');
		aArray.push(ahref);
	}
	$(window).scroll(function() {
		var windowPos = $(window).scrollTop();
		var windowHeight = $(window).height();
		var docHeight = $(document).height();
		for (var i = 0; i < aArray.length; i++) {
			var theID = aArray[i];
			var secPosition = $(theID).offset().top;
			secPosition = secPosition - 135;
			var divHeight = $(theID).height();
			divHeight = divHeight + 90;
			if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
				$("a[href='" + theID + "']").parent().addClass("active");
			} else {
				$("a[href='" + theID + "']").parent().removeClass("active");
			}
		}
	});
	/* --------------------------- */
	/*  2. MENU SMOOTH SCROLLING JS
	/* --------------------------- */ 
	$(function() {
         $('a[href*="#"]:not([data-toggle="tab"])').on('click', function() {
             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                 var target = $(this.hash);
                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                 if (target.length) {
                     $('html, body').animate({
                         scrollTop: target.offset().top
                     }, 1000);
                     return false;
                 }
             }
         });
     }); 

});	



