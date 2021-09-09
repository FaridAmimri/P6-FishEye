export function viewPhotograph(name, id, city, country, tagline, tags, portrait) {
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
