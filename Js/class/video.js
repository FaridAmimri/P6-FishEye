import { mediaList, getTotalLikes } from "../photograph.js";

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
        const shoot = document.createElement("div");
        shoot.className = "shoot";
       
        const link = document.createElement("a")
        const video = document.createElement("video");
        video.className = "media";
        video.src = this.video;
        link.append(video)
        shoot.append(link)
        
        const data = document.createElement("div");
        data.className = "data";
        shoot.append(data)
        
        const title = document.createElement("p");
        title.className = "title";
        title.textContent = this.title;
        data.append(title)
        shoot.append(data)
        
        const heart = document.createElement("p");
        heart.className = "far fa-heart";
        heart.textContent = this.likes;
        data.append(heart)
        shoot.append(data)

        heart.addEventListener("click", () => {
            this.likes += 1;
            heart.textContent = this.likes;
            let totalLikes = getTotalLikes(mediaList);

            const likes = document.querySelector(".totallikes");
            likes.textContent = "";
            likes.textContent = totalLikes;
        })

        const article = document.querySelector('article')
        article.append(shoot)
        document.querySelector('main').append(article)
    }

    load() {
        const container = document.querySelector(".lightbox__container");
        console.log
        const video = document.createElement("video");
        video.src = this.video;
        video.setAttribute("controls", "true")
        container.append(video)
        const title = document.querySelector(".lightbox__title");
        title.textContent = this.title;
    }
}

