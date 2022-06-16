$(function () {

	// Menu opener hamburger
	$('.btn-open').click(function () {
		$('.collapse').toggleClass('d-none').css('order', '0');
		$('.menu__items').toggleClass('nav-opened');
	});

	// Preloader

	$('#preloader').fadeOut('slow',function(){
		// $'#preloader'.delay(200).fadeOut('slow');
		$(this).remove();
	});

	
	// Прокрутка 
	$('.go-to').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1200);
		});

	// Pop Up
	$('.exampleModal').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	})


});

