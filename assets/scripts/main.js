var header_dev_text, helloHeader;
var hamburger_hidden = true;
var languageAnimateArrayIndex = 0;
var languageList = [
	"SOFTWARE",
	"UNITY",
	"C#",
	"UNREAL ENGINE",
	"C++",
	".NET",
	"JAVA",
	"WEB",
	"PYTHON"
];

$(function () {
	helloHeader = $("#hello");

	languageAnimate();
	animateHelloHeader();

	var animatedSelector = ".card > *, .card ul > li";
	// $(animatedSelector).css("opacity", 0);

	// Animate all cards
	var animatedEntranceAnimationDelay = 0;

	// So the scroll bar doesn't show
	$('body').css('overflow-y', 'hidden');
	// $(animatedSelector).each(function(index, value) {
	// 	animatedEntranceAnimationDelay += 50;
	// 	setTimeout(function(){
	// 		$(this).addClass("slideInUp animated");

	// 		$(this).animate({
	// 			opacity: 1
	// 		}, 800);

	// 	}.bind(this), animatedEntranceAnimationDelay);
	// });

	// So we can scroll again
	$('body').css('overflow-y', 'auto');

	$(".language-stats").each(function() {
		$(this).children('li').each(function() {
			$(this).css('width', $(this).data('percentage') + '%');
		});
	});

	$('.mdl-layout__content').scroll(function () {
		$(".mdl-layout__video video").css({ 
			'top': (-$(this).scrollTop()) / 0.7
		});

		$(".mdl-layout__video h1").css({ 
			'top': (-$(this).scrollTop()) / 0.9
		});

		$(".mdl-layout__video .language-ticker").css({ 
			'top': ((-$(this).scrollTop()) / 0.8) - 140
		});

		if ($(this).scrollTop() > 370) {
			$('#nav-bar-ul').fadeIn(400);
		} else {
			$('#nav-bar-ul').fadeOut(100);
		}
	});

	function animateHelloHeader() {
		if ($(helloHeader).text() === "Hello...") {
			$(helloHeader).text("Hello...|");
		} else {
			$(helloHeader).text("Hello...");
		}
		setTimeout(animateHelloHeader, 400);
	}
});

function scrollToAnchor(id) {
	var tag = $("#"+id+"");
	$('.mdl-layout__content').animate({
		scrollTop: $(tag).offset().top
	}, 300);
}

function languageAnimate() {
	header_dev_text = $('.language-ticker #title');
	header_dev_text.text(languageList[languageAnimateArrayIndex]);
	if (languageList.length - 1 !== languageAnimateArrayIndex) {
		languageAnimateArrayIndex++;
	}
	else {
		languageAnimateArrayIndex = 0;
	}
	setTimeout(languageAnimateStart, 500);
}

function languageAnimateStart() {
	header_dev_text.css("opacity", '1');
	setTimeout(languageAnimateEnd, 2000);
}

function languageAnimateEnd() {
	header_dev_text.css("opacity", '0');
	setTimeout(languageAnimate, 500);
}
