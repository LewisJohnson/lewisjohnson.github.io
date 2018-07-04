var nav_bar_ul, ham_el1, ham_el2, ham_el3, header_dev_text, helloHeader;
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
    "Python"
];

$(function () {
    helloHeader = $("#hello");
    ham_el1 = $('.ham_1');
    ham_el2 = $('.ham_2');
    ham_el3 = $('.ham_3');
    nav_bar_ul = $("#nav-bar-ul");

    languageAnimate();
    animateHelloHeader();
    $('#hamburger').click(HamburgerToggle);

    var animatedSelector = ".card";
    $(animatedSelector).css("opacity", 0);

    // Animate all cards
    var animatedEntranceAnimationDelay = 0;

    // So the scroll bar doesn't show
    $('body').css('overflow-y', 'hidden');
    $(animatedSelector).each(function(index, value) {
        animatedEntranceAnimationDelay += 50;
        setTimeout(function(){
            $(this).addClass("slideInUp animated");

            $(this).animate({
                opacity: 1
            }, 800);

        }.bind(this), animatedEntranceAnimationDelay);
    });

    // So we can scroll again
    $('body').css('overflow-y', 'scroll');

    var lang_stats = document.getElementsByClassName('language-stats');
    for (var i = 0; i < lang_stats.length; ++i) {
        var list = lang_stats[i];

        for (var j = 0; j < list.children.length; j++) {
            list.children[j].style.width = list.children[j].dataset.percentage;
        }
    }

    $(window).resize(function () {
        // Checks that the header scales properly
        if ($(window).width() > 700) {
            if (hamburger_hidden === false) {
                hideHamburgerMenu();
            }
        }
    });

    $(window).scroll(function () {
        var headerHeight = $(".header").height();
        if ($(this).scrollTop() > (headerHeight / 2 - 80)) {
            $("#title-text").css({
                'opacity': '0',
                'top': '-12%'
            });
        } else {
            $("#title-text").css({
                'opacity': '1',
                'top': '0%'
            });
        }

        if ($(this).scrollTop() > (headerHeight - $(".nav-bar-mobile-overlay").height())) {
            $("nav").css("background", '#252525');
            $(".nav-bar-mobile-overlay").css("background", '#252525');
            $(".nav-desktop").css("background", '#252525');
        } else {
            $(".nav-desktop").css("background", 'transparent');
            $(".nav-bar-mobile-overlay").css("background", 'transparent');
        }
    });

    function HamburgerToggle() {
        ham_el1.toggleClass("on");
        ham_el2.toggleClass("on");
        ham_el3.toggleClass("on");
        $(".nav-mobile").toggleClass("open");
    }

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
    $('html, body').animate({
        scrollTop: $(tag).offset().top - 83
    }, 300);
}

function languageAnimate() {
    header_dev_text = $('#header-name-top');
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