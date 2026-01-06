jQuery(function($) {


    function getScrollBarWidth() {
        if ($(document).height() > $(window).height()) {
            $('body').append('<div id="fakescrollbar" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>');
            fakeScrollBar = $('#fakescrollbar');
            fakeScrollBar.append('<div style="height:100px;">&nbsp;</div>');
            var w1 = fakeScrollBar.find('div').innerWidth();
            fakeScrollBar.css('overflow-y', 'scroll');
            var w2 = $('#fakescrollbar').find('div').html('html is required to init new width.').innerWidth();
            fakeScrollBar.remove();
            return (w1 - w2);
        }
        return 0;
    }


    $(window).scroll(function() {
        var scrollHeight = $(window).scrollTop();
        var startTop = $("#header").height();
        if (scrollHeight > startTop) {
            $("#header").addClass("fixed");
        } else {
            $("#header").removeClass("fixed");
        }
    });

    $(".ham").click(function() {
        $("#sitemapContent").removeClass("close").addClass("open");
        $(".sitemap-wrapper").addClass("menu-open");
        $(".sitemap-open-btn, .sitemap-open-btn2, .sitemap-close-btn").addClass("active");
        // $("body").css({'height':$(window).height(), 'overflow':'hidden'});
        if ($("#mainContainer").length > 0) {
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        }
    });

    $(".sitemap-open-btn, .sitemap-open-btn2, .footer-sitemap-open").click(function() {
        $("#sitemapContent").removeClass("close").addClass("open");
        $(".sitemap-wrapper").addClass("menu-open");
        $(".sitemap-open-btn, .sitemap-open-btn2, .sitemap-close-btn").addClass("active");
        // $("body").css({'height':$(window).height(), 'overflow':'hidden'});
        if ($("#mainContainer").length > 0) {
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        }
    });
    $(".sitemap-close-btn").click(function() {
        $("#sitemapContent").removeClass("open").addClass("close");
        $(".sitemap-wrapper").removeClass("menu-open");
        //		$(".sitemap-open-btn, .sitemap-open-btn2, .sitemap-close-btn").removeClass("active");
        // $("body").css({'height':'auto', 'overflow':'auto'});
        if ($("#mainContainer").length > 0) {
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        }
    });

    $(".cm-header-language").each(function() {
        var $langBox = $(this);
        var $langBtn = $(this).children(".cm-lang-open-btn");
        var $langList = $(this).children("ul");
        $langBtn.click(function() {
            $langList.slideToggle(300);
            $langBox.toggleClass("open");
            return false;
        });
        $(this).mouseleave(function() {
            $langList.slideUp(300);
            $langBox.removeClass("open");
        });
    })



    $(".to-top-btn").each(function() {

        $(this).on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600, "easeInOutExpo");
            return false;
        });
    });


    $('.footer-partner-list').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: false,
        autoplay: true,
        speed: 500,
        infinite: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 1567,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 4,
                    cssEase: 'linear',
                    autoplaySpeed: 0,
                    speed: 2000
                }
            }
        ]
    });


    $(".family-site-box").each(function() {
        var $familyBox = $(this);
        var $familyListOpenBtn = $(this).children(".family-site-open-btn");
        var $familyList = $(this).children(".family-site-list");
        $familyListOpenBtn.click(function() {
            $familyList.slideToggle(500);
            $familyBox.toggleClass("open");
            return false;
        });
        $(this).mouseleave(function() {
            $familyList.slideUp(500);
            $familyBox.removeClass("open");
        });
    });


    $(".cm-tab-container").each(function() {
        var $cmTabList = $(this).children(".cm-tab-list");
        var $cmTabListli = $cmTabList.find("li");
        var $cmConWrapper = $(this).children(".cm-tab-content-wrapper");
        var $cmContent = $cmConWrapper.children(".cm-tab-con");



        var $selectCon = $cmTabList.find("li.selected").find("a").attr("href");
        $cmContent.hide();
        $($selectCon).show();

        $cmTabListli.children("a").click(function() {
            if (!$(this).parent().hasClass("selected")) {
                var visibleCon = $(this).attr("href");
                $cmTabListli.removeClass("selected");
                $(this).parent("li").addClass("selected");
                $cmContent.hide();
                $(visibleCon).fadeIn();
            }
            return false;
        });
    });


    $(".custom-scrollbar-wrapper").on("touchmove click", function() {
        $(this).find(".custom-scrollbar-cover").fadeOut(200);
    });




    $(".editor table").each(function() {
        $(this).wrap("<div class='editor-table-box'></div>");
    });


    $(".editor iframe").each(function() {
        var iframeSrc = $(this).attr("src");
        var findStr = "https://www.youtube.com/embed";

        if (iframeSrc.indexOf(findStr) != -1) {
            $(this).wrap("<div class='editor-iframe-box'></div>");
        }
    });
});