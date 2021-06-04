const colors = ["red", "yellow", "green", "orange", "#f15025", "rgba(133, 122, 200)"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNo = randomNumber();
  document.body.style.backgroundColor = colors[randomNo];
  color.innerText = colors[randomNo];
})

function randomNumber() {
  return Math.floor(Math.random() * colors.length);

}