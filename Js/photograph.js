function viewPhotographer(name, id, city, country, tagline, tags, portrait) {
    const container = document.createElement("div");
    container.className = "photographer";

    const profil = document.createElement("div");
    profil.className = "profil";

    const photograph = document.createElement("h1");
    photograph.textContent = name;
    profil.append(photograph)
    container.append(profil)

    const button = document.createElement("button");
    button.textContent = "Contactez-moi";
    profil.append(button)
    container.append(profil)

    const info = document.createElement("div");
    info.className = "information";
    profil.append(info)
    container.append(profil)
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
    profil.append(nav)
    container.append(profil)

    const face = document.createElement("div");
    face.className = "portrait";
    const image = document.createElement("img");
    image.src = "../Photos/PhotographersIDPhotos/" + portrait;
    face.append(image)
    container.append(face)

    document.querySelector('main').append(container);
}


fetch("./FishEyeData.json")
    .then(data => data.json())
    .then(result => {
   
        for (let i = 0; i < result.photographers.length; i++) {

            if (result.photographers[i].id === ($_GET['id'])) {
            viewPhotographer(result.photographers[i].name, result.photographers[i].id, result.photographers[i].city, result.photographers[i].country, result.photographers[i].tagline, result.photographers[i].tags, result.photographers[i].portrait);
            }
        }
    })


// function selectionPhotographer() {
//     const container = document.createElement("div");
//     container.className = "selection";

//     const select = document.createElement("label");
//     select.for = "option-select";
//     select.textContent = "Trier par";
//     container.append(select)
//     const option = document.createElement("select")
//     option.name = "option";
//     option.id = "option-select";
//     container.append(option)
//     const popularity = document.createElement("option");
//     popularity.value = "popularity";
//     popularity.textContent = "Popularité";
//     option.append(popularity)
//     container.append(option)
//     const date = document.createElement("option");
//     date.value = "date";
//     date.textContent = "Date";
//     option.append(date)
//     container.append(option)
//     const title = document.createElement("option");
//     title.value = "title";
//     title.textContent = "Titre";
//     option.append(title)
//     container.append(option)

//     document.querySelector('main').append(container);
// }
// selectionPhotographer()


// function selectionAlbum(id, photographerId, title, image, tags, likes, date, price) {
//     const container = document.createElement("div");
//     container.className = "album";

//     const photo = document.createElement("div");
//     photo.className = "photo";
//     container.append(photo)
//     const diapo = document.createElement("img");
//     diapo.src = "../Photos/Mimi/" + image;
//     photo.append(diapo)
//     container.append(photo)
//     const like = document.createElement("div");
//     like.className = "like";
//     photo.append(like)
//     container.append(photo)
//     const paragraph = document.createElement("p");
//     paragraph.textContent = title;
//     like.append(paragraph)
//     photo.append(like)
//     container.append(photo)
//     const heart = document.createElement("p");
//     heart.className = "far fa-heart";
//     heart.textContent = likes;
//     like.append(heart)
//     photo.append(like)
//     container.append(photo)

//     document.querySelector('main').append(container);
// }
// selectionAlbum(342550, 82, "Fashion Yellow Beach", "Animals_Rainbow.jpg", ["#fashion"], 62, 55);