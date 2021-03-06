$(function () {
    //PRELOADER
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow': 'visible'});
    });
    //PRELOADER

    //AOS ANIMATION
    AOS.init({  // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 900, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    //AOS ANIMATION


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
            header.removeClass('active');
        }else   {
            header.addClass('active');
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
        anchors: ['dutch-landing', 'dutch-studio', 'superhero', 'online-store', 'kanban', 'angular-todo', 'posts', 'todo', 'test-task', 'coffee-machine', 'bootstrap-land', 'landing1', 'landing2', 'landing3', 'contacts'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['DutchSwap HomePage', 'DutchSwap Studio', 'SuperHero App', 'Online shop', 'KanbanBord', 'ToDo App on Angular', 'Posts','Todo Application','Test task','Coffee machine','Bootstrap4 Game Landing','Landing Page','Landing Page','Landing Page','Contacts'],

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
function currentSlide8(n) {
    showSlides8(slideIndex8 = n);
}
function showSlides8(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides8");
    let dots = document.getElementsByClassName("demo8");

    if (n > slides.length) {slideIndex8 = 1}
    if (n < 1) {slideIndex8 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex8-1].style.display = "block";
    dots[slideIndex8-1].className += " active";
}
function currentSlide9(n) {
    showSlides9(slideIndex9 = n);
}
function showSlides9(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides9");
    let dots = document.getElementsByClassName("demo9");

    if (n > slides.length) {slideIndex9 = 1}
    if (n < 1) {slideIndex9 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex9-1].style.display = "block";
    dots[slideIndex9-1].className += " active";
}
function currentSlide10(n) {
    showSlides10(slideIndex10 = n);
}
function showSlides10(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides10");
    let dots = document.getElementsByClassName("demo10");

    if (n > slides.length) {slideIndex10 = 1}
    if (n < 1) {slideIndex10 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex10-1].style.display = "block";
    dots[slideIndex10-1].className += " active";
}
function currentSlide11(n) {
    showSlides11(slideIndex11 = n);
}
function showSlides11(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides11");
    let dots = document.getElementsByClassName("demo11");

    if (n > slides.length) {slideIndex11 = 1}
    if (n < 1) {slideIndex11 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex11-1].style.display = "block";
    dots[slideIndex11-1].className += " active";
}
function currentSlide12(n) {
    showSlides12(slideIndex12 = n);
}
function showSlides12(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides12");
    let dots = document.getElementsByClassName("demo12");

    if (n > slides.length) {slideIndex12 = 1}
    if (n < 1) {slideIndex12 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex12-1].style.display = "block";
    dots[slideIndex12-1].className += " active";
}
function currentSlide13(n) {
    showSlides13(slideIndex13 = n);
}
function showSlides13(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides13");
    let dots = document.getElementsByClassName("demo13");

    if (n > slides.length) {slideIndex13 = 1}
    if (n < 1) {slideIndex13 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex13-1].style.display = "block";
    dots[slideIndex13-1].className += " active";
}
function currentSlide14(n) {
    showSlides14(slideIndex14 = n);
}
function showSlides14(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides14");
    let dots = document.getElementsByClassName("demo14");

    if (n > slides.length) {slideIndex14 = 1}
    if (n < 1) {slideIndex14 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex14-1].style.display = "block";
    dots[slideIndex14-1].className += " active";
}
let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
let slideIndex5 = 1;
let slideIndex6 = 1;
let slideIndex7 = 1;
let slideIndex8 = 1;
let slideIndex9 = 1;
let slideIndex10 = 1;
let slideIndex11 = 1;
let slideIndex12 = 1;
let slideIndex13 = 1;
let slideIndex14 = 1;

showSlides1(slideIndex1);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);
showSlides5(slideIndex5);
showSlides6(slideIndex6);
showSlides7(slideIndex7);
showSlides8(slideIndex8);
showSlides9(slideIndex9);
showSlides10(slideIndex10);
showSlides11(slideIndex11);
showSlides12(slideIndex12);
showSlides13(slideIndex13);
showSlides14(slideIndex14);
