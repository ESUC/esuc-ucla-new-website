 $(document).ready(function(){
 	$(function() {
 		$('a[href*="#"]:not([href="#"])').click(function() {
 			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
 				var target = $(this.hash);
 				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
 				if (target.length) {
 					$('html, body').animate({
 						scrollTop: target.offset().top
 					}, 1000);
 					return false;
 				}
 			}
 		});
 	});

 	var landing_height = $('#landing').outerHeight();
 	var nav_changed = false;
 	var preloaderFadeTimeout = 500;

 	$(window).load(function(){
 		var preloader = $('.preloader-wrapper');
 		preloader.fadeOut(preloaderFadeTimeout);
 	})

 	$(window).scroll(function() {
 		if (($(window).scrollTop() + $(window).height()) <= 1.8 * landing_height){
 			if (nav_changed == true){
 				console.log("height less");
 				$('.nav-wrapper').prop('id', 'decreaseOpacity');
 				nav_changed = false;
 			}
 		} 
 		else {
 			if (nav_changed == false){
 				$('.nav-wrapper').prop('id', 'increaseOpacity');
 				nav_changed = true;
 			}
 			
 		}
 	});
 });
