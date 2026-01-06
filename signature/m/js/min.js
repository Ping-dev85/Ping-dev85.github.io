$(document).ready(function() {



    const trigger = new ScrollTrigger.default({
        trigger: {
            //			once: true,
            offset: {
                element: {
                    x: 0,
                    y: 0.1
                },
                //			viewport: {
                //                x: 0,
                //                y: (trigger, frame, direction) => {
                //                    return trigger.visible ? 0 : 0.3
                //                }
                //             }
            },
            toggle: {
                class: { in: 'active',
                    out: 'inactive'
                }
            }

        }
    });
    trigger.add('[data-active]')
    //			.add('[data-slideInBottom]')
    //			.add('[data-fadeIn]')
    //			.add('[data-slideInBottom]')




    $('.guest_close').click(function() {
        $('.guest_pop_wrap').fadeOut();
        $('.guest_pop_bg').fadeOut();
    })
    $('.guest_pop_open').click(function() {
        $('.guest_pop_wrap').fadeIn();
        $('.guest_pop_bg').fadeIn();
    })


    //$('.txt01').delay(100).animate({'opacity':'1','margin-top':'0'},500)
    //$('.txt02').delay(700).animate({'opacity':'1','margin-top':'5px'},500)
    //$('.txt03').delay(500).animate({'opacity':'1'},700)
    //$('.main_line').delay(1000).animate({'height':'30px'},500)
    // $('.main_bi').delay(1400).animate({'opacity':'1'},700)

    //$('#main_img').addClass('main_active')

    var audio = new Audio('../data/radio.mp3');

    $('.radio-on').click(function() {
        $('.radio-on').hide()
        $('.radio-off').show()
        audio.play();

    })

    $('.radio-off').click(function() {
        $('.radio-off').hide()
        $('.radio-on').show()

        audio.pause();
    })



    $('.top_bt').click(function() {
        $('body,html').animate({
            'scrollTop': '0'
        }, 400)
    })

    $('.swiper-button-pause').click(function() {
        $(this).hide().siblings().show()
    })
    $('.swiper-button-play').click(function() {
        $(this).hide().siblings().show()
    })

    $(".terms_bt01").click(function() {
        $('.info_pop_wrap').show()
        $('.info_pop_bg').show()
    });

    $(".info_pop_close").click(function() {
        $('.info_pop_wrap').hide()
        $('.info_pop_bg').hide()
    });

    //ham = 0
    //$('.ham').click(function(){
    //if( ham == 0 ){  
    //ham = 1; 
    //$(".gnb_wrap").show()
    //$(".gnb_wrap").delay(0).animate({opacity:"1"},300,function(){
    //});
    //$(this).addClass("active");
    //$('.ham_wrap').addClass("active");
    //}
    //else if ( ham == 1 ){
    //ham = 0;
    //$(".gnb_wrap").delay(0).animate({opacity:"0"},300,function(){
    //	$(".gnb_wrap").hide()
    //});
    //$(this).removeClass("active");
    //$('.ham_wrap').removeClass("active");
    //}
    //	})

    var sec01Top = $('.main_box').height();
    var sec02Top = $('.sec03').offset().top - 80;
    var sec03Top = $('.sec05').offset().top - 80;
    var sec04Top = $('.sec04').offset().top - 80;
    var sec05Top = $('.sec05').offset().top - 80;
    //var sec06Top= $('.sec06').offset().top-80;
    //var sec07Top= $('.sec07').offset().top-80;
    //var sec08Top= $('.sec08').offset().top-80;
    //var sec09Top= $('.sec09').offset().top-80;

    $('.go_home').click(function() {

        $('body,html').animate({
            'scrollTop': '0'
        }, 400)
        ham = 0;
        $(".gnb_wrap").delay(0).animate({
            opacity: "0"
        }, 300, function() {
            $(".gnb_wrap").hide()
        });
        $('.ham').removeClass("active");
        $('.ham_wrap').removeClass("active");
    })




    family = 0
    $('.footer_family').click(function() {
        if (family == 0) {
            family = 1;
            $(this).addClass('active')
            $('.footer_bt').addClass('active')

        } else if (family == 1) {
            family = 0;
            $(this).removeClass('active')
            $('.footer_bt').removeClass('active')
        }
    })
    $('.footer_family ul li').mouseover(function() {
        $(this).addClass('active')
    })
    $('.footer_family ul li').mouseleave(function() {
        $(this).removeClass('active')
    })



});






$(window).scroll(function() {

    sc = $(window).scrollTop()


    $('#sc').html(sc)

    if ($('.fixWrap').height() > sc + $(window).height()) {
        $('.fixWrap').css({
            "top": "-" + (sc) + "px"
        });
    }

    if (sc > 22) {
        $('.navi').addClass('active')
        $('.ham').addClass('active2')

    } else {
        $('.navi').removeClass('active')
        $('.ham').removeClass('active2')
    }


    //	if ( sc>100 )
    //	{
    //		$('.top_bt').addClass('active')
    //		
    //	}else{
    //		$('.top_bt').removeClass('active')
    //	}

});