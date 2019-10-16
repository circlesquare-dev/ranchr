if($('.glide').length) {
	new Glide('.glide', {
		type: 'slider',
		startAt: 0,
		perView: 1
	}).mount();
}

if($('.main-cover').length){
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 600) {
			$('.main-header').addClass('header-fixed');
		}
		else {
			$('.main-header').removeClass('header-fixed');
			
		}
	});
}

$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});

function leftInfoDetect() {
	let plan = 'plan',
			planEdit = 'premium',
			url = window.location.href;
	
	if(url.indexOf('?' + plan) != -1) {
		$('.page-info_block').removeClass('active');
		$('.page-info_plan').addClass('active');
	}
	else if(url.indexOf('?' + planEdit) != -1) {
		$('.page-info_block').removeClass('active');
		$('.page-info_plan-edit').addClass('active');
	}
}

$(document).ready( function(){
	
	leftInfoDetect();
	
	// custom select for desktop
	$('select').niceSelect();
	
});
