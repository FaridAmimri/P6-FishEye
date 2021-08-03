function displayPhotographer(name, id, city, country, tags, tagline, price, portrait) {
    const container = document.createElement("div");
    container.className = "photographer";

    const link = document.createElement("a");
    link.href = "photograph.html";
    const image = document.createElement("img");
    image.src = "../Photos/PhotographersIDPhotos/" + portrait;
    link.append(image)
    container.append(link)
    const title = document.createElement("h2");
    title.textContent = name;
    link.append(title)
    container.append(link)

    const article = document.createElement("div");
    article.className = "information";
    const location = document.createElement("p");
    location.className = "city";
    location.textContent = city + ", " + country;
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
    document.querySelector('main').append(container);
} 
displayPhotographer("Mimi Keel", 243, "London", "FR", ["portrait", "events", "travel", "bullshit"], "Voir le beau dans le quotidien", 500, "MimiKeel.jpg");


