import { table } from "../constant/table.js";

export function updateTitle(position){
    let jobTitle = document.querySelector('.job-title');
    jobTitle.innerText = table[position].job.toUpperCase();
}