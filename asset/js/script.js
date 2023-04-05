$(document).ready(function () {

    //****************** header ******************//

    $(window).scroll(function () {
        curr = $(this).scrollTop();
        if (curr > 0) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    })


    //****************** header 끝 ******************//
    const text1 = new SplitType('.sc-text .title1', {
        types: 'words, chars',
    });
    const text2 = new SplitType('.sc-text .title2', {
        types: 'words, chars',
    });
    intro = gsap.timeline({});
    intro.addLabel('a')
        .from(text1.chars, {
            yPercent: 100,
            stagger: {
                amount: 0.5,
                from: "center"
            }
        }, 'a')
        .from(text2.chars, {
            delay: 0.5,
            yPercent: 100,
            stagger: {
                amount: 0.5,
                from: "center"
            }
        }, 'a')
        .to('.sc-text .line', 2, {
            top: 0,
            height: '100%',
            stagger: {
                amount: 0.5,
                from: "center"
            }
        }, 'a')
        .to('.sc-text .vt-line', 2, {
            left: 0,
            width: '100%',
        }, 'a+=1')
        .to('.sc-text .line,.sc-text .vt-line', {
            opacity: 0,
        })
        .to('.header .line', 2, {
            width: '100%'
        })




    intro = gsap.timeline({});
    intro.addLabel('b')
        .to('.sc-text .group-visual img', {
            scrollTrigger: {
                trigger: ".sc-text .group-visual",
                start: "0% 100%", 
                end: "100% 0%", 
                scrub: 0,

            },
            scale: 1.2,
        }, 'b')
        .to('.sc-text .group-visual .text-box', {
            scrollTrigger: {
                trigger: '.sc-text .group-visual',
                start: "0% 100%",
                end: "100% 0%",
                scrub: 0,
            },
            scale: 1.3,
        }, 'b')



    //****************** main ******************//    
    var swiper = new Swiper(".slide01 .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 25,
        draggable: true,
        pagination: {
            el: ".slide01 .fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".slide01 .next",
            prevEl: ".slide01 .prev",
        },
    });
    var swiper = new Swiper(".slide02 .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 25,
        draggable: true,
        pagination: {
            el: ".slide02 .fraction",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return `IMAGES ${current}/${total}`;
            }
        },
        navigation: {
            nextEl: ".slide02 .next",
            prevEl: ".slide02 .prev",
        },
    });
    var swiper = new Swiper(".slide03 .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 25,
        draggable: true,
        pagination: {
            el: ".slide03 .fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".slide03 .next",
            prevEl: ".slide03 .prev",
        },
    });





    $('.sc-domestic .group-project').each(function (index, elemnet) {
        gsap.to($(this).find('.bg'), 1, {
            scrollTrigger: {
                trigger: $(this),
                start: "0% 70%", 
                end: "100% 0%", 
            },
            yPercent: 100,
            stagger: 0.1
        })

        gsap.to($(this).find('.line, .line1, .vt-line'), 2, {
            scrollTrigger: {
                trigger: $(this),
                start: "0% 70%", 
                end: "100% 0%", 
            },

            opacity: '1'
        })

    });



    $('.sc-overseas .hotel-item').each(function (index, elemnet) {
        gsap.to($(this).find('.bg'), 1, {
            scrollTrigger: {
                trigger: $(this),
                start: "0% 70%", 
                end: "100% 0%",
            },
            yPercent: 100,
            // stagger: .3,
        })

    });


    line = gsap.timeline({
        scrollTrigger: {
            trigger:'.sc-overseas',
            start: "90% bottom",
            end: '0% 100%',
            // markers:true,
        }
    })

    line
    .to('.line22',2,{left: 0, width: '100%'})


    $('.sc-promo .link-paper').each(function (index, elemnet) {
        gsap.to($(this).find('.bg'), 1, {
            scrollTrigger: {
                trigger: $(this),
                start: "0% 50%", 
                end: "100% 0%", 
            },
            yPercent: 100,
            // stagger: .3,
        })

    });

   
    //****************** main 끝 ******************//    




}) //////////////////// 지우지 마세요 //////////////////////