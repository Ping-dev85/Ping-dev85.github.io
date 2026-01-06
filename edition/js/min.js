$(document).ready(function() {

    // history.scrollRestoration = "manual"
    // window.onload = function() {
    //     setTimeout (function () {
    //         scrollTo(0,0);
    //     },0);
    // }

    // $('.gnb').mouseover(function(){
    // 	$('.navi,.ham').addClass('mouseover')
    // })
    // $('.gnb').mouseleave(function(){
    // 	$('.navi,.ham').removeClass('mouseover')
    // })

    $('.slide_drag').mouseover(function() {
        $('#cursor').addClass('drag')
        $('.cursor_skip').addClass('drag')
    })
    $('.slide_drag').mouseleave(function() {
        $('#cursor').removeClass('drag')
        $('.cursor_skip').removeClass('drag')
    })
    $('.slide_drag2').mouseover(function() {
        $('#cursor').addClass('drag2')
    })
    $('.slide_drag2').mouseleave(function() {
        $('#cursor').removeClass('drag2')
    })
    $('.cursor_cick').mouseover(function() {
        $('#cursor').addClass('click')
    })
    $('.cursor_cick').mouseleave(function() {
        $('#cursor').removeClass('click')
    })

    // $('a,.btn').mouseover(function(){
    // 	$('#cursor').addClass('arrow')
    // })
    // $('a,.btn').mouseleave(function(){
    // 	$('#cursor').removeClass('arrow')
    // })

    $('.call,.tel p').mouseover(function() {
        $('.tel').addClass('active')
    })
    $('.call,.tel p').mouseleave(function() {
        $('.tel').removeClass('active')
    })

    // fullPage 유무 감지 + 공용 컨트롤 (v=true → 스크롤 허용, v=false → 잠금)
    const fpCtl = v => {
        const hasFP = !!(window.fullpage_api || ($.fn.fullpage && $.fn.fullpage.setAllowScrolling));
        if (hasFP) {
            const api = window.fullpage_api;
            if (api && api.setAllowScrolling) {
                api.setAllowScrolling(v);
                api.setKeyboardScrolling(v);
            } else {
                $.fn.fullpage.setAllowScrolling(v);
                $.fn.fullpage.setKeyboardScrolling(v);
            }
        } else {
            if (!v) { // lock body
                const y = window.scrollY;
                document.body.dataset.y = y;
                document.body.style.cssText += `position:fixed;top:-${y}px;width:100%`;
            } else { // unlock body
                const y = +document.body.dataset.y || 0;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, y);
                delete document.body.dataset.y;
            }
        }
    };

    $('.location_bt').on('click', () => {
        fpCtl(false);
        $('body.main .navi').fadeOut(300);
        $('.location_pop_wrap, .location_pop_bg, .location_ori').addClass('active');
    });

    $('.location_pop_close, .location_pop_bg').on('click', () => {
        fpCtl(true);
        $('body.main .navi').fadeIn(300);
        $('.location_pop_wrap, .location_pop_bg, .location_ori').removeClass('active');
    });

    // 내부 스크롤 유지 / 배경 스크롤 완전 차단
    $('.location_pop').on('wheel touchmove', e => e.stopPropagation());
    $('.location_pop_bg').on('wheel DOMMouseScroll touchmove', e => {
        e.preventDefault();
        e.stopPropagation();
    });


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


    // $(document).on("click", ".footer_family > div", function () {
    //     $(".footer_family").toggleClass("active");
    // });


    $(".right_brand_wrap").click(function() {
        location.href = '../../signature/main.html';
    });

    $(".reserve,.menu5").click(function() {
        // alert('준비중입니다')
        $(".guest_pop_wrap").addClass("active");
        $('.guest_pop_bg').addClass('active')
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
        $('body').css({
            'overflow-y': 'hidden'
        })
        $('.ham').removeClass("active");
        $('.gnb>div').stop().fadeOut(1000)
        $('.site_list2').removeClass("open");
        $('.site_wrap,.site_bg,.world_bg,.world_content').removeClass("active");
        $('.navi,.ham').removeClass("over");
        $('.site_list2').removeClass("open");
    });
    $('.guest_pop_close').click(function() {
        $('.gnb>div').stop().fadeIn(1000)
        $(".guest_pop_wrap").removeClass("active");
        $('.guest_pop_bg').removeClass('active')
        $('body').off('scroll touchmove mousewheel');
        $('body').css({
            'overflow-y': 'auto'
        })

    })

    $('.right_scroll span').animate({
        'opacity': '1'
    }, 0, function bb() {
        $(this).delay(0).animate({
            'top': '9rem'
        }, 1800, function() {
            $(this).css({
                'top': '0',
                'opacity': '0'
            })
            $(this).animate({
                'opacity': '1'
            }, 700, bb)
        })
    })

    $('body.sub .navi').addClass('white').delay(0).fadeIn(1000);
    $('body.sub .right_brand_wrap').addClass('show');
    // $('body.sub .navi,body.sub .ham').addClass('white');
    // $('body.sub .right_brand_wrap').addClass('show');
    // $('body.sub .navi').delay(0).fadeIn(1000);
    // $('body.sub .navi,body.sub .ham').delay(0).fadeIn(1000);


    $('.top_bt').click(function() {
        $('body,html').animate({
            'scrollTop': '0'
        }, 400)
    })
    /*
    $('.ham').click(function(){
    	alert('준비중입니다')
    })
    */

    const trigger = new ScrollTrigger.default({
        trigger: {
            // once: true,
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

    //

    ham = 0
    $('.ham').click(function() {
        // alert('준비중입니다')
        if (ham == 0) {
            ham = 1;
            $(this).addClass("active");
            // $('.site_map').addClass('active')
            // $('.site_bg').addClass('active')
            $('.gnb>div,.top_fixed_wrap').stop().fadeOut(1000)
            $('.site_wrap,.site_bg').addClass("active");
            $('.navi,.ham').addClass("over");
            $('body').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
        } else if (ham == 1) {
            ham = 0;
            $(this).removeClass("active");
            // $('.site_map').removeClass('active')
            // $('.site_bg').removeClass('active')
            $('.gnb>div,.top_fixed_wrap').stop().fadeIn(1000)
            $('.site_wrap,.site_bg').removeClass("active");
            $('.navi,.ham').removeClass("over");
            $('body').off('scroll touchmove mousewheel');
        }
    })
    // $('.site_bg').click(function(){
    // 	ham = 0;
    // 	$('.ham').removeClass('active')
    // 	$('.site_map').removeClass('active')
    // 	$('.site_bg').removeClass('active')
    // })


    // 인트로 애니메이션 시작

    const TRANSITION = 1600;

    const wait = (ms) => new Promise(res => setTimeout(res, ms));
    let cancelled = false;
    let finished = false;

    // PC/모바일 체크
    const isPC = () => $(window).width() > 1400;

    // 스크롤 잠금
    function lockScroll() {
        if (isPC()) {
            $('body.main').on('scroll touchmove mousewheel', blockScroll);
        } else {
            $('body.main').addClass('locked');
        }
    }

    // 스크롤 해제
    function unlockScroll() {
        if (isPC()) {
            $('body.main').off('scroll touchmove mousewheel', blockScroll);
        } else {
            $('body.main').removeClass('locked');
        }
    }

    // 이벤트 차단 핸들러
    function blockScroll(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    // 최종 액션
    function finalReveal() {
        if (finished) return;
        finished = true;
        unlockScroll();

        if (isPC()) {
            // PC (1400 이상)
            $('body.main .navi').fadeIn(1000);
        } else {
            // 모바일
            $('body.main .navi, body.main .ham').fadeIn(1000);
        }

        $('.cursor_skip2').removeClass('show');
        $('.main_skip_wrap').fadeOut(0);
        //   $('.intro_all_wrap').fadeOut(1200);
        $('.main_guest').addClass('show');
        $('.main_wrap').addClass('on');
        $('.right_brand_wrap').addClass('show');


        $('.bottom_fixed_wrap').addClass('on');


        setTimeout(() => {
            $('.main_wrap').addClass('end');
            $('#k_popup2').addClass('show');
            swiper_main.slideTo(2);
        }, TRANSITION);
    }

    const introTimeline = [{
            delay: 0,
            add: 'intro'
        },
        //   { delay: 2500, add: 'intro2' },
        //   { delay: 2500, add: 'intro3' },
        //   { delay: 2500, add: 'intro4' },
        //   { delay: 2500, add: 'intro5' },
        //   { delay: 2500, add: 'intro6' },
        //   { delay: 2500, add: 'intro7' },
        //   { delay: 2400, add: 'intro8' },
        //   { delay: 2400, add: 'intro5' },
    ];

    async function runIntroSequence() {
        const $intro = $('.main_wrap');

        // 인트로 시작 전 대기시간
        await wait(0);

        // 인트로 시작 시 스크롤 잠금
        lockScroll();

        for (const step of introTimeline) {
            await wait(step.delay);
            if (cancelled) return;
            if (step.add) $intro.addClass(step.add);
        }

        // 마지막 애니메이션 후 딜레이 5초 뒤 skip 추가
        await wait(0);
        if (cancelled) return;
        $intro.addClass('skip');
        finalReveal();
    }

    function scheduleSkipUI() {
        setTimeout(() => {
            // $('.main_skip_wrap').fadeIn(1000);
            // $('.cursor_skip2').addClass('show');
        }, 1500);
    }

    function bindSkipButton() {
        $('.main_skip_bt').on('click', function() {
            if (finished) return;
            cancelled = true;

            $('.main_wrap').stop(true, true).addClass('skip');
            $('.cursor_skip2').removeClass('show');
            $('.main_skip_wrap').fadeOut(0);

            // 스킵 → 스크롤 해제
            unlockScroll();

            finalReveal();
        });
    }

    // --- 개발용 스킵 토글 ---
    // 1) URL에 ?devskip=1 붙이면 켜짐
    // 2) 또는 localStorage.setItem('introDevSkip','1') 로 켜기 / removeItem 으로 끄기
    function isDevSkip() {
        const q = new URLSearchParams(location.search);
        return q.get('devskip') === '1' || localStorage.getItem('introDevSkip') === '1';
    }

    // 개발용 즉시 스킵 실행 (인트로 전부 생략)
    function fastSkip() {
        // 진행 중단
        cancelled = true;

        // 인트로 UI/상태 정리
        $('.main_wrap').stop(true, true).addClass('skip');
        $('.cursor_skip2').removeClass('show');
        $('.main_skip_wrap').hide();

        // 바로 최종 단계로 (finalReveal 내부에서 1.6초 후 end/popup/스크롤해제 실행됨)
        finalReveal();
    }

    // 초기화
    $(function() {
        if (isDevSkip()) {
            // 개발모드: 인트로 생략
            fastSkip();
        } else {
            // 평소대로 인트로 진행
            scheduleSkipUI();
            bindSkipButton();
            runIntroSequence();
        }
    });

    // 인트로 애니메이션 끝

    win_w = $(window).width();
    if (win_w > 1400) {
        //

        const cursor = document.querySelector('#cursor');
        const cursorCircle = cursor.querySelector('.cursor__circle');

        const mouse = {
            x: -100,
            y: -100
        }; // mouse pointer's coordinates
        const pos = {
            x: 0,
            y: 0
        }; // cursor's coordinates
        const speed = 0.2; // between 0 and 1

        const updateCoordinates = e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        window.addEventListener('mousemove', updateCoordinates);


        function getAngle(diffX, diffY) {
            return Math.atan2(diffY, diffX) * 180 / Math.PI;
        }

        function getSqueeze(diffX, diffY) {
            const distance = Math.sqrt(
                Math.pow(diffX, 2) + Math.pow(diffY, 2)
            );
            const maxSqueeze = 0.15;
            const accelerator = 1500;
            return Math.min(distance / accelerator, maxSqueeze);
        }


        const updateCursor = () => {
            const diffX = Math.round(mouse.x - pos.x);
            const diffY = Math.round(mouse.y - pos.y);

            pos.x += diffX * speed;
            pos.y += diffY * speed;

            const angle = getAngle(diffX, diffY);
            const squeeze = getSqueeze(diffX, diffY);

            const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
            const rotate = 'rotate(' + angle + 'deg)';
            const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

            cursor.style.transform = translate;
            cursorCircle.style.transform = rotate + scale;
        };

        function loop() {
            updateCursor();
            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);



        const cursorModifiers = document.querySelectorAll('[cursor-class]');

        cursorModifiers.forEach(curosrModifier => {
            curosrModifier.addEventListener('mouseenter', function() {
                const className = this.getAttribute('cursor-class');
                cursor.classList.add(className);
            });

            curosrModifier.addEventListener('mouseleave', function() {
                const className = this.getAttribute('cursor-class');
                cursor.classList.remove(className);
            });
        });

        //main
        var full_move = true;
        $("#section1").on("DOMMouseScroll mousewheel wheel", function(event, delta) {
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
            if (delta > 0) {
                if ($('.main_wrap').hasClass('end') == true) {
                    $('.main_wrap').removeClass('on2 end2 on end').addClass('on end');
                } else if ($('.main_wrap').hasClass('end2') == true) {
                    // $('.navi,.ham').addClass('white');
                    $('.main_wrap').removeClass('on2 end2 on end').addClass('on');
                    setTimeout(function() {
                        $('.main_wrap').addClass('end');
                    }, TRANSITION);
                }
            } else if (delta < 0) {
                if ($('.main_wrap').hasClass('end2') == true) {
                    $('body').off('scroll touchmove mousewheel');
                    $.fn.fullpage.moveTo(2);
                } else if ($('.main_wrap').hasClass('end') == true) {
                    // $('.navi,.ham').removeClass('white');
                    $('.main_wrap').removeClass('on end').addClass('on2');
                    setTimeout(function() {
                        $('.main_wrap').addClass('end2');
                    }, TRANSITION);
                }
            }
        });

        //location
        var full_move = true;
        $("#section2").on("DOMMouseScroll mousewheel wheel", function(event, delta) {
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
            if (delta > 0) {
                if ($('.location_wrap').hasClass('end') == true) {
                    $.fn.fullpage.moveTo(1);
                } else if ($('.location_wrap').hasClass('end2') == true) {
                    $('.location_wrap').removeClass('on2 end2').addClass('on');
                    setTimeout(function() {
                        $('.location_wrap').addClass('end');
                    }, TRANSITION);
                }
            } else if (delta < 0) {
                if ($('.location_wrap').hasClass('end2') == true) {
                    $.fn.fullpage.moveTo(3);
                } else if ($('.location_wrap').hasClass('end') == true) {
                    $('.location_wrap').removeClass('on end').addClass('on2');
                    setTimeout(function() {
                        $('.location_wrap').addClass('end2');
                    }, TRANSITION);
                }
            }
        });

        //premium
        var full_move = true;
        $("#section3").on("DOMMouseScroll mousewheel wheel", function(event, delta) {
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
            if (delta > 0) {
                if ($('.high_wrap').hasClass('end') == true) {
                    $.fn.fullpage.moveTo(2);
                } else if ($('.high_wrap').hasClass('end2') == true) {
                    // $('.navi,.ham').removeClass('white');
                    $('.high_wrap').removeClass('on2 end2').addClass('on');
                    setTimeout(function() {
                        $('.high_wrap').addClass('end');
                    }, TRANSITION);
                } else if ($('.high_wrap').hasClass('end3') == true) {
                    $('.high_wrap').removeClass('on3 end3').addClass('on2');
                    setTimeout(function() {
                        $('.high_wrap').addClass('end2');
                    }, TRANSITION);
                }
            } else if (delta < 0) {
                if ($('.high_wrap').hasClass('end3') == true) {
                    $.fn.fullpage.moveTo(4);
                } else if ($('.high_wrap').hasClass('end') == true) {
                    $('.high_wrap').removeClass('on end').addClass('on2');
                    setTimeout(function() {
                        $('.high_wrap').addClass('end2');
                    }, TRANSITION);
                } else if ($('.high_wrap').hasClass('end2') == true) {
                    $('.high_wrap').removeClass('on2 end2').addClass('on3');
                    setTimeout(function() {
                        $('.high_wrap').addClass('end3');
                    }, TRANSITION);
                }
            }
        });

        // 어떤 섹션에서 white를 사용할지 정의
        function isWhiteSection(idx) {
            // 예시: 3번 섹션만 흰색 네비
            return [1, 2, 3].includes(idx);
        }

        $('#fullpage').fullpage({
            navigation: false,
            css3: true,
            verticalCentered: true,
            scrollingSpeed: TRANSITION,
            keyboardScrolling: false,

            // 초기 렌더 완료 시: 시작 섹션 기준으로 1회만 세팅
            afterRender: function() {
                // fullPage는 첫 섹션이 1부터 시작
                const startIndex = 1;
                $('.navi,.ham').toggleClass('white', isWhiteSection(startIndex));
            },

            // 여기서만 white를 관리한다!
            onLeave: function(index, nextIndex, direction) {
                // 1) 이동 시작 시점에 "다음 섹션" 기준으로 테마 결정
                $('.navi,.ham').toggleClass('white', isWhiteSection(nextIndex));

                // 2) 섹션 전환 애니메이션 (기존 로직 유지)
                if (index === 1 && direction === 'down') {
                    $('.main_wrap').removeClass('end');
                    setTimeout(() => {
                        $('.main_wrap').removeClass('on');
                    }, TRANSITION);

                    $('.location_wrap').addClass('on');
                    setTimeout(() => {
                        $('.location_wrap').addClass('end');
                    }, TRANSITION);
                }

                if (index === 2 && direction === 'up') {
                    $('.main_wrap').removeClass('on end');
                    $('.location_wrap').removeClass('end');
                    setTimeout(() => {
                        $('.location_wrap').removeClass('on');
                    }, TRANSITION);

                    $('.main_wrap').addClass('on2');
                    setTimeout(() => {
                        $('.main_wrap').addClass('end2');
                    }, TRANSITION);
                } else if (index === 2 && direction === 'down') {
                    $('.location_wrap').removeClass('end');
                    setTimeout(() => {
                        $('.location_wrap').removeClass('on');
                    }, TRANSITION);

                    $('.high_wrap').addClass('on');
                    setTimeout(() => {
                        $('.high_wrap').addClass('end');
                    }, TRANSITION);
                }

                if (index === 3 && direction === 'up') {
                    $('.high_wrap').removeClass('end');
                    setTimeout(() => {
                        $('.high_wrap').removeClass('on');
                    }, TRANSITION);

                    $('.location_wrap').addClass('on2');
                    setTimeout(() => {
                        $('.location_wrap').addClass('end2');
                    }, TRANSITION);
                } else if (index === 3 && direction === 'down') {
                    //   $('.high_wrap').removeClass('end');
                    //   setTimeout(() => { $('.high_wrap').removeClass('on'); }, TRANSITION);

                    //   $('.contact_wrap').addClass('on');
                    //   setTimeout(() => { $('.contact_wrap').addClass('end'); }, TRANSITION);

                    $('.footer').addClass('on');
                    setTimeout(() => {
                        $('.footer').addClass('end');
                    }, TRANSITION);
                    $('header,.navi,.ham').fadeOut();
                }

                // if (index === 4 && direction === 'up'){
                //   $('.navi,.ham').addClass('white');
                //   $('.contact_wrap').removeClass('end');
                //   setTimeout(() => { $('.contact_wrap').removeClass('on'); }, TRANSITION);

                //   $('.high_wrap').addClass('on3');
                //   setTimeout(() => { $('.high_wrap').addClass('end3'); }, TRANSITION);
                // } else if (index === 4 && direction === 'down'){
                //   $('.footer').addClass('on');
                //   setTimeout(() => { $('.footer').addClass('end'); }, TRANSITION);
                //   $('header,.navi,.ham').fadeOut();
                // }

                if (index === 4 && direction === 'up') {
                    $('.footer').removeClass('on');
                    setTimeout(() => {
                        $('.footer').removeClass('end');
                    }, TRANSITION);
                    $('header,.navi,.ham').fadeIn();
                }
            },

            // afterLoad에서는 white를 만지지 않는다 (충돌 방지)
            afterLoad: function(anchorLink, index) {
                // 스크롤 허용 관련만 유지 (필요 시)
                $.fn.fullpage.setAllowScrolling(true);
                $.fn.fullpage.setKeyboardScrolling(false);
            }
        });

        /* -----------------------------
           유틸 & 클릭 핸들러(white 미터치)
        ------------------------------*/

        function closeSiteMenus() {
            ham = 0;
            $('.ham').removeClass("active");
            // $('.site_map').removeClass('active')
            // $('.site_bg').removeClass('active')
            $('.gnb>div').stop().fadeIn(1000)
            $('.site_wrap,.site_bg').removeClass("active");
            $('.navi,.ham').removeClass("over");
            $('body').off('scroll touchmove mousewheel');
        }

        function resetWrapClasses() {
            // $('.section > div').each(function () {
            // 	$(this).find('div').addBack().each(function () {
            // 	const m = this.className && this.className.match(/\b[A-Za-z0-9_-]*_wrap\b/);
            // 	if (m) {
            // 		this.className = m[0];
            // 	}
            // 	});
            // });
        }

        $(document).on('click', '.top_bt', function() {
            $.fn.fullpage.moveTo(1);

            resetWrapClasses();

            $('.main_wrap').removeClass('on2 on3 on4 end2 end3 end4').addClass('on');
            setTimeout(() => {
                $('.main_wrap').addClass('end').removeClass('on2 on3 on4 end2 end3 end4');
                $('.location_wrap').removeClass('on end on2 end2');
                $('.premium_wrap').removeClass('on end on2 end2 on3 end3 on4 end4');
                $('.contact_wrap').removeClass('on end');
            }, TRANSITION);
        });

        $(document).on('click', '.menu1', function() {
            $.fn.fullpage.moveTo(1);

            resetWrapClasses();

            $('.navi,.ham').removeClass('white');
            $('.main_wrap').removeClass('on on2 end end2 on3 end3').addClass('on3');
            setTimeout(() => {
                $('.main_wrap').addClass('end3').removeClass('on end');
                $('.premium_wrap').removeClass('on2 end2 on3 end3 on4 end4');
            }, TRANSITION);

            closeSiteMenus();
        });

        $(document).on('click', '.menu2', function() {
            $.fn.fullpage.moveTo(2);

            resetWrapClasses();

            $('.navi,.ham').removeClass('white');
            $('.location_wrap').removeClass('on on2 end end2').addClass('on');
            setTimeout(() => {
                $('.location_wrap').addClass('end');
                $('.main_wrap').removeClass('end2 on2 end on').addClass('on3 end3');
                $('.premium_wrap').removeClass('on2 end2 on3 end3 on4 end4');
            }, TRANSITION);

            closeSiteMenus();
        });

        $(document).on('click', '.menu3', function() {
            $.fn.fullpage.moveTo(3);

            resetWrapClasses();

            $('.navi,.ham').removeClass('white');
            $('.premium_wrap').removeClass('on on2 end end2 on3 end3 on4 end4').addClass('on');
            setTimeout(() => {
                $('.premium_wrap').addClass('end');
                $('.main_wrap').removeClass('end2 on2 end on').addClass('on3 end3');
                $('.location_wrap').removeClass('on end').addClass('on2 end2');
            }, TRANSITION);

            closeSiteMenus();
        });

        $(document).on('click', '.menu4', function() {
            $.fn.fullpage.moveTo(4);

            resetWrapClasses();

            $('.contact_wrap').addClass('on');
            setTimeout(() => {
                $('.contact_wrap').addClass('end');
                $('.main_wrap').removeClass('end2 on2 end on').addClass('on3 end3');
                $('.location_wrap').removeClass('on end').addClass('on2 end2');
                $('.premium_wrap').removeClass('on end on2 end2 on3 end3').addClass('on4 end4');
            }, TRANSITION);

            closeSiteMenus();
        });


    } else if (win_w <= 1400) {


        $('body.main .navi,body.main .ham').addClass('white');
        $('body.sub .ham').addClass('white').delay(0).fadeIn(1000);

        $(function() {
            const GAP = 57;
            const sections = {
                '.menu1': '.main_sum_box',
                '.menu2': '#section2',
                '.menu3': '#section3',
                '.menu4': '#section4',
            };

            $.each(sections, function(menu, target) {
                $(document).on('click', menu + ' a', function(e) {
                    e.preventDefault();

                    const $target = $(target);
                    if (!$target.length) return;

                    const top = $target.offset().top - GAP;

                    window.scrollTo({
                        top,
                        behavior: 'smooth'
                    });

                    ham = 0;
                    $('.ham').removeClass("active");
                    $('.site_list2').removeClass("open");
                    $('.site_map,.site_bg').removeClass("active");
                    $('.navi,.ham').removeClass("over");
                    $('body').off('scroll touchmove mousewheel');
                });
            });
        });


    }

});


$(window).scroll(function() {

    sc = $(window).scrollTop();
    footerTop = $('.footer').offset().top - $(window).height()
    mainH = $('.main01').height()

    if (sc > 21) {
        $('.navi').addClass('active')
        $('.ham').addClass('active2')
    }
    if (sc < 21) {
        $('.navi').removeClass('active')
        $('.ham').removeClass('active2')
    }

    if (mainH <= sc) {
        $('.main_wrap').removeClass('on');
    } else {
        $('.main_wrap').addClass('on');
    }

    if (footerTop <= sc) {
        $('.footer').addClass('active');
    } else {
        $('.footer').removeClass('active');
    }

});
