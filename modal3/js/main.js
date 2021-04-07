const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');
});

modalBtn.addEventListener('click', function () {
  modalBg.classList.add('bg-active');
});
