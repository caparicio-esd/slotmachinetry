window.addEventListener("load", () => {
  start();
});

let credit = Math.floor(Math.random() * 4) + 9;
let images = ["Q.png", "U.png", "I.png", "E.png", "N.png", "_.png", "S.png", "O.png", "Y.png"];
let rewards = ["work1.png", "work2.png", "work3.jpg", "work4.png", "work5.png", "work6.jpg"];
let current_numbers = [];

/**
 *
 */
const start = () => {
  // array con todo false [false, false, false, false, false...]
  for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
    current_numbers[i] = false;
  }
  document.getElementById("throw").addEventListener("click", () => {
    throwDice();
  });
};

/**
 *
 */
const throwDice = () => {
  // hacer que algunos false del array se vayan haciendo true
  for (let i = 0; i < document.querySelectorAll(".button").length; i++) {
    if (current_numbers[i] == false) {
      current_numbers[i] = randomBoolean();
    }
  }
  showImage();

  // cuando todos sean true
  if (compareTrue()) {
    // removeTirarButton();
    showRandomWork();
  }
};

/**
 *
 * @returns {Boolean}
 */
const randomBoolean = () => {
  const random = Math.round(Math.random());
  return random == 1 ? true : false;
};

/**
 *
 */
const showImage = () => {
  for (let i = 0; i < document.querySelectorAll(".image").length; i++) {
    if (current_numbers[i]) {
      const pic = document.querySelectorAll(".image")[i];
      const img = pic.querySelector("img");
      img.src = `img/${images[i]}`;
    }
  }
};

/**
 *
 * @returns {Boolean}
 */
const compareTrue = () => current_numbers.every((c) => c == true);

/**
 *
 */
const showRandomWork = () => {
  console.log("show work.. (y currate la maqueta un poco más tio... xd");
};

/**
 *
 */
const refresh = () => {};

/**
 *
 */
const close = () => {};
