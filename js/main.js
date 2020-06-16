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
});
