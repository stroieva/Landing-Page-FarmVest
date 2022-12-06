// Підключення анімації AOS

AOS.init();


// бургер меню

const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".menu__link");

burger.addEventListener('click', function () {
    burger.classList.toggle("header__active");
    if (burger.classList.contains("header__active")) {
        headerMenu.classList.add("header__active");
    } else {
        headerMenu.classList.remove("header__active");
    }
})

menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        burger.classList.remove("header__active");
        headerMenu.classList.remove("header__active");
    })
});


// затемнення меню при скролі

const header = document.querySelector(".header");

function showMenuBackground() {
    if (window.scrollY >= 100) {
        header.classList.add('header__add-background');
    } else {
        header.classList.remove('header__add-background');
    }
}

window.addEventListener("scroll", showMenuBackground)


// Випадаючий список

const titles = document.querySelectorAll('.block-pathway__title');

titles.forEach(title => {
    title.addEventListener('click', function(event) {
        event.preventDefault();

        const currentTitle = event.target.closest('.block-pathway__title');
        const currentText = event.target.nextElementSibling;

        currentTitle.classList.toggle("active");

        if(currentTitle.classList.contains("active")) {
            currentText.style.maxHeight = currentText.scrollHeight + "px";
        } else {
            currentText.style.maxHeight = null
        }
    })
})


// Показати більше

const buttonViewAll = document.querySelector(".customers__button");
const customers = document.querySelector(".customers__view-all");

buttonViewAll.addEventListener('click', function(e) {
    e.preventDefault();
    customers.classList.remove('customers__view-all--hide');
    buttonViewAll.classList.add('customers__view-all--hide');
})


// Активний клас меню при скролі

window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
        if(el.offsetTop - document.querySelector('.header__container').clientHeight <= scrollDistance + 200) {
            document.querySelectorAll('nav a').forEach((el) => {
                if(el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            })

            document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active')
        }
    })
})


// Стрілка вверх

const scrollUp = document.querySelector('.scroll-up');

window.onscroll = () => {
    if(window.scrollY > 200) {
          scrollUp.classList.remove('scroll-up--hide');
    } else  {
        scrollUp.classList.add('scroll-up--hide');
    }

    scrollUp.onclick = () => {
        window.scrollTo(0, 0);
    }
}

// Модальне вікно sign in

const buttonSignIn = document.querySelector('.button-style--sign');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__hide')

buttonSignIn.addEventListener('click', function() {
    modal.classList.add('modal--show');
})

closeModal.addEventListener('click', function() {
    modal.classList.remove('modal--show');
})

// Модальне вікно get started

const buttonGetStarted = document.querySelector('.button-style--get-started');
const getStartedModal = document.querySelector('.get-started');
const getStartedClose = document.querySelector('.get-started__close');

buttonGetStarted.addEventListener('click', function() {
    getStartedModal.classList.add('get-started--show')
})

getStartedClose.addEventListener('click', function() {
    getStartedModal.classList.remove('get-started--show')
})
