$(document).ready(function () {
	// Set Options
	var speed = 500;				// fade speed
	var autoswitch = true;	// Auto slider options
	var autoswitch_speed = 4000; 	// auto splider options

	// Add initial active class
	$('.slide').first().addClass('active');

	// hide all slide
	$('.slide').hide();

	$('.active').show();

	$('#next').on('click', nextSlide);

	$('#prev').on('click', prevSlide);

	if (autoswitch == true) {
		setInterval(nextSlide, autoswitch_speed);
	}

	// switch to next silde
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	// switch to prev slide
	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});

