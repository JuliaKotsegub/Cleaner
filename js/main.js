
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
    var slides = document.querySelectorAll('.carousel__slide');
    var arrows = document.querySelectorAll('.carousel-arrow');
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



    
  