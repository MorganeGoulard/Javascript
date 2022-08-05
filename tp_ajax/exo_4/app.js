import { CreateWikiCard } from "./component/wiki-card.js";


const listItems = document.querySelector("#items");
const researchButton = document.querySelector("#button");
const itemWanted = document.querySelector("#research");


researchButton.addEventListener("click", function (event){
    event.preventDefault();
    listItems.innerHTML = "";

    axios
    .get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${itemWanted.value}`)
    .then(function (response){
        const items = response.data.query.search;
        for (let item of items){
            listItems.appendChild(CreateWikiCard(item));
        }
    })

})



  