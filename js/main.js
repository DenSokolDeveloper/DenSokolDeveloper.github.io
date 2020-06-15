$(function () {

        //E-mail Ajax Send
        $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });

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

});
