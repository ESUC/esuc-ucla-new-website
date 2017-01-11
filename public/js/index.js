 

 $(document).ready(function(){
 	$(".button-collapse").sideNav();
 	
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

 	
 	var nav_changed = false;
 	var preloaderFadeTimeout = 500;

 	$(window).load(function(){
 		var preloader = $('.preloader-wrapper');
 		preloader.fadeOut(preloaderFadeTimeout);
 	})

 	if ($('#landing').length){
 		console.log("landing exists");
 		console.log($('nav')[0]);
 		$('nav').css('background-color', 'rgba(100,139,186, 0.8)');
 	}

 	$(window).scroll(function() {
 		var landing_height = $('#landing').outerHeight();
 		if (($(window).scrollTop() + $(window).height()) <= 1.7 * landing_height){
 			if (nav_changed == true){
 				$('nav').css('background-color', 'rgba(100,139,186, 0.8)');
 				nav_changed = false;
 			}
 		} 
 		else {
 			if (nav_changed == false){
 				$('nav').css('background-color', 'rgba(100,139,186, 1)');
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
