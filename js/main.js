$(function () {

    //MENU
    $('.burger').on('click',function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.burger-content').toggleClass('active');
        $('.menu').toggleClass('active');
        $('.burger__item').toggleClass('active');
    });
    //MENU
    //SKILL-BAR
    $(".skill").each(function(){ // Используем each (циклический метод)
        $(this).find(".skill-bar").animate({ // Создаём анимацию
            width: $(this).attr("data-percent") // Анимируем ширину
        },2000)
    })
    //SKILL-BAR

    /*fullpage.js*/
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        sectionsColor: ['green','yellow','black']
    });
    /*fullpage.js*/

    /*accordion*/
    $('[data-collapse]').on('click',function (event) {
        event.preventDefault();
        var $this=$(this),
            blockId= $this.data('collapse');

        $this.toggleClass('active');

    });
    /*accordion*/
    /*slider*/
    $('.works__slider').slick({
       infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/back.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/next.svg" alt="">'
    });
    /*slider*/
});
