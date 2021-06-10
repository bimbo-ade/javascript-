const btn = document.getElementById('btn');
const modal = document.querySelector('.modal-close')
const modall = document.querySelector('.modal');
const clsbtn = document.getElementById('btn2')


btn.addEventListener('click', function () {
  modal.classList.add('modal-open');
  modall.classList.add('modal-close');
})

clsbtn.addEventListener('click', function () {
  modal.classList.remove('modal-open');
  modall.classList.remove('modal-close');

})