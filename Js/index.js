function displayPhotographer(name, id, city, country, tags, tagline, price, portrait) {
    const container = document.createElement("div");
    container.className = "photographer";
    const link = document.createElement("a");
    link.href = "photograph.html";
    const image = document.createElement("img");
    image.src = "../Photos/Photographers ID Photos/" + portrait;
    link.append(image)
    container.append(link)
} 
displayPhotographer("leo", 4, 7, 9, 11, 16, 34, "MimiKeel.jpg" )