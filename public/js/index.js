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
 	console.log(landing_height);
 	var nav_changed = false;

 	$(window).scroll(function() {
 		console.log($(window).scrollTop() + $(window).height());
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