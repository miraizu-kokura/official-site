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

// FAQのトグル設定
document.addEventListener('DOMContentLoaded', function () {
 const questions = document.querySelectorAll('.faq-question');

 questions.forEach((question) => {
  question.addEventListener('click', function () {
   const answer = this.nextElementSibling;
   const isActive = this.classList.contains('active');

   // すべて閉じる（アコーディオン型にしたい場合）
   questions.forEach((q) => {
    q.classList.remove('active');
    q.nextElementSibling.style.maxHeight = null;
   });

   if (!isActive) {
    this.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + 'px';
   }
  });
 });
});
