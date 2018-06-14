$(function() {

	$('.grid-item').hover(function () {
		$(this).find('.cover-item-gallery').fadeIn();
	}, function () {
		$(this).find('.cover-item-gallery').fadeOut();
	});

	var container = $('#gallery');
	container.imagesLoaded(function () {
		$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-item',
			percentPosition: true
		});
	});

	$('.s-gallery').fotorama({
		thumbwidth: 246,
		maxwidth: '100%',
		thumbheight: 160,
		loop: true,
		nav: 'thumbs',
		arrows: true,
		ratio: 3/2
	});

	$('.comments_div').slice(0, 6).show();
	$('#more_reviews').on('click', function (e) {
		e.preventDefault();
		$('.comments_div:hidden').slice(0, 6).slideDown();
	});

	$('.s-carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: false,
		speed: 300,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll:2
				}
			}
		]
	});
		
});


