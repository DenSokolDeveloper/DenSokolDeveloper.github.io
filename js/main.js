$(function () {
    //HEADER
    let header = $('.header'),
        introH= $('.intro').innerHeight(),
        scrollOffset=$(window).scrollTop();//переменная по умолчанию


    //header fixed
    checkScroll(scrollOffset);


    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset<=introH){
            header.css('background-color','transparent');
        }else   {
            header.css('background-color','#fff');
        }
    }
    //HEADER


    //MENU
    $('.burger').on('click',function (event) {
        event.preventDefault();
        $(this).css('visibility','hidden');
        $('.burger-content').animate({left:'0%'});
        $('.menu').addClass('active');
        $('.burger__close').addClass('active');
        $('.burger__close__item').addClass('active');
    });
    $('.burger__close').on('click', function (event) {
        event.preventDefault();
        $('.burger__close__item').removeClass('active');
        $('.burger-content').animate({left:'-200%'});
        setTimeout(()=>{
            $('.burger__close').removeClass('active');
            $('.burger').css('visibility','visible');
            $('.menu').removeClass('active');
        },300);
    });
    //MENU
    //SKILL-BAR
    $(".skill").each(function(){ // Используем each (циклический метод)
        $(this).find(".skill-bar").animate({ // Создаём анимацию
            width: $(this).attr("data-percent") // Анимируем ширину
        },2000)
    });
    //SKILL-BAR

    /*fullpage.js*/
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        fitToSection: false,
        anchors: ['online-store','test-task','coffee-machine','tobacco-seller','landing1','landing2','landing3', 'contacts'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Online shop','Test task','Coffee machine','Tobacco seller','Landing Page','Landing Page','Landing Page','Contacts'],

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
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/back.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/next.svg" alt="">'
    });
    /*slider*/
    /*particles*/
    $('#clicker').on('click', function (event) {
        event.preventDefault();
        $('.particles-js').toggleClass('disabled');
    });
    /*particles*/

    /*SCROLL*/
    $('.goto').on( 'click', function(){
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({
                    scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
                }, 700 // скорость прокрутки
            );
        }
        return false;
    });
    /*SCROLL*/

});

function showModal() {
    $('.overlay').fadeIn(400, function () {
        $('.modal').css('display','flex').animate({opacity: 1}, 200);
    });
    $('.overlay, .modal__close').on('click',function () {
        $('.modal').animate({opacity: 0}, 200, function () {
            $(this).css('display', 'none');
            $('.overlay').fadeOut(400);
        });
    });
};




function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}
function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("demo1");

    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "block";
    dots[slideIndex1-1].className += " active";
}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}
function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("demo2");

    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active";
}
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}
function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    let dots = document.getElementsByClassName("demo3");

    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active";
}
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}
function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    let dots = document.getElementsByClassName("demo4");

    if (n > slides.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4-1].style.display = "block";
    dots[slideIndex4-1].className += " active";
}
function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}
function showSlides5(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides5");
    let dots = document.getElementsByClassName("demo5");

    if (n > slides.length) {slideIndex5 = 1}
    if (n < 1) {slideIndex5 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex5-1].style.display = "block";
    dots[slideIndex5-1].className += " active";
}
function currentSlide6(n) {
    showSlides6(slideIndex6 = n);
}
function showSlides6(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides6");
    let dots = document.getElementsByClassName("demo6");

    if (n > slides.length) {slideIndex6 = 1}
    if (n < 1) {slideIndex6 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex6-1].style.display = "block";
    dots[slideIndex6-1].className += " active";
}
function currentSlide7(n) {
    showSlides7(slideIndex7 = n);
}
function showSlides7(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides7");
    let dots = document.getElementsByClassName("demo7");

    if (n > slides.length) {slideIndex7 = 1}
    if (n < 1) {slideIndex7 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex7-1].style.display = "block";
    dots[slideIndex7-1].className += " active";
}
let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
let slideIndex5 = 1;
let slideIndex6 = 1;
let slideIndex7 = 1;

showSlides1(slideIndex1);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);
showSlides5(slideIndex5);
showSlides6(slideIndex6);
showSlides7(slideIndex7);
