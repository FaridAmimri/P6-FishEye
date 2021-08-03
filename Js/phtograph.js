function viewPhotographer() {
    const container = document.createElement("div");
    container.className = "photographer";

    const profil = document.createElement("div");
    profil.className = "profil";
    container.append(profil)

    const name = document.createElement("h1");
    profil.append(name)
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
    location.textContent = city;
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
    const li = document.createElement("li");
    const linka = document.createElement("a");
    linka.innerHTML = "tags";
    li.append(linka)
    ul.append(li)
    nav.append(ul)
    container.append(nav)
}
// viewPhotographer()


function selectionPhotographer() {
    const container = document.createElement("div");
    container.className = "selection";

    const select = document.createElement("label");
    select.for = "option-select";
    select.textContent = "Trier par";
    container.append(select)
    const option = document.createElement("select")
    option.name = "option";
    container.append(option)
    const popularity = document.createElement("option");
    popularity.value = "popularity";
    popularity.textContent = "Popularité";
    select.append(popularity)
    container.append(select)
    const date = document.createElement("option");
    date.value = "date";
    date.textContent = "Date";
    select.append(date)
    container.append(select)
    const title = document.createElement("option");
    title.value = "title";
    title.textContent = "Titre";
    select.append(title)
    container.append(select)
}
selectionPhotographer()


function selectionAlbum() {
    const container = document.createElement("div");
    container.className = "album";

    const photo = document.createElement("div");
    photo.className = "photo";
    container.append(photo)
    const image = document.createElement("img");
    image.src = "../Photos/Mimi/Animals_Rainbow.jpg";
    photo.append(image)
    container.append(photo)
    const like = document.createElement("div");
    like.className = "like";
    photo.append(like)
    container.append(photo)
    const paragraph = document.createElement("p");
    like.append(paragraph)
    photo.append(like)
    container.append(photo)
    const heart = document.createElement("p");
    heart.className = "far fa-heart";
    heart.textContent = "12";
    like.append(heart)
    photo.append(like)
    container.append(photo)
}
selectionAlbum()