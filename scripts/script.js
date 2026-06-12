const swiper = new Swiper('.swiper', { 
    slidesPerView: 1.25, 
    spaceBetween: 16, 
    initialSlide: 1, 
    centeredSlides: true,
    slideToClickedSlide: true,
    pagination: { 
    el: ".swiper-pagination",
    clickable: true,},
    breakpoints:{
    400:{
        slidesPerView: 1.5,
        spaceBetween: 32,
    },
    800:{
        slidesPerView: 2.25,
        spaceBetween: 32,
    },
    1024:{
        enabled: false,
        slidesPerView: 3.25,
        centeredSlides: true,
    }
    }


});

document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.getElementById('mobile-menu');
            const closedIconPath = './media/icons/icon__hamburger--closed.svg';
            const openedIconPath = './media/icons/icon__hamburger--opened.svg';
            hamburger.addEventListener('click', (event) => {
                event.preventDefault();
                const isOpen = mobileMenu.classList.contains('is-open');
                
                if (isOpen) {
                    mobileMenu.classList.remove('is-open');
                    hamburger.setAttribute('aria-expanded', 'false');
                    hamburger.querySelector('use').setAttribute('href', closedIconPath);
                } else {
                    hamburger.querySelector('use').setAttribute('href', openedIconPath);
                    mobileMenu.classList.add('is-open');
                    hamburger.setAttribute('aria-expanded', 'true');
                }
            });
        });