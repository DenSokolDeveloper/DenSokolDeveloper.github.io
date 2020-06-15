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

    $('#sendMail').on('click',function () {
        let email = $('#email').val().trim();
        let name = $('#name').val().trim();
        let phone = $('#phone').val().trim();
        let message = $('#message').val().trim();

        if(email === ""){
            $('#errorMess').text('Введите емаил');
            return false;
        }else  if(name === ""){
            $('#errorMess').text('Введите имя');
            return false;
        }else  if(phone === ""){
            $('#errorMess').text('Введите телефон');
            return false;
        }else  if(message.length < 5 ){
            $('#errorMess').text('Введите сообщение не меньше 5 символов');
            return false;
        }
        $('#errorMess').text('');

        $.ajax({
            url: 'ajax/mail.php',
            type: 'POST',
            cache: false,
            data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
            dataType: 'html',
            beforeSend: function () {
              $('#sendMail').prop('disabled', true);
            },
            success: function (data) {
                if (!data)
                    alert('Error')
                else
                    $('#mailForm').trigger('reset');
                $('#sendMail').prop('disabled', false);
            }
        })
    })
});
