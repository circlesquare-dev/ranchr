'use strict';

if ($('.glide').length) {
	new Glide('.glide', {
		type: 'slider',
		startAt: 0,
		perView: 1
	}).mount();
}

if ($('.main-cover').length) {
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 600) {
			$('.main-header').addClass('header-fixed');
		} else {
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
	var plan = 'plan',
	    planEdit = 'premium',
	    url = window.location.href;

	if (url.indexOf('?' + plan) != -1) {
		$('.page-info_block').removeClass('active');
		$('.page-info_plan').addClass('active');
	} else if (url.indexOf('?' + planEdit) != -1) {
		$('.page-info_block').removeClass('active');
		$('.page-info_plan-edit').addClass('active');
	}
}

$(document).ready(function () {

	leftInfoDetect();

	// custom select for desktop
	$('select').niceSelect();
});

function parallaxScroll(coverSection, parallaxItem) {
	var yAnimate = arguments.length <= 2 || arguments[2] === undefined ? '-50%' : arguments[2];

	var cSection = coverSection,
	    pItem = parallaxItem,
	    controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "400%" } });

	// build scenes
	new ScrollMagic.Scene({ triggerElement: cSection }).setTween(pItem, { y: yAnimate, ease: Linear.easeNone }).addTo(controller);
}

var mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

if (!mobDev) {
	parallaxScroll('.info-card1', '.info-card1 .parallax-item');
	parallaxScroll('.info-card2', '.info-card2 .parallax-item', '-60%');
	parallaxScroll('.info-card3', '.info-card3 .parallax-item', '-40%');

	parallaxScroll('.info-card1', '.info-card1 .parallax-meat', '10%');
	parallaxScroll('.info-card2', '.info-card2 .parallax-meat', '25%');
	parallaxScroll('.info-card3', '.info-card3 .parallax-meat', '10%');
}

if (mobDev && $(window).outerWidth() <= 820) {
	if ($('.choose-plan').length) {
		$(window).scroll(function () {
			var windowTop = $(window).scrollTop();
			var sectionTop = $('.choose-plan').offset().top;

			if (windowTop < sectionTop) {
				$('.mob-btn').slideDown();
			} else {
				$('.mob-btn').slideUp();
			}
		});
	}
}