window.addEventListener("load", () => {
  start();
});
let credit = Math.floor(Math.random() * 4) + 9;
let images = ["Q.png", "U.png", "I.png", "E.png", "N.png", "_.png", "S.png", "O.png", "Y.png"];
let rewards = ["work1.png", "work2.png", "work3.jpg", "work4.png", "work5.png", "work6.jpg"];
let current_numbers = [];

const start = () => {
  document.getElementById("throw").onclick = throw_start;
};

const throw_start = () => {
  current_numbers = [];
  for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
    current_numbers.push(select_number());
    show_image(i, current_numbers[i]);
  }
  alert(current_numbers);
};
// compare();

const throw_one = () => {};

const select_number = () => {
  let azar = Math.floor(Math.random() * images.length);
  return azar;
};

const show_image = (num, im) => {
  document.getElementsByClassName("image")[(num, im)].getElementsByTagName("img")[0].src = "img/" + images[im];
};

const compare = () => {
  if (
    current_numbers[0] == ["img/Q.png"] &&
    current_numbers[1] == ["img/U.png"] &&
    current_numbers[2] == ["img/I.png"] &&
    current_numbers[3] == ["img/E.png"] &&
    current_numbers[4] == ["img/N.png"] &&
    current_numbers[5] == ["img/_.png"] &&
    current_numbers[6] == ["img/S.png"] &&
    current_numbers[7] == ["img/O.png"] &&
    current_numbers[8] == ["img/Y.png"]
  ) {
  }
  return Math.random(rewards.length);
};

const refresh = () => {};

const close = () => {};
