function viewPhotographer(name, id, city, country, tagline, tags, portrait) {
    const container = document.createElement("div");
    container.className = "photographer";

    const profil = document.createElement("div");
    profil.className = "profil";

    const photograph = document.createElement("h1");
    photograph.textContent = "name";
    profil.append(photograph)
    container.append(profil)

    const button = document.createElement("button");
    button.textContent = "Contactez-moi";
    profil.append(button)
    container.append(profil)

    const info = document.createElement("div");
    info.className = "information";
    const location = document.createElement("p");
    location.className = "city";
    location.textContent = city + ", " + country;
    info.append(location)
    profil.append(info)
    container.append(profil)
    const biography = document.createElement("p");
    biography.className = "bio";
    biography.textContent = tagline;
    info.append(biography)
    profil.append(info)
    container.append(profil)

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    for (let i = 0; i < tags.length; i++) {
        
        const li = document.createElement("li");
        const linka = document.createElement("a");
        linka.innerHTML = tags[i];
        li.append(linka)
        ul.append(li)
    }
    
    nav.append(ul)
    container.append(nav)

    const face = document.createElement("div");
    face.className = "portrait";
    const image = document.createElement("img");
    image.src = "../Photos/PhotographersIDPhotos/" + portrait;
    face.append(image)
    container.append(face)

    document.querySelector('main').append(container);
}
viewPhotographer("Mimi Keel", 243, "London", "UK", ["#portrait", "#events", "#travel", "#animals"], "Voir le beau dans le quotidien", 400, "MimiKeel.jpg");


// function selectionPhotographer() {
//     const container = document.createElement("div");
//     container.className = "selection";

//     const select = document.createElement("label");
//     select.for = "option-select";
//     select.textContent = "Trier par";
//     container.append(select)
//     const option = document.createElement("select")
//     option.name = "option";
//     container.append(option)
//     const popularity = document.createElement("option");
//     popularity.value = "popularity";
//     popularity.textContent = "Popularité";
//     select.append(popularity)
//     container.append(select)
//     const date = document.createElement("option");
//     date.value = "date";
//     date.textContent = "Date";
//     select.append(date)
//     container.append(select)
//     const title = document.createElement("option");
//     title.value = "title";
//     title.textContent = "Titre";
//     select.append(title)
//     container.append(select)

//     document.querySelector('main').append(container);
// }
// // selectionPhotographer()


// function selectionAlbum(id, photographerId, title, image, tags, likes, date, price) {
//     const container = document.createElement("div");
//     container.className = "album";

//     const photo = document.createElement("div");
//     photo.className = "photo";
//     container.append(photo)
//     const image = document.createElement("img");
//     image.src = "../Photos/Mimi/Animals_Rainbow.jpg";
//     photo.append(image)
//     container.append(photo)
//     const like = document.createElement("div");
//     like.className = "like";
//     photo.append(like)
//     container.append(photo)
//     const paragraph = document.createElement("p");
//     like.append(paragraph)
//     photo.append(like)
//     container.append(photo)
//     const heart = document.createElement("p");
//     heart.className = "far fa-heart";
//     heart.textContent = "12";
//     like.append(heart)
//     photo.append(like)
//     container.append(photo)
// }
// // selectionAlbum(342550, 82, "Fashion Yellow Beach", "Fashion_Yellow_Beach.jpg", ["#fashion"], 62, 55)
