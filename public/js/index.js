 

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
 	var nav_changed = true;
 	var preloaderFadeTimeout = 500;

 	$(window).load(function(){
 		var preloader = $('.preloader-wrapper');
 		preloader.fadeOut(preloaderFadeTimeout);
 	})

 	$(window).scroll(function() {
 		if (($(window).scrollTop() + $(window).height()) <= 1.7 * landing_height){
 			if (nav_changed == true){
 				console.log("height less");
 				$('nav').removeClass('white');
 				$('nav').addClass('transparent');

 				$('#calendar_dropdown').removeClass('white');
 				$('#calendar_dropdown').addClass('transparent');
 				nav_changed = false;
 			}
 		} 
 		else {
 			if (nav_changed == false){
 				$('nav').addClass('white');
 				$('nav').removeClass('transparent');

 				$('#calendar_dropdown').addClass('white');
 				$('#calendar_dropdown').removeClass('transparent');
 				nav_changed = true;
 			}
 			
 		}
 	});

 	$('.datepicker').pickadate({
    	selectMonths: true, // Creates a dropdown to control month
    	selectYears: 15 // Creates a dropdown of 15 years to control year
  	});

  	 $(document).ready(function(){
      $('.slider').slider();
    });

 });
