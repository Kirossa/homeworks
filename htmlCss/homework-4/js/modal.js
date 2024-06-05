const modal = document.querySelector('.backdrop');
const modalOpenBtn = document.querySelector('.modal-open-btn');
const modalCloseBtn = document.querySelector('.modal-close-btn');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);
