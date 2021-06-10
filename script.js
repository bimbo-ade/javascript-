const colors = ["red", "yellow", "green", "orange", "#f15025", "rgba(133, 122, 200)"];

const btn = document.getElementById('btn');
const btnn = document.getElementById('btn2');
const color = document.querySelector('.color');


let colls = 0;
btn.addEventListener('click', function () {
  var cols = colors[colls];
  colls++
  if (colls > colors.length - 1) {
    colls = 0;
  }
  document.body.style.backgroundColor = cols;
  color.textContent = cols;

})



btnn.addEventListener('click', function () {
  const randomNo = randomNumber();
  document.body.style.backgroundColor = colors[randomNo];
  color.innerText = colors[randomNo];
})

function randomNumber() {
  return Math.floor(Math.random() * colors.length);

}