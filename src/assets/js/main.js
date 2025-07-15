const menuBtn = document.querySelector('.header-hamburger');
const menu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', () => {
 menu.classList.toggle('is-active');
 menuBtn.classList.toggle('is-open');
});
