const hexadecTable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function getRandomHexaColor() {
    let randomNumber = 0;
    let randomColor = 0;
    for(let i = 0; i <= 6; i++){
        randomNumber = getRandomInt(0, 15);
        randomColor += randomNumber;
    }
    return randomColor;
}  

const btnColor = document.querySelector(".btn");
const backgroundColorText = document.querySelector(".background");
let color = "#";
let hexaColor = getRandomHexaColor(hexadecTable);
console.log(hexaColor);



btnColor = addEventListener("click", function () {
    color = color + hexadecColor;
    this.document.body.style.backgroundColor = color;
    backgroundColorText.innerText = "Background color : " + color;
})

console.log(color)