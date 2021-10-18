function displayPhotographer(name, id, city, country, tags, tagline, price, portrait) {
    const container = document.createElement("div")
    container.className = "photographer"

    const link = document.createElement("a")
    link.href = "photograph.html?id=" + id
    const image = document.createElement("img")
    image.src = "../Photos/PhotographersIDPhotos/" + portrait
    link.append(image)
    container.append(link)
    const title = document.createElement("h2")
    title.textContent = name
    link.append(title)
    container.append(link)

    const article = document.createElement("div")
    article.className = "information"
    const location = document.createElement("p")
    location.className = "city";
    location.textContent = city + ", " + country
    article.append(location)
    container.append(article)
    const biography = document.createElement("p")
    biography.textContent = tagline;
    article.append(biography)
    container.append(article)
    const money = document.createElement("p")
    money.className = "price";
    money.textContent = price + "€/jour"
    article.append(money)
    container.append(article)

    const nav = document.createElement("nav")
    const ul = document.createElement("ul")

    for (let i = 0; i < tags.length; i++) {
        const li = document.createElement("li")
        const linka = document.createElement("a")
        linka.className = tags[i];
        linka.innerHTML = '#' + tags[i];
        li.append(linka)
        ul.append(li)
    }

    nav.append(ul)
    container.append(nav)
    document.querySelector('main').append(container)
}

fetch("./FishEyeData.json")
    .then(data => data.json())
    .then(result => {

        const param = new URLSearchParams(document.location.search);
        const photographerTag = String(param.get("tag"));

        for (let i = 0; i < result.photographers.length; i++) {

            if (photographerTag.length === 4) {
                displayPhotographer(result.photographers[i].name, result.photographers[i].id, result.photographers[i].city, result.photographers[i].country, result.photographers[i].tags, result.photographers[i].tagline, result.photographers[i].price, result.photographers[i].portrait);
            }

            let tagList = result.photographers[i].tags
            for (let j = 0; j < tagList.length; j++) {
                if (photographerTag === tagList[j]) {
                    displayPhotographer(result.photographers[i].name, result.photographers[i].id, result.photographers[i].city, result.photographers[i].country, result.photographers[i].tags, result.photographers[i].tagline, result.photographers[i].price, result.photographers[i].portrait);
                }
            }
        }

        function addTagListener(tagValue) {
            const targets = document.querySelectorAll(`.${tagValue}`)
            for (let i = 0; i < targets.length; i++) {
                targets[i].addEventListener('click', () => {
                    document.querySelector('main').innerHTML = ""

                    let photographers = result.photographers
                    photographers = photographers.filter(function (element) {
                        for (let i = 0; i < element.tags.length; i++) {
                            if (element.tags[i] === tagValue) {
                                return element
                            }
                        }
                    })

                    for (let i = 0; i < photographers.length; i++) {
                        displayPhotographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait)
                    }
                    addTagListener("portrait")
                    addTagListener("art")
                    addTagListener("fashion")
                    addTagListener("architecture")
                    addTagListener("travel")
                    addTagListener("sport")
                    addTagListener("animals")
                    addTagListener("events")
                })
            }
        }

        addTagListener("portrait")
        addTagListener("art")
        addTagListener("fashion")
        addTagListener("architecture")
        addTagListener("travel")
        addTagListener("sport")
        addTagListener("animals")
        addTagListener("events")


    })