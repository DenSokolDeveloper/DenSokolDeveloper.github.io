$(function () {

    $('.burger').on('click',function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.burger-content').toggleClass('active').animate({left: '0'},600);
        $('.menu').toggleClass('active');
        $('.burger__item').toggleClass('active');
    });

});
