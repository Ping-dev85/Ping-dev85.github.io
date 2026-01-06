$(document).ready(function() {


    $('.swiper-button-pause').click(function() {
        $(this).hide().siblings().show()
    })
    $('.swiper-button-play').click(function() {
        $(this).hide().siblings().show()
    })


    $(window).scroll(function() {
        sc = $(window).scrollTop()


        if (sc > 2) {
            $('.nav').css({
                'background-color': '#FFF'
            })
            /*			$('.nav').css({'top':'-100px'})
            			$('.nav_top').css({'top':'-30px'})
            			$('.ham').css({'top':'-70px'})*/


        }

        if (sc < 2) {
            $('.nav').css({
                'background-color': ''
            })
            /*$('.nav').css({'top':'30px'})
            $('.nav_top').css({'top':'0'})
            $('.ham').css({'top':'55px'})*/
        }
    });



    //메뉴패널
    $("#menu_close").click(function() {
        $(".gnb_wrap").animate({
            right: "-100%"
        }, 500);
        $(".gnb_overlay").animate({
            left: "-100%"
        }, 500);


    });

    $(".gnb_overlay").click(function() {
        $(".gnb_wrap").animate({
            right: "-100%"
        }, 500);
        $(".gnb_overlay").animate({
            left: "-100%"
        }, 500);


    });
    $(".menu a img").click(function() {
        $(".gnb_wrap").animate({
            right: "0"
        }, 300);
        $(".gnb_overlay").animate({
            left: "0"
        }, 300);
        $('.ham').show()
    });




    //메뉴패널 하위메뉴 펼치기/접기
    $(".gnb_li_list > a").on("click", function() {
        var index = $(".gnb_li_list > a").index(this);
        var prevIndex = $(".gnb_li_list").index($('.gnb_li_list[class="gnb_li_list on"]'));
        if (prevIndex != -1) {
            $(".gnb_li_list").eq(prevIndex).find('ul').slideUp(250);
            $(".gnb_li_list").eq(prevIndex).removeClass('on');
        }
        if (prevIndex != index) {
            $(".gnb_li_list").eq(index).find('ul').slideDown(250);
            $(".gnb_li_list").eq(index).addClass('on');
        }
    });

    ham = 0
    $('.ham').click(function() {
        if (ham == 0) {
            ham = 1;
            $(".gnb_wrap").delay(0).animate({
                right: "0"
            }, 300);
            $(".gnb_overlay").stop().animate({
                left: "0"
            }, 400);
            $(this).addClass("active");
            //			$('.ham span').css({'background-color':'#000'})
        } else if (ham == 1) {
            ham = 0;
            $(".gnb_wrap").delay(0).animate({
                right: "-300px"
            }, 300);
            $(".gnb_overlay").stop().animate({
                left: "-100%"
            }, 400);
            $(this).removeClass("active");


            if (sc > 2) {

                //				$('.ham span').css({'background-color':'#000'})

            }

            if (sc < 2) {

                //				$('.ham span').css({'background-color':'#fff'})
            }

        }
    })









});