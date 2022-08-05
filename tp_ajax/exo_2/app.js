
import { CreateMenuCard } from "./component/menu-card.js";
import { GetMenu, FindByCategory } from "./storage.js";


const urlParam = new URLSearchParams(location.search);
const category = urlParam.get("category");

const items = document.querySelector("#items");

const itemsWanted = FindByCategory(category);
for(let item of itemsWanted ){
    items.appendChild(CreateMenuCard(item));
};