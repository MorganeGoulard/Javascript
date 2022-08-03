const colorTable = ["green", "red", "rgba(133,122,200)", "#F15025"];

const btnColor = document.querySelector(".btn");
const backgroundColorText = document.querySelector(".background");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  console.log(getRandomInt(0,3));
  console.log(backgroundColorText)

btnColor = addEventListener("click", function () {
    const color = colorTable[getRandomInt(0, colorTable.length-1)];
    this.document.body.style.backgroundColor = color;
    backgroundColorText.innerText = "Background color : " + color;
})


