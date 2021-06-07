let count = 0;
const value = document.getElementById('value');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');


decrease.addEventListener('click', function () {
  count--
  value.textContent = count;
  value.style.color = "red";

})
increase.addEventListener('click', function () {
  count++
  value.textContent = count;
  value.style.color = "green";
})
reset.addEventListener('click', function () {
  count = 0
  value.textContent = count;
  value.style.color = "black";
})