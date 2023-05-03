const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

let indexPhoto = 1;

// buena suerte


document.querySelector(".btn-left").addEventListener("click", () => {

  indexPhoto--;
  if (indexPhoto < 0) {
    indexPhoto = pictures.length - 1;
  }
  document.querySelector(".img-container").style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;
  
});

document.querySelector(".btn-right").addEventListener("click", () => {
  indexPhoto++;
  if (indexPhoto >= pictures.length) {
    indexPhoto = 0;
  }

  document.querySelector(".img-container").style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;
});


document.querySelector(".img-container").style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;