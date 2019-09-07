(function($) {
	//Skill
	$('.publishing .circle').eq(0).circleProgress({
		value: 1,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});
	$('.publishing .circle').eq(1).circleProgress({
		value: 1,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});
	$('.publishing .circle').eq(2).circleProgress({
		value: 0.5,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(50 * progress) + '%');
	});
	$('.publishing .circle').eq(3).circleProgress({
		value: 0.7,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(70 * progress) + '%');
	});
	$('.publishing .circle').eq(4).circleProgress({
		value: 1,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});
	$('.publishing .circle').eq(5).circleProgress({
		value: 0.9,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(90 * progress) + '%');
	});
	$('.publishing .circle').eq(6).circleProgress({
		value: 0.85,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(85 * progress) + '%');
	});


	$('.design .circle').eq(0).circleProgress({
		value: 1,
		fill: {gradient: ['#6593bd', '#4b81b3']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});
	$('.design .circle').eq(1).circleProgress({
		value: 0.8,
		fill: {gradient: ['#6593bd', '#4b81b3']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(80 * progress) + '%');
	});
	$('.design .circle').eq(2).circleProgress({
		value: 0.6,
		fill: {gradient: ['#6593bd', '#4b81b3']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(60 * progress) + '%');
	});

	
	$('.framework .circle').eq(0).circleProgress({
		value: 0.7,
		fill: {gradient: ['#ff7676', '#ff5f5f']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(70 * progress) + '%');
	});
	$('.framework .circle').eq(1).circleProgress({
		value: 0.4,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(40 * progress) + '%');
	});
	$('.framework .circle').eq(2).circleProgress({
		value: 1,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});
	$('.framework .circle').eq(3).circleProgress({
		value: 1,
		fill: {gradient: ['#00bdbd', '#00bdbd']}
	}).on('circle-animation-progress', function(event, progress){
		$(this).find('.percent').html(Math.round(100 * progress) + '%');
	});
})(jQuery);

