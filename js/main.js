
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


// Animation

$(document).ready(function () {
  let currentStep = 0;
  let animationStarted = false;
  let allStepsCompleted = false;

  // Функція для обновлення кроку і анімації
  function updateStep() {
    
      if (allStepsCompleted) {
          currentStep = 0;
      } else {
          currentStep++;
          if (currentStep > 4) {
              currentStep = 4;
              allStepsCompleted = true;
          }
      }

      // Додаємо клас active до поточного кроку
      $(".step.step0" + currentStep).addClass("active");

      // Оновлюємо контент на основі поточного кроку
      switch (currentStep) {
          case 1:
              $(".discovery").addClass("active").siblings().removeClass("active");
              break;
          case 2:
              $(".strategy").addClass("active").siblings().removeClass("active");
              break;
          case 3:
              $(".creative").addClass("active").siblings().removeClass("active");
              break;
          case 4:
              $(".production").addClass("active").siblings().removeClass("active");
              break;
      }

      // Запускаємо анімацію step
      let progressBar = $(".step.active:before");
      progressBar.css("animation", "none");
      void progressBar.offsetWidth; // Trigger a reflow
      progressBar.css("animation", "animationCombined 5s ease forwards");

      // Змінюємо background елемента #line-progress відповідно до кроку
      let lineProgress = $("#line-progress");
      switch (currentStep) {
          case 1:
              lineProgress.css("height", "25%");
              break;
          case 2:
              lineProgress.css("height", "50%");
              break;
          case 3:
              lineProgress.css("height", "75%");
              break;
          case 4:
              lineProgress.css("height", "100%");
              break;
      }
  }

  // Функція для перевірки, чи користувач дійшов до секції "process"
  function checkVisibility() {
      let processSection = $(".process");
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop();
      let processOffset = processSection.offset().top;

      if (!animationStarted && scrollTop + windowHeight >= processOffset) {
          animationStarted = true;

          // Викликаємо функцію оновлення кроку та анімацію без затримки
          updateStep();

          // Починаємо викликати оновлення кроку та анімацію кожні 5 секунд
          setInterval(updateStep, 5000);
      }
  }

  // Викликаємо функцію checkVisibility при прокрутці сторінки
  $(window).scroll(checkVisibility);
});


// Media nav

// $(function() {
// $('.header__btn-menu').on('click', function() {
// $('.menu').toggleClass('menu--open');
 
// if ($('.menu').hasClass('menu--open')) {
//   $('.header__btn-menu').addClass('menu-open-style');
//   $('.header__btn-menu-span').addClass('menu-open-styl');
//   $('.logo').addClass('menu-open-logo');
// } else {
//   $('.header__btn-menu').removeClass('menu-open-style');
//   $('.header__btn-menu-span').removeClass('menu-open-styl');
//   $('.logo').removeClass('menu-open-logo');
// }
// });
// }); 

// Menu dropdown 


const ddMenuActivators = document.querySelectorAll(".menu__list-item.dd_menu-activ");
const screenWidth = window.innerWidth;

function toggleMenu() {
  const ddMenu = this.querySelector(".dd_menu");
  
  if (screenWidth >= 610 || window.matchMedia("(min-width: 610px)").matches) {
    // Якщо ширина екрану більша або дорівнює 610px, використовуйте наведення
    ddMenu.style.display = "block";
  } else {
    // В іншому випадку, використовуйте клік
    ddMenu.style.display = (ddMenu.style.display === "block") ? "none" : "block";
    
    // Збільште падінг вниз до 50px
    if (ddMenu.style.display === "block") {
      this.style.paddingBottom = "50px";

      const arrowImage = this.querySelector(".a_parent-arrow img");
      arrowImage.style.transform = "rotate(90deg)";
    } else {
      this.style.paddingBottom = "0";
      
      // Отримайте зображення стрілки і поверніть його в початковий стан
      const arrowImage = this.querySelector(".a_parent-arrow img");
      arrowImage.style.transform = "rotate(0deg)";
    }
  }
}


ddMenuActivators.forEach(function (activator) {
  if (screenWidth >= 610 || window.matchMedia("(min-width: 610px)").matches) {
    activator.addEventListener("mouseenter", toggleMenu);
    activator.addEventListener("mouseleave", function () {
      // Додайте код для закриття меню при виході курсора за межі меню
      const ddMenu = activator.querySelector(".dd_menu");
      ddMenu.style.display = "none";
    });
  } else {
    activator.addEventListener("click", toggleMenu);
  }
});




$(function() {
  let ddMenuOpen = false; // Змінна, щоб відстежувати відкриття "dd-menu"

  $('.header__btn-menu').on('click', function() {
    if (ddMenuOpen) {
      $('.dd_menu').css('display', 'none'); // Закриваємо "dd-menu" при закритті "open--menu"
      $('.menu__list-item.dd_menu-activ').css('padding-bottom', '0'); // Встановлюємо падінг вниз на 0 при закритті "dd-menu"
      
      // Повертаємо стрілку в початкове положення
      $('.a_parent-arrow img').css('transform', 'rotate(0deg)');
    }
    
    $('.menu').toggleClass('menu--open');
    ddMenuOpen = !ddMenuOpen; // Змінюємо стан "ddMenuOpen" на протилежний

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

