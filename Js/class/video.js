import {mediaList, getTotalLikes} from "../photograph.js";

export class Video {
    constructor(id, photographerId, title, video, tags, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.video = video;
        this.tags = tags;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }

    render() {
        const container = document.createElement("div");
        container.className = "album";
        const photo = document.createElement("div");
        photo.className = "photo";
        container.append(photo)
        const diapo = document.createElement("video");
        diapo.src = this.video;
        photo.append(diapo)
        container.append(photo)
        const like = document.createElement("div");
        like.className = "like";
        photo.append(like)
        container.append(photo)
        const paragraph = document.createElement("p");
        paragraph.textContent = this.title;
        like.append(paragraph)
        photo.append(like)
        container.append(photo)
        const heart = document.createElement("p");
        heart.className = "far fa-heart";
        heart.textContent = this.likes;
        like.append(heart)
        photo.append(like)
        container.append(photo)

        heart.addEventListener("click", () => {
            this.likes += 1;
            heart.textContent = this.likes;
            let totalLikes = getTotalLikes(mediaList);
            console.log(totalLikes);
        })

        document.querySelector('main').append(container);
    }
}
