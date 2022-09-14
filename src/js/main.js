import axios from "axios"
/* const data = fetch('./assets/API-MCU.json')  */
import data from "../assets/API-MCU.json"
/*import("API-MCU.json", { assert: { type: "json" } }); 
import("./API-MCU.json", {
    assert: {
        type: "json"
    }
})*/

const cards = document.querySelector('div.cards')
const indexTitle = document.querySelector('div.sideTitle')
const title = document.querySelector('div.titles')
const navFilm = document.querySelector('div.navFilms')
const navAll = document.querySelector('div.navAll')
const navTvShows = document.querySelector('div.navShows')
const navShorts = document.querySelector('div.navShorts')
const navWebSeries = document.querySelector('div.navWeb')
const liFilm = document.querySelector('li.listFilms')
const liAll = document.querySelector('li.listAll')
const liTvShows = document.querySelector('li.listShows')
const liShorts = document.querySelector('li.listShorts')
const liWebSeries = document.querySelector('li.listWeb')

axios.get(data).then(res => {
    renderList(res.data.shows, 0)

    navAll.addEventListener("click", function (event) {
        renderList(res.data.shows, 0)
    })

    liAll.addEventListener("click", function (event) {
        renderList(res.data.shows, 0)
    })

    navFilm.addEventListener("click", function (event) {
        console.log("CIAUUU")
        renderList(res.data.shows, 1)
    })

    liFilm.addEventListener("click", function (event) {
        renderList(res.data.shows, 1)
    })

    navTvShows.addEventListener("click", function (event) {
        renderList(res.data.shows, 2)
    })

    liTvShows.addEventListener("click", function (event) {
        renderList(res.data.shows, 2)
    })

    navShorts.addEventListener("click", function (event) {
        renderList(res.data.shows, 3)
    })

    liShorts.addEventListener("click", function (event) {
        renderList(res.data.shows, 3)
    })

    navWebSeries.addEventListener("click", function (event) {
        renderList(res.data.shows, 4)
    })

    liWebSeries.addEventListener("click", function (event) {
        renderList(res.data.shows, 4)
    })
})

function renderList(apiItems, options) {
    let sideTitle = document.createElement("span")

    navAll.classList.remove("text-red-600", "border-b-4", "border-red-600")
    navAll.classList.add("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")

    navFilm.classList.remove("text-red-600", "border-b-4", "border-red-600")
    navFilm.classList.add("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")

    navShorts.classList.remove("text-red-600", "border-b-4", "border-red-600")
    navShorts.classList.add("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")

    navTvShows.classList.remove("text-red-600", "border-b-4", "border-red-600")
    navTvShows.classList.add("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")

    navWebSeries.classList.remove("text-red-600", "border-b-4", "border-red-600")
    navWebSeries.classList.add("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")

    cards.innerHTML = ""
    title.innerHTML = ""

    let ul = document.createElement("ul")
    ul.classList.add("text-center")

    switch (options) {
        case 0:
            sideTitle.textContent = "Titoli MCU"
            indexTitle.innerHTML = ""
            indexTitle.appendChild(sideTitle)

            navAll.classList.remove("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")
            navAll.classList.add("text-red-600", "border-b-4", "border-red-600")

            break

        case 1:
            sideTitle.textContent = "Film"
            indexTitle.innerHTML = ""
            indexTitle.appendChild(sideTitle)

            navFilm.classList.remove("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")
            navFilm.classList.add("text-red-600", "border-b-4", "border-red-600")

            break

        case 2:
            sideTitle.textContent = "Serie TV"
            indexTitle.innerHTML = ""
            indexTitle.appendChild(sideTitle)

            navTvShows.classList.remove("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")
            navTvShows.classList.add("text-red-600", "border-b-4", "border-red-600")

            break

        case 3:
            sideTitle.textContent = "Cortometraggi"
            indexTitle.innerHTML = ""
            indexTitle.appendChild(sideTitle)

            navShorts.classList.remove("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")
            navShorts.classList.add("text-red-600", "border-b-4", "border-red-600")

            break

        case 4:
            sideTitle.textContent = "Web Serie"
            indexTitle.innerHTML = ""
            indexTitle.appendChild(sideTitle)

            navWebSeries.classList.remove("hover:text-red-600", "hover:border-b-2", "hover:border-red-600")
            navWebSeries.classList.add("text-red-600", "border-b-4", "border-red-600")

            break
    }

    apiItems.forEach(item => {
        let data = JSON.parse(JSON.stringify(item))

        switch (options) {
            case 0:
                renderCard(data, options)
                renderTitles(data.name, ul)

                break

            case 1:
                if (data.type == "Film") {
                    renderCard(data, options)
                    renderTitles(data.name, ul)
                }

                break

            case 2:
                if (data.type == "Serie TV") {
                    renderCard(data, options)
                    renderTitles(data.name, ul)
                }

                break

            case 3:
                if (data.type == "Cortometraggio") {
                    renderCard(data, options)
                    renderTitles(data.name, ul)
                }

                break

            case 4:
                if (data.type == "Web Serie") {
                    renderCard(data, options)
                    renderTitles(data.name, ul)
                }

                break
        }
    })
}

function renderCard(data, options) {
    let divCard = document.createElement("div")
    divCard.setAttribute("id", data.name)
    divCard.classList.add("grid", "grid-flow-row", "auto-rows-max", "lg:max-w-sm", "overflow-hidden", "pt-6")

    let divImg = document.createElement("div")
    divImg.classList.add("flex", "justify-center", "h-52")

    let img = document.createElement("img")
    img.setAttribute("src", ("./img/" + data.img))
    img.setAttribute("alt", ("Copertina di " + data.name))
    img.classList.add("w-40")
    divImg.appendChild(img)

    let divTitle = document.createElement("div")
    divTitle.classList.add("h-28", "lg:h-20", "px-6", "pt-4", "pb-10")

    let name = document.createElement("div")
    name.classList.add("font-bold", "text-xl", "text-black", "text-center")
    name.textContent = data.name
    divTitle.appendChild(name)

    let divInfo = document.createElement("div")
    divInfo.classList.add("flex", "justify-center", "h-14", "px-6", "pt-1", "pb-2")

    if (options == 0) {
        let info = document.createElement("span")
        info.classList.add("inline-block", "bg-gray-200", "rounded-full", "px-3", "py-1", "text-center", "text-sm", "font-semibold", "text-gray-700", "mr-2", "mb-2")
        info.textContent = data.type
        divInfo.appendChild(info)
    }

    if (options != 3 && options != 4 && data.phase != "Nessuna") {
        let info = document.createElement("span")
        info.classList.add("inline-block", "bg-gray-200", "rounded-full", "px-3", "py-1", "text-center", "text-sm", "font-semibold", "text-gray-700", "mr-2", "mb-2")
        info.textContent = "Fase " + data.phase
        divInfo.appendChild(info)
    }

    if (options == 2 || options == 4) {
        let numSeasons = data.episodes[data.episodes.length - 1].season
        let season = document.createElement("span")

        season.classList.add("inline-block", "bg-gray-200", "rounded-full", "px-3", "py-1", "text-center", "text-sm", "font-semibold", "text-gray-700", "mr-2", "mb-2")

        if (numSeasons == 1) {
            season.textContent = numSeasons + " stagione"
        }
        else {
            season.textContent = numSeasons + " stagioni"
        }

        divInfo.appendChild(season)
    }

    if ((options != 2 && options != 4) && (data.type == "Film" || data.type == "Cortometraggio")) {
        let info = document.createElement("span")
        let date = data.releaseDate[0] + "/" + data.releaseDate[1] + "/" + data.releaseDate[2]

        info.classList.add("inline-block", "bg-gray-200", "rounded-full", "px-3", "py-1", "text-center", "text-sm", "font-semibold", "text-gray-700", "mr-2", "mb-2")
        info.textContent = date
        divInfo.appendChild(info)
    }
    else {
        let year1 = data.episodes[0].releaseDate[2]
        let year2 = data.episodes[data.episodes.length - 1].releaseDate[2]

        let info = document.createElement("span")
        let date

        if (year1 != year2) {
            date = year1 + "-" + year2
        }
        else {
            date = year1
        }

        info.classList.add("inline-block", "bg-gray-200", "rounded-full", "px-3", "py-1", "text-center", "text-sm", "font-semibold", "text-gray-700", "mr-2", "mb-2")
        info.textContent = date
        divInfo.appendChild(info)
    }

    divCard.appendChild(divImg)
    divCard.appendChild(divTitle)
    divCard.appendChild(divInfo)

    cards.appendChild(divCard)
}

function renderTitles(el, ul) {
    let filmTitle = document.createElement("li")
    filmTitle.classList.add("px-2", "mb-2")

    let link = document.createElement("a")
    link.setAttribute("href", "#" + el)
    link.classList.add("cursor-pointer", "hover:font-bold", "hover:text-red-600")
    link.textContent = el

    filmTitle.appendChild(link)
    ul.appendChild(filmTitle)

    title.appendChild(ul)
}