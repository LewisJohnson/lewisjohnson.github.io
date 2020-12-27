// Globals
var headerDevText, helloHeader;

var hamburgerHidden = true;
var languageAnimateArrayIndex = 0;

var languageList = [
	"SOFTWARE",
	"CLOUD",
	"UNITY",
	"C#",
	"UNREAL ENGINE",
	"C++",
	".NET",
	"WEB",
	"PYTHON",
	"PHP"
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

	$(".language-stats").each(function ()
	{
		$(this).children('li').each(function ()
		{
			$(this).css('width', $(this).data('percentage') + '%');
		});
	});

	$('.mdl-layout__content').on('scroll', function ()
	{
		$(".mdl-layout__hero video, .mdl-layout__hero img").css({ 'top': (-$(this).scrollTop()) / 0.7 });
		$(".mdl-layout__hero h1").css({ 'top': (-$(this).scrollTop()) / 0.9 });
		$(".mdl-layout__hero .language-ticker").css({ 'top': ((-$(this).scrollTop()) / 0.8) - 140 });

		if ($(this).scrollTop() > 370)
		{
			$('#nav-bar-ul').fadeIn(400);
		}
		else
		{
			$('#nav-bar-ul').fadeOut(100);
		}
	});

	function animateHelloHeader()
	{
		if ($(helloHeader).text() === "Hello...") {
			$(helloHeader).text("Hello...|");
		}
		else
		{
			$(helloHeader).text("Hello...");
		}
		setTimeout(animateHelloHeader, 400);
	}
});

function scrollToAnchor(id)
{
	var url = location.href;
    location.href = "#"+id;
    history.replaceState(null,null,url);
}

function languageAnimate()
{
	headerDevText = $('.language-ticker #title');
	headerDevText.text(languageList[languageAnimateArrayIndex]);

	if (languageList.length - 1 !== languageAnimateArrayIndex) {
		languageAnimateArrayIndex++;
	}
	else
	{
		languageAnimateArrayIndex = 0;
	}

	setTimeout(languageAnimateStart, 300);
}

function languageAnimateStart()
{
	headerDevText.css("opacity", '1');
	setTimeout(languageAnimateEnd, 2000);
}

function languageAnimateEnd()
{
	headerDevText.css("opacity", '0');
	setTimeout(languageAnimate, 500);
}
