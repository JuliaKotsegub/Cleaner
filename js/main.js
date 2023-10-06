
function animateValue(element, start, end, duration) {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

const countElements = document.querySelectorAll(".count");
const triggerElement = document.querySelector(".count-block"); // Блок, який ви хочете використовувати як тригер для анімації
let hasTriggered = false;

function startAnimationIfVisible() {
    if (!hasTriggered) {
        const rect = triggerElement.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight;
        if (isVisible) {
            countElements.forEach((element) => {
                const endValue = parseInt(element.textContent, 10); // Вкажіть бажане кінцеве значення тут
                animateValue(element, 0, endValue, 2000); // 2000 мілісекунд (2 секунди) для анімації
            });
            hasTriggered = true;
        }
    }
}

// Спробуйте запустити анімацію при завантаженні сторінки і при прокручуванні
window.addEventListener("load", startAnimationIfVisible);
window.addEventListener("scroll", startAnimationIfVisible);

//Таби 

function showTab(tabIndex) {
    const tabPanes = document.querySelectorAll('.tab-pane');
    const tabs = document.querySelectorAll('.tab');

    tabPanes.forEach((pane, index) => {
        if (index === tabIndex - 1) {
            pane.classList.add('active');
        } else {
            pane.classList.remove('active');
        }
    });

    tabs.forEach((tab, index) => {
        if (index === tabIndex - 1) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// Показати перший таб за замовчуванням
showTab(1);

function showTab(tabIndex) {
    const tabPanes = document.querySelectorAll('.tab-pane');
    const tabs = document.querySelectorAll('.tab');

    tabPanes.forEach((pane, index) => {
        if (index === tabIndex - 1) {
            pane.classList.add('active');
            // Зміна значка (картинки) при активному табі
            document.getElementById('tabIcon' + tabIndex).src = './images/Home/icon1.png';
        } else {
            pane.classList.remove('active');
            // Зміна значка (картинки) при неактивному табі
            document.getElementById('tabIcon' + (index + 1)).src = './images/Home/icon2.png';
        }
    });

    tabs.forEach((tab, index) => {
        if (index === tabIndex - 1) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.carousel-slide');
    var arrows = document.querySelectorAll('.reviews-arrow');
    var currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(function(slide) {
        slide.classList.remove('active');
      });
      slides[index].classList.add('active');
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }
  
    arrows.forEach(function(arrow) {
      arrow.addEventListener('click', function() {
        if (this.classList.contains('prev')) {
          prevSlide();
        } else if (this.classList.contains('next')) {
          nextSlide();
        }
      });
    });
  
    showSlide(currentSlide);
  });


$(document).ready(function(){
    $('.slider-container').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: $('.carousel-arrow.next'), 
        nextArrow: $('.carousel-arrow.prev'), 
    });
    // Настройки для маленьких экранов (< 400px)
    var smallScreenSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: $('.carousel-arrow.next'), 
        nextArrow: $('.carousel-arrow.prev'), 
    };
  
    // Настройки для средних экранов (>= 400px и < 768px)
    var mediumScreenSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: $('.carousel-arrow.next'), 
        nextArrow: $('.carousel-arrow.prev'), 
    };
  
    // Настройки для больших экранов (>= 768px)
    var largeScreenSettings = {
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: $('.carousel-arrow.next'), 
        nextArrow: $('.carousel-arrow.prev'), 
    };
  
    // Функция для обновления слайдера в зависимости от размера экрана
    function updateSlider() {
        var windowWidth = $(window).width();
        
        if (windowWidth < 400) {
            $('.slider-container').slick('unslick');
            $('.slider-container').slick(smallScreenSettings);
        } else if (windowWidth >= 400 && windowWidth < 790) {
            $('.slider-container').slick('unslick');
            $('.slider-container').slick(mediumScreenSettings);
        } else {
            $('.slider-container').slick('unslick');
            $('.slider-container').slick(largeScreenSettings);
        }
    }
  
    // Инициализация слайдера при загрузке страницы
    updateSlider();
  
    // Обновление слайдера при изменении размера окна
    $(window).on('resize', function() {
        updateSlider();
    });
  });


// Slider 


$(document).ready(function () {
    var $slider = $('.collagge');

    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.collagge-arrow.prev'),
      nextArrow: $('.collagge-arrow.next'),
    });

   
    $('.dot').on('click', function () {
      var index = $(this).index();
      $slider.slick('slickGoTo', index);
    });

    
    $slider.on('afterChange', function (event, slick, currentSlide) {
      $('.dot').removeClass('active');
      $('.dot').eq(currentSlide).addClass('active');
    });
  });


  // Slider Before/After

  $("#slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    $('.foreground-img').css('width', `${sliderPos}%`)
    $('.slider-button').css('left', `calc(${sliderPos}% - 32px)`)
  });

  // Form

  $(document).ready(function () {
    $.datepicker.setDefaults($.datepicker.regional["uk"]);
    $("#datePicker").datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      minDate: 0 
    });
  });

  const button = document.querySelector('#button');
const select = document.querySelector("#dropdown");
const options = document.querySelectorAll(".option");
const selectLabel = document.querySelector('#select-label');

button.addEventListener("click", function (e) {
  e.preventDefault();
  toggleHidden(select);
});

options.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectTitle(e);
    toggleHidden(select);
  });
});

function toggleHidden(targetSelect) {
  // Закрити всі селектори, крім вказаного в аргументі
  const allSelects = document.querySelectorAll(".dropdown");
  allSelects.forEach(function (select) {
    if (select !== targetSelect) {
      select.classList.add("hidden");
    }
  });
  targetSelect.classList.toggle("hidden");
}

function setSelectTitle(e) {
  const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
  selectLabel.innerText = labelElement;
}

const buttonSecond = document.querySelector('#button-second');
const selectSecond = document.querySelector("#dropdown-second");
const optionsSecond = document.querySelectorAll(".option-second");
const selectLabelSecond = document.querySelector('#select-label-second');

buttonSecond.addEventListener("click", function (e) {
  e.preventDefault();
  toggleHidden(selectSecond);
});

optionsSecond.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectTitleSecond(e);
    toggleHidden(selectSecond);
  });
});

function setSelectTitleSecond(e) {
  const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
  selectLabelSecond.innerText = labelElement;
}


// Menu dropdown 

// var a_parent = document.querySelectorAll(".a_parent");
// var dd_menu_a = document.querySelectorAll(".dd_menu_a");

// a_parent.forEach(function (aitem) {

//   aitem.addEventListener("click", function () {
//     a_parent.forEach(function (aitem) {
//       aitem.classList.remove("active");
//     })
//     dd_menu_a.forEach(function (dd_menu_item) {
//       dd_menu_item.classList.remove("active");
//     })
//     aitem.classList.add("active");
//   })
// })

// dd_menu_a.forEach(function (dd_menu_item) {

//   dd_menu_item.addEventListener("click", function () {
//     dd_menu_a.forEach(function (dd_menu_item) {
//       dd_menu_item.classList.remove("active");
//     })
//     dd_menu_item.classList.add("active");
//   })
// })
const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content")
const tabContentWrapper = document.querySelector(".tab-content-wrapper");

const shiftTabs = (linkId) => {
  allTabs.forEach((tab, i) => {

    if (tab.id.includes(linkId)) {
      allTabs.forEach((tabItem) => {
        tabItem.style = `transform: translateY(-${i * 300}px);`;
      });
    }
  });
}

const ddMenuActivators = document.querySelectorAll(".menu__list-item.dd_menu-activ");

ddMenuActivators.forEach(function (activator) {
  activator.addEventListener("mouseenter", function () {
    const ddMenu = activator.querySelector(".dd_menu");
    ddMenu.style.display = "block";
  });

  activator.addEventListener("mouseleave", function () {
    const ddMenu = activator.querySelector(".dd_menu");
    ddMenu.style.display = "none";
  });
});

// Media nav

$(function() {
$('.header__btn-menu').on('click', function() {
$('.menu').toggleClass('menu--open');
 
if ($('.menu').hasClass('menu--open')) {
  $('.header__btn-menu').addClass('menu-open-style');
  $('.header__btn-menu-span').addClass('menu-open-styl');
  $('.logo').addClass('menu-open-logo');
} else {
  $('.header__btn-menu').removeClass('menu-open-style');
  $('.header__btn-menu-span').removeClass('menu-open-styl');
  $('.logo').removeClass('menu-open-logo');
}
});
}); 

// $(document).ready(function() {
//   var activeStep = 0; // Початковий активний крок (0 означає, що немає активного кроку)

//   // Функція для оновлення активного кроку при скролі
//   function updateActiveStep() {
//     var scrollTop = $(window).scrollTop();
//     $(".section-content").each(function() {
//       var contentTop = $(this).offset().top;
//       var contentBottom = contentTop + $(this).outerHeight();
//       var contentStep = $(this).data("step");

//       // Перевіряємо, чи скролите в верхній частині контенту
//       if (scrollTop >= contentTop && scrollTop < contentBottom) {
//         setActiveStep(contentStep);
//       }
//     });
//   }

//   // Функція для встановлення активного кроку
//   function setActiveStep(stepNumber) {
//     // Якщо новий крок відрізняється від поточного, виконуємо анімацію
//     if (stepNumber !== activeStep) {
//       activeStep = stepNumber;
//       $(".step").removeClass("active");
      
//       // Додаємо клас "active" всім крокам від першого до активного
//       for (var i = 1; i <= activeStep; i++) {
//         $(".step[data-step='" + i + "']").addClass("active");
//       }
      
//       animateBorderAndLine(activeStep);
//     }
//   }

//   // Функція для анімації бордера і лінії
//   function animateBorderAndLine(stepNumber) {
//     var animationDuration = 2200;
//     var progressHeight = stepNumber * 32 + "%";

//     // Анімація лінії
//     $("#line-progress").css({
//       height: progressHeight,
//       transition:  animationDuration + "ms"
//     });
//   }

//   // Оновлюємо активний крок при завантаженні сторінки
//   updateActiveStep();

//   // Оновлюємо активний крок при прокрутці
//   $(window).scroll(function() {
//     updateActiveStep();
//   });
// });



// $(function() {
//   $('.header__btn-menu').on('click', function() {
//     $('.menu').toggleClass('menu--open');
     
//     if ($('.menu').hasClass('menu--open')) {
//       $('.header__btn-menu').addClass('menu-open-style');
//       $('.header__btn-menu-span').addClass('menu-open-styl');
//       $('.logo').addClass('menu-open-logo');
//     } else {
//       $('.header__btn-menu').removeClass('menu-open-style');
//       $('.header__btn-menu-span').removeClass('menu-open-styl');
//       $('.logo').removeClass('menu-open-logo');
//     }
//   });
// });

// $(function() {
//   // Відстежуємо подію "click" на .menu__list-link
//   $('.menu__list-link').on('click', function() {
//     // Знаходимо .dd_menu, який відповідає даному .menu__list-link
//     var ddMenu = $(this).siblings('.dd_menu');
    
//     // Перевіряємо, чи .dd_menu відображається, і змінюємо її видимість
//     if (ddMenu.is(':visible')) {
//       ddMenu.hide();
//     } else {
//       ddMenu.show();
//     }
//   });
// });
// Отримуємо елементи, які потрібно перемістити