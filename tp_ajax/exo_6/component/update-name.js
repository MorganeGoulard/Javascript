import { table } from "../constant/table.js";


export function updateName(position){
    let nameTitle = document.querySelector('.name-title');
    nameTitle.innerText = table[position].name.split(" ").map(function(word){
        return word[0].toUpperCase()+ word.slice(1);
      }).join(" ");
}