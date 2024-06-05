const mobileMenu = document.querySelector('.mobile-menu');
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menuOption1 = document.querySelector('.menu-option1-btn');
const menuOption2 = document.querySelector('.menu-option2-btn');
const menuOption3 = document.querySelector('.menu-option3-btn');
const menuOption4 = document.querySelector('.menu-option4-btn');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);
menuOption1.addEventListener('click', toggleMenu);
menuOption2.addEventListener('click', toggleMenu);
menuOption3.addEventListener('click', toggleMenu);
menuOption4.addEventListener('click', toggleMenu);
