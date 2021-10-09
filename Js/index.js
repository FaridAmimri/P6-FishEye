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

        for (let i = 0; i < result.photographers.length; i++) {
            displayPhotographer(result.photographers[i].name, result.photographers[i].id, result.photographers[i].city, result.photographers[i].country, result.photographers[i].tags, result.photographers[i].tagline, result.photographers[i].price, result.photographers[i].portrait)
        }

        const portrait = document.querySelector('.portrait')
        portrait.addEventListener('click', () => {
            document.querySelector('main').innerHTML = ""

            let photographers = result.photographers
            photographers = photographers.filter(function (element) {
                for (let i = 0; i < element.tags.length; i++) {
                    if (element.tags[i] === 'portrait') {
                        return element
                    }
                }
            })

            for (let i = 0; i < photographers.length; i++) {
                displayPhotographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait)
            }
        })

        const art = document.querySelector('.art')
        art.addEventListener('click', () => {
            document.querySelector('main').innerHTML = ""

            let photographers = result.photographers
            photographers = photographers.filter(function (element) {
                for (let i = 0; i < element.tags.length; i++) {
                    if (element.tags[i] === 'art') {
                        return element
                    }
                }
            })

            for (let i = 0; i < photographers.length; i++) {
                displayPhotographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait)
            }
        })

        const fashion = document.querySelector('.fashion')
        fashion.addEventListener('click', () => {
            document.querySelector('main').innerHTML = ""

            let photographers = result.photographers
            photographers = photographers.filter(function (element) {
                for (let i = 0; i < element.tags.length; i++) {
                    if (element.tags[i] === 'fashion') {
                        return element
                    }
                }
            })

            for (let i = 0; i < photographers.length; i++) {
                displayPhotographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait)
            }
        })

        const architecture = document.querySelector('.architecture')
        architecture.addEventListener('click', () => {
            document.querySelector('main').innerHTML = ""

            let photographers = result.photographers
            photographers = photographers.filter(function (element) {
                for (let i = 0; i < element.tags.length; i++) {
                    if (element.tags[i] === 'architecture') {
                        return element
                    }
                }
            })

            for (let i = 0; i < photographers.length; i++) {
                displayPhotographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait)
            }
        })

        const travel = document.querySelector('.travel')
        travel.addEventListener('click', () => {
            document.querySelector('main').innerHTML = ""

            let photographers = result.photographers
            photographers = photographers.filter(function (element) {
                for (let i = 0; i < element.tags.length; i++) {
                    if (element.tags[i] === 'travel') {
                        return element
                    }
                }
            })

            for (let i = 0; i < photographers.length; i++) {
                displayPhotographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait)
            }
        })

        const sport = document.querySelector('.sport')
        sport.addEventListener('click', () => {
            document.querySelector('main').innerHTML = ""

            let photographers = result.photographers
            photographers = photographers.filter(function (element) {
                for (let i = 0; i < element.tags.length; i++) {
                    if (element.tags[i] === 'sport') {
                        return element
                    }
                }
            })

            for (let i = 0; i < photographers.length; i++) {
                displayPhotographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait)
            }
        })

        const animals = document.querySelector('.animals')
        animals.addEventListener('click', () => {
            document.querySelector('main').innerHTML = ""

            let photographers = result.photographers
            photographers = photographers.filter(function (element) {
                for (let i = 0; i < element.tags.length; i++) {
                    if (element.tags[i] === 'animals') {
                        return element
                    }
                }
            })

            for (let i = 0; i < photographers.length; i++) {
                displayPhotographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait)
            }
        })

        const events = document.querySelector('.events')
        events.addEventListener('click', () => {
            document.querySelector('main').innerHTML = ""

            let photographers = result.photographers
            photographers = photographers.filter(function (element) {
                for (let i = 0; i < element.tags.length; i++) {
                    if (element.tags[i] === 'events') {
                        return element
                    }
                }
            })

            for (let i = 0; i < photographers.length; i++) {
                displayPhotographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait)
            }
        })

    })

