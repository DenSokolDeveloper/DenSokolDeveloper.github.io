$(function () {

    $('.burger').on('click',function (event) {
        event.preventDefault();
        $('.burger-content').toggleClass('active');
    });
    $('.slider').slick({
       vertical: true,
       verticalSwiping: true,
       slidesToShow: 1,
       dots: true,
       arrows: false
    });
});
