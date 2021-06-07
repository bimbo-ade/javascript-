const reviews = [
  {
    Fname: "Dami Sayrah",
    job: "cook",
    desc: "i am a person who loves to cook all day. Temporibusdolore amet maiores reprehenderit accusamus, nobis animi placeat odit assumenda et!",
  },

  {
    Fname: "Bimbo",
    job: "teacher",
    desc: "i am a person who loves to teach sha oojdsfusamus, nobis animi placeat odit assumenda et!"
  },

  {
    Fname: "jax",
    job: "doctor",
    desc: "i am a person who loves to heal all day Temporibusdolore amet maiores reprehenderit accusamus, nobis animi placeat odit assumenda et!",
  },
  {
    Fname: "john Sayrah",
    job: "crafty",
    desc: "i am a person who loves to cook all day. Temporibusdolore amet maiores reprehenderit accusamus, nobis animi placeat odit assumenda et!",
  },

  {
    Fname: "Damah",
    job: "cactic",
    desc: "i am a person who loves to cook all day. Temporibusdolore amet maiores reprehenderit accusamus, nobis animi placeat odit assumenda et!",
  }

]

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const random = document.getElementById('random');
const author = document.getElementById('author');
const job = document.getElementById('job');
const desc = document.getElementById('desc');

let currentItem = 0;


window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);        //showPerson()
})

function showPerson(person) {      //function showPerson()    theres no need to pass parameter 'person'
  const item = reviews[person];      // const item = reviews[currentItem]
  author.textContent = item.Fname;
  job.textContent = item.job;
  desc.textContent = item.desc;

}

next.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);

})

prev.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);

})

random.addEventListener('click', function () {
  currentItem = randomNumber();
  showPerson(currentItem);
})


function randomNumber() {
  return Math.floor(Math.random() * reviews.length);

}