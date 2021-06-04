const colors = ["red", "green", "orange", "#f15025", "rgba(133, 122, 200)"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {

  const randomNum = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];

});



function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}