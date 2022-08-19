import { table } from "../constant/table.js";


export function updateDesc(position){
    let desc = document.querySelector('.desc');
    desc.innerText = table[position].text;
}