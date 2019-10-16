function parallaxScroll(coverSection, parallaxItem, yAnimate = '-50%') {
	
	let cSection = coverSection,
			pItem = parallaxItem,
			controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "400%"}});
	
	// build scenes
	new ScrollMagic.Scene({triggerElement: cSection})
	.setTween(pItem, {y: yAnimate, ease: Linear.easeNone})
	.addTo(controller);
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

if (mobDev && ($(window).outerWidth() <= 820)) {
	if($('.choose-plan').length){
		$(window).scroll(function(){
			let windowTop = $(window).scrollTop();
			let sectionTop = $('.choose-plan').offset().top;
			
			if (windowTop < sectionTop) {
				$('.mob-btn').slideDown();
			}
			else {
				$('.mob-btn').slideUp();
			}
		});
	}
}
