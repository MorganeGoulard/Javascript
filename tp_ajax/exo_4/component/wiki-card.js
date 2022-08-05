function WikiCardTitle(title){
    const wikiCardTitle = document.createElement("h2");
    wikiCardTitle.classList.add("card-title");
    wikiCardTitle.innerText = title;
    return wikiCardTitle
}

function WikiCardSnippet(snippet){
    const wikiCardSnippet = document.createElement("p");
    wikiCardSnippet.classList.add("card-text");
    wikiCardSnippet.innerHTML = snippet;
    return wikiCardSnippet;
}

function WikiCardPageId(pageid){
    const wikiLink = document.createElement("a");
    wikiLink.classList.add("btn", "btn-light");
    wikiLink.href = `http://en.wikipedia.org/?curid=${pageid}`;
    wikiLink.innerText = "Voir la page Wikipedia";
    return wikiLink;
}



export function CreateWikiCard(item){
    const {title, snippet, pageid} = item;
    const wikiItem = document.createElement("div");
    wikiItem.classList.add("card","col", "col-xl-2","col-lg-4","col-md-6","col-sm-8","col-12");

    const wikiCardTitle = WikiCardTitle(title);
    const wikiCardSnippet = WikiCardSnippet(snippet);
    const wikiCardPageId = WikiCardPageId(pageid);

    wikiItem.append(wikiCardTitle, wikiCardSnippet, wikiCardPageId);
    return wikiItem;
}