
function CardTitle(title){
    const cardtitle = document.createElement("h2");
    cardtitle.classList.add("card-title");
    cardtitle.innerText = title;
    return cardtitle;
} 

function CardPrice(price){
    const cardPrice = document.createElement("p");
    cardPrice.classList.add("text-primary");
    cardPrice.innerText = price + " €";
    return cardPrice;
}

function CardImg(img){
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "border", "border-primary");
    cardImage.src = `${img}`;
    return cardImage;
}

function CardDesc(desc){
    const cardDesc = document.createElement("p");
    cardDesc.classList.add("card-text");
    cardDesc.innerText = desc;
    return cardDesc;
}

export function CreateMenuCard(menu){
    const {title, price, img, desc} = menu;
    const card = document.createElement("div");
    //card.classList.add("card","col", "col-xl-2","col-lg-4","col-md-6","col-sm-8","col-12");
    card.classList.add("card", "mb-3", "col", "col-xl-2","col-lg-4","col-md-6","col-sm-8","col-12");
    const row = document.createElement("div")
    row.classList.add("row", "g-0");
    const colImage = document.createElement("div");
    colImage.classList.add("col-md-4");

    const colBody = document.createElement("div");
    colBody.classList.add("col-md-8");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titleCard = CardTitle(title);
    const priceCard = CardPrice(price);
    const imageCard = CardImg(img);
    const descCard = CardDesc (desc);

    colImage.appendChild(imageCard);
    cardBody.append(titleCard, priceCard, descCard);
    colBody.appendChild(cardBody);

    row.append(colImage, colBody);
    card.appendChild(row);
    return card;
}
