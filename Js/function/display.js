import {mediaList, getTotalLikes} from "../photograph.js";

export function displayLikes() {
    let totalLikes = getTotalLikes(mediaList);

    const display = document.createElement("div");
    display.className = "display";
    const likes = document.createElement("p");
    likes.textContent = totalLikes;
    likes.className = "far fa-heart totallikes"
    
    display.append(likes);
    
    document.querySelector('main').append(display);
}

export function displayPrice(price) {
    const display = document.querySelector(".display");

    const money = document.createElement("p");
    money.textContent = ""; 
    money.textContent = price + "€/jour"; 
    money.className = "price";

    display.append(money);

    document.querySelector('main').append(display);
}
