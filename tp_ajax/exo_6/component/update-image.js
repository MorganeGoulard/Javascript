import { table } from "../constant/table.js";

export function updateImage(position){
    let imgProfil = document.querySelector('.profile-picture');
    imgProfil.setAttribute('src',table[position].img);
}