$(document).ready(function() {

    //$('.intro_logo_box').delay(1800).fadeOut(1000);
    $('.intro_logo_box').delay(1800);
    //$('.intro_bg05').delay(5100).animate({'opacity':'1'},0,function(){
    //$('.intro_bg05').hide()
    //$('.intro_bg06').hide()
    //$('.intro_txt_box').css({'display':'flex'})
    //	})
    //$('.intro_bt').click(function(){
    //$('.intro_wrap').fadeOut(1000);
    //})


    $('.swiper-button-pause').click(function() {
        $(this).hide().siblings().show()
        $('.swiper-pagination-bullet-active span').addClass('stop')
    })
    $('.swiper-button-play').click(function() {
        $(this).hide().siblings().show()
        $('.swiper-pagination-bullet-active span').removeClass('stop')
    })

    $(".swiper-button-pause").click(function() {
        swiper1.autoplay.stop();
    });

    $(".swiper-button-play").click(function() {
        swiper1.autoplay.start();
    });

    //ham = 0
    //$('.ham').click(function(){
    //if( ham == 0 ){  
    //ham = 1; 
    //$('#logo').addClass('active2')
    //$('.ham').addClass('active')
    //$('.site_map').addClass('active')
    //$('.site_left').addClass('active')

    //}
    //else if ( ham == 1 ){
    //ham = 0;
    //$('#logo').removeClass('active2')
    //$('.ham').removeClass('active')
    //$('.site_map').removeClass('active')
    //$('.site_left').removeClass('active')
    //}
    //})

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


    $('#fullpage').fullpage({

        navigation: true,
        anchors: ['main', 'pr', 'premium', 'life', 'high', 'calendar', 'brand', 'info'],
        'verticalCentered': true,
        'css3': true,
        'navigation': false,
        //		scrollingSpeed: 800,

        'afterLoad': function(anchorLink, index) {

            if (index == 1) {
                $('.brand_wrap').hide()
                $('.pr_wrap').hide()
            } else {
                $('.main_wrap').hide()
            }

            if (index == 2) {
                $('.brand_wrap').hide()

            } else {

            }

            if (index == 3) {
                $('.brand_wrap').hide()
                $('.pr_wrap').hide()
            } else {

            }

            if (index == 4) {
                $('.brand_wrap').hide()
            } else {
                $('.sign_wrap').hide()
            }

            if (index == 5) {
                $('.brand_wrap').hide()
                $('.calendar_wrap').hide()

            } else {
                $('.premium_wrap').removeClass('active')

            }

            if (index == 6) {
                //				$('.brand_wrap').hide()



            } else {}

            if (index == 7) {}


            //	
            //						if(index == 4){
            //						}
            //						else {			
            //						}



        },
        'onLeave': function(anchorLink, index) {

            if (index == 1) {
                $('.main_wrap').show()
                $('#logo').removeClass('white')
                $('.navi').removeClass('white')
                $('.ham').removeClass('white')
            }

            if (index == 2) {
                $('.pr_wrap').show()
                $('#logo').addClass('white')
                $('.navi').addClass('white')
                $('.ham').addClass('white')
            } else {}

            if (index == 3) {

                $('#logo').addClass('white')
                $('.navi').addClass('white')
                $('.ham').addClass('white')
            }

            if (index == 4) {
                $('.sign_wrap').show()
                $('#logo').removeClass('white')
                $('.navi').removeClass('white')
                $('.ham').removeClass('white')
            }

            if (index == 5) {
                $('.premium_wrap').addClass('active')
                $('#logo').removeClass('white')
                $('.navi').removeClass('white')
                $('.ham').removeClass('white')
            }

            if (index == 6) {
                $('.brand_wrap').show()
                $('#logo').addClass('white')
                $('.navi').addClass('white')
                $('.ham').addClass('white')
                //				$('.calendar_wrap').show()
                //				$('#logo').removeClass('white')
                //				$('.navi').removeClass('white')
                //				$('.ham').removeClass('white')
            }

            //			if(index == 7){
            //			} 

            if (index == 7) {
                $('header').fadeOut(500)
                $('#logo').fadeOut(500)
                $('.ham').fadeOut(500)
            } else {
                $('header').fadeIn(500)
                $('#logo').fadeIn(500)
                $('.ham').fadeIn(500)
            }

        },

    });

    const trigger = new ScrollTrigger.default({
        trigger: {
            //			once: true,
            offset: {
                element: {
                    x: 0,
                    y: 0.05
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




});







$(window).scroll(function() {

    sc = $(window).scrollTop();


    if (sc > 21) {
        $('#logo').addClass('active')
        $('.navi').addClass('active')
        $('.ham').addClass('active2')
    }
    if (sc < 21) {
        $('#logo').removeClass('active')
        $('.navi').removeClass('active')
        $('.ham').removeClass('active2')
    }
    /* 
    	if( val <= sc ){
    		$('.footer_guest').addClass('active');
    	} else {
    		$('.footer_guest').removeClass('active');
    	}

    */

});