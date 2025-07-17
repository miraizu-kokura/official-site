const menuBtn = document.querySelector('.header-hamburger');
const menu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', () => {
 menu.classList.toggle('is-active');
 menuBtn.classList.toggle('is-open');
});

window.addEventListener('scroll', function () {
 const header = document.querySelector('.header');
 if (window.scrollY > 100) {
  header.classList.add('fixed');
 } else {
  header.classList.remove('fixed');
 }
});
