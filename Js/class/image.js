import { mediaList, getTotalLikes } from "../photograph.js";

export class Image {
    constructor(id, photographerId, title, image, tags, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.tags = tags;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }

    render() {
        const shoot = document.createElement("div");
        shoot.className = "shoot";
       
        const link = document.createElement("a")
        const diapo = document.createElement("img");
        diapo.className = "media";
        diapo.src = this.image;
        link.append(diapo)
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

    // displayPrice() {
    //     const price = document.createElement("p");
    //     price.className = "price";
    //     price.textContent = this.price;
    // }

    load() {
        const container = document.querySelector(".lightbox__container");
        const image = document.createElement("img");
        image.src = this.image;
        container.append(image)
        const title = document.querySelector(".lightbox__title");
        title.textContent = this.title;
    }
}

