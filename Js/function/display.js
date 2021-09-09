import {mediaList, getTotalLikes} from "../photograph.js";

export function displayLikes(price) {
    let totalLikes = getTotalLikes(mediaList);

    const resultLikes = document.createElement("div");
    resultLikes.className = "totaloflikes";
    const nblikes = document.createElement("p");
    nblikes.textContent = totalLikes;
    nblikes.className = "far fa-heart"
    resultLikes.append(nblikes);
    const money = document.createElement("p");
    money.textContent = price + "€/jour"; 
    resultLikes.append(money);
    
    document.querySelector('main').append(resultLikes);
}

