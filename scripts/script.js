const swiper = new Swiper('.swiper', { 
  slidesPerView: 1.5, 
  spaceBetween: 32, 
  slidesPerGroupSkip: 1, 
  slidesOffsetBefore: 16, 
  initialSlide: 1, 
  centeredSlides: true, 
  pagination: { 
    el: ".swiper-pagination",
    clickable: true,} 
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