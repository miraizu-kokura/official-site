const menuBtn = document.querySelector('.header-hamburger');
const menu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', () => {
 menu.classList.toggle('is-active');
 menuBtn.classList.toggle('is-open');
});

// メニュー自体がクリックされたら閉じる
menu.addEventListener('click', () => {
 menu.classList.remove('is-active');
 menuBtn.classList.remove('is-open');
});

// スクロール時のヘッダー固定
window.addEventListener('scroll', function () {
 const header = document.querySelector('.header');
 if (window.scrollY > 10) {
  header.classList.add('fixed');
 } else {
  header.classList.remove('fixed');
 }
});
