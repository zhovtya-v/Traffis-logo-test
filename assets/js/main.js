const body = document.querySelector('body');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.btn-close-js');
const menuBtn = document.querySelector('.nav-btn-js');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu a');
const date = new Date();
const URLString = window.location.href;
const url = new URL(URLString);

let setYear = () => {
    let year = date.getFullYear();
    document.querySelector('.footer-copyright span').textContent = year;
};

setYear();

closeBtn.addEventListener('click', function () {
    body.classList.remove('opened');
    popup.classList.remove('active');
})

menuBtn.addEventListener('click', function () {
    body.classList.toggle('opened');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

menuItem.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
})

const heroSwiper = new Swiper('.hero-slider', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    breakpoints :{

        768:{
            slidesPerView: 2.85,
            centeredSlides: true,
            spaceBetween: 26,
        },

        1024:{
            slidesPerView: 3,
            loopedSlides: 2,
            centeredSlides: true,
            spaceBetween: 38,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

const overviewSwiper = new Swiper('.overview-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        768: {
            slidesPerView: 2.85,
        },
        1025: {
            slidesPerView: 1.85,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

function sendForm() {
    let form = document.forms['contact-form'];

    console.log('Name', form.elements.name.value);
    console.log('Email', form.elements.email.value);
    console.log('Message', form.elements.message.value);

    body.classList.toggle('opened');
    popup.classList.add('active');
}

function getURLParams() {
    let btnLinks = document.querySelectorAll('.btn-link');
    let appOfferLink = url.searchParams.get("app_offer_link");

    if ( !appOfferLink ) {
        btnLinks.forEach(function (btn) {
            btn.setAttribute('href', 'https://www.google.com/');
        })
    } else {
        btnLinks.forEach(function (btn) {
            btn.setAttribute('href', appOfferLink);
        })
    }
}

getURLParams();


const heightSlide = document.querySelector('.overview-section .swiper-slide').offsetHeight;
const text = document.querySelector('.overview-section .overview-info');
const textHeight = text.offsetHeight;
const showMoreBtn = document.querySelector('.show-btn-js');

function showMoreText() {
    console.log('heightSlide', heightSlide);
    console.log('textHeight', textHeight);

    if ( textHeight >= heightSlide) {
        text.classList.add('less-text');
        text.style.height = 410 + 'px';

        showMoreBtn.style.display = 'inline-flex';
    }

    showMoreBtn.addEventListener('click', () => {
        text.classList.toggle('less-text');

        document.querySelector('.overview-info.less-text') ? text.style.height = 410 + 'px' : text.style.height = 'auto';

    });
}

showMoreText();


const smoothLinks = document.querySelectorAll('.header-section a[href^="#"]');

function smoothScroll() {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

smoothScroll();