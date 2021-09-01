export function selectionPhotograph() {
    const container = document.createElement("div");
    container.className = "selection";

    const select = document.createElement("label");
    select.for = "option-select";
    select.textContent = "Trier par";
    container.append(select)
    const option = document.createElement("select")
    option.name = "option";
    option.id = "option-select";
    container.append(option)
    const popularity = document.createElement("option");
    popularity.value = "popularity";
    popularity.textContent = "Popularité";
    option.append(popularity)
    container.append(option)
    const date = document.createElement("option");
    date.value = "date";
    date.textContent = "Date";
    option.append(date)
    container.append(option)
    const title = document.createElement("option");
    title.value = "title";
    title.textContent = "Titre";
    option.append(title)
    container.append(option)

    document.querySelector('main').append(container);
}
