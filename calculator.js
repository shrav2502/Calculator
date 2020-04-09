const button = document.querySelectorAll("button");
const display = document.querySelector(".display");
let result = document.querySelector(".result");
let answer;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (e) {
    let value1 = e.target.value;
    display.value += value1;
    answer = eval(display.value);
  });
}

result.addEventListener("click", function (e) {
  display.value = answer;
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function (e) {
  display.value = "0";
});

const off = document.querySelector(".off");
off.addEventListener("click", function (e) {
  display.value = " ";
});
