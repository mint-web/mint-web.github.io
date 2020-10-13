(function ($) {
	// mobile navi
	hamburgerArea();

	function hamburgerArea() {
		$('.nav-btn').on('click', function () {
			$(this).toggleClass('close-btn');
			$('#nav').toggleClass('open');
			$('.dim').fadeToggle();
		});

		$('body').append('<div class="dim"></div>');

		$('.dim').on('click', function () {
			$('.nav-btn').removeClass('close-btn');
			$('#nav').removeClass('open');
			$(this).fadeOut();
		});

		//menu scroll
		var secLocation = [];
		secLocation[0] = $('#about').offset().top;
		secLocation[1] = $('#works').offset().top;

		var menuNum = 0;

		$('.navigation > li>a').on({
			click: function (e) {
				e.preventDefault();
				menuNum = $(this).attr('class').slice(4, 5);
				$('html, body').stop().animate({
					scrollTop: secLocation[menuNum]
				}, 500);
			}
		});

		//Career tab
		$('.about-tab li').click(function () {
			var tabId = $(this).attr('data-tab');

			$('.about-tab li').removeClass('active');
			$('.about-con').removeClass('active');

			$(this).addClass('active');
			$('#' + tabId).addClass('active');
		});


		//Portfolio
		$('.portfolio-list').owlCarousel({
			loop: true,
			nav: false,
			autoplay: false,
			autoplayHoverPause: false,
			autoplayTimeout: 2000,
			autoplaySpeed: 1000,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				680: {
					items: 2
				},
				980: {
					items: 3
				}
			}
		});
		//Portfolio detail
		$('.more-btn').click(function () {
			num = $(this).attr('class').slice(13, 15);
			$('#page' + num).fadeIn(300);
		});
		$('.detail-bg, .pop-close').click(function () {
			$('.detail-wrap').fadeOut(300);
		});


	}

})(jQuery);