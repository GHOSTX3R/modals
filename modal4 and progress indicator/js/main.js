//const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const scrollIndicator = document.querySelector('#scrollIndicator');

// modalBtn.addEventListener('click', function () {
//   modalBg.classList.add('bg-active');
// });

modalClose.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');
});

// scroll indicator bar

window.onscroll = function () {
  // how far I scroll (by pixels);
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  console.log('winScroll = ' + winScroll);
  console.log('winScroll rounded' + Math.round(winScroll));

  // the full page scrollable height
  let fullScreenHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  console.log('full page height = ' + fullScreenHeight);

  // the percentage we've scrolled
  let scrolled = (winScroll * 100) / fullScreenHeight;
  console.log('scrolled percentage = ' + scrolled);

  // update the progress bar
  scrollIndicator.style['width'] = scrolled + '%';

  // show a modal after scrolling half the height of the page
  if (winScroll > fullScreenHeight / 2) {
    if (modalBg.getAttribute('displayed') === 'false') {
      modalBg.setAttribute('displayed', 'true');
      modalBg.classList.add('bg-active');
    }
  }
};
