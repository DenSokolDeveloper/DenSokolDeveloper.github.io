$(function (){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        dots: true,
        autoplay: true,
        dotsClass: "slider-dots",
        focused: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.png" alt="">'
    });

});
