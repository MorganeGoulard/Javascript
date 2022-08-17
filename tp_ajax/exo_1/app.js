import { decreaseNumber, increaseNumber, resetNumber } from "./component/counter.js";
import { counterColor } from "./component/counterColor.js";



let number = document.querySelector("#number");
let parsedNumber = parseInt(number.innerText)
const resetButton = document.querySelector("#btn-reset");
const decreaseButton = document.querySelector("#btn-decrease");
const increaseButton = document.querySelector("#btn-increase");

resetButton.addEventListener("click", function (){
    parsedNumber = resetNumber(parsedNumber);
    number.innerText = parsedNumber;
    counterColor(number, parsedNumber);
})

decreaseButton.addEventListener("click", function (){
    parsedNumber = decreaseNumber(parsedNumber);
    number.innerText = parsedNumber;
    counterColor(number, parsedNumber);
})

increaseButton.addEventListener("click", function (){
    parsedNumber = increaseNumber(parsedNumber);   
    number.innerText = parsedNumber;
    counterColor(number, parsedNumber);
})