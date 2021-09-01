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
        const container = document.createElement("div");
        container.className = "album";
        const photo = document.createElement("div");
        photo.className = "photo";
        container.append(photo)
        const diapo = document.createElement("img");
        diapo.src = this.image;
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

        document.querySelector('main').append(container);
    }
}

