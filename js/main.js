// 메뉴
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


var swiper = new Swiper('.main-wrap .swiper-container' , {
    autoplay: false,
    loop: true,
    spaceBetween: 161,
    slidesPerView: 3,
    navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
    }
});

var newSwiper = new Swiper('.news-swiper .swiper-container', {
    autoplay: false,
    loop: true, 
    spaceBetween: 176,
    slidesPerView: 3,
    navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
    },
    breakpoints : {
        767 : {
            direction: 'vertical',
            loop: false,
            spaceBetween: 0,
            slidesPerView: 3,
            clickable: false
        },
        768 : {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 176,
            slidesPerView: 3,
            clickable: true,
        },
    },
});



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

window.addEventListener("load",ToggleSlider);
function ToggleSlider() {
    var w = window.innerWidth;
    var container = document.getElementsByClassName("swiper-container");
    if ( w < 375) { 
        var newSwiper = new Swiper('.news-swiper .swiper-container', {
            autoplay: false,
            loop: true, 
            spaceBetween: 176,
            slidesPerView: 3,
            navigation : {
                nextEl : ".swiper-button-next",
                prevEl : ".swiper-button-prev"
            },
        });
    }
    else {
        delete Swiper
    }
}