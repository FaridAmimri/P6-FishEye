function displayPhotographer(name, id, city, country, tags, tagline, price, portrait) {
    const container = document.createElement("div");
    container.className = "photographer";

    const link = document.createElement("a");
    link.href = "photograph.html";
    const image = document.createElement("img");
    image.src = "../Photos/Photographers ID Photos/" + portrait;
    link.append(image)
    container.append(link)
    const profil = document.createElement("h2");
    profil.textContent = name;
    link.append(profil)
    container.append(link)

    const article = document.createElement("div");
    article.className = "information";
    const location = document.createElement("p");
    location.className = "city";
    location.textContent = city;
    article.append(location)
    container.append(article)
    const biography = document.createElement("p");
    biography.textContent = tagline;
    article.append(biography)
    container.append(article)
    const money = document.createElement("p");
    money.className = "price";
    money.textContent = price;
    article.append(money)
    container.append(article)




} 
displayPhotographer()