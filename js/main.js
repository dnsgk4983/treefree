// 메뉴
if ($(window).width > 640 ) {
    $(".tre-btn").click(function(){
        $(".navi").css("right","0");
        $(".triple-e").css("display","none");
        $(".triple-e-menu").css("display","block");
    });
    $(".close-btn").click(function(){
        $(".navi").css("right","-100%");
        $(".triple-e").css("display","block");
        $(".triple-e-menu").css("display","none");
    });
}


var swiper = new Swiper('.main-wrap .swiper-container' , {
    autoplay: false,
    loop: true,
    spaceBetween: 161,
    slidesPerView: 3,
    navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
    },
    breakpoints : {
        1240 : {
            slidesPerView: 3,
            spaceBetween: 100,
        },
        1024 : {
            slidesPerView: 2,
            spaceBetween: 60
        },
        768 : {
            slidesPerView: 2,
            spaceBetween: 60
        }
    }
});

if ($(window).width() > 768) {
    var newSwiper = new Swiper('.news-swiper .swiper-container', {
        autoplay: false,
        loop: true, 
        spaceBetween: 176,
        slidesPerView: 3,
        navigation : {
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev",
        },
        breakpoints : {
            1024 : {
                spaceBetween: 80,
                slidesPerView: 2,
            },
        },
    });
}



var serViceSwiper = new Swiper('.service-bg .swiper-container', {
    autoplay: false,
    loop: true, 
    slidesPerView: 1,
    navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
    },
    pagination : {
        el : ".swiper-pagination",
        clickable: true
    }
})

// Recruit 
$(".recruit-tab li:first-child").click(function() {
    $(".recruit-tab li").removeClass("active");
    $(".recruit-content").removeClass("show");
    $(this).addClass("active");
    $(".recruit-content-1").addClass("show");
});

$(".recruit-tab li:nth-child(2)").click(function() {
    $(".recruit-tab li").removeClass("active");
    $(".recruit-content").removeClass("show");
    $(this).addClass("active");
    $(".recruit-content-2").addClass("show");
});

$(".recruit-tab li:nth-child(3)").click(function() {
    $(".recruit-tab li").removeClass("active");
    $(".recruit-content").removeClass("show");
    $(this).addClass("active");
    $(".recruit-content-3").addClass("show");
});

$(".recruit-tab li:nth-child(4)").click(function() {
    $(".recruit-tab li").removeClass("active");
    $(".recruit-content").removeClass("show");
    $(this).addClass("active");
    $(".recruit-content-4").addClass("show");
});