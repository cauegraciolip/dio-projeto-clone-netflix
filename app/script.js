/* ===== NAV - PROFILE - SEARCH ===== */
const search = document.getElementById('lupa')
const nav = document.getElementById('nav')
const header = document.getElementById('header')

function showInput() {
    const pesquisa = document.getElementById('pesquisa')
    pesquisa.classList.toggle('pesquisaActive')
}

function showMenu() {
    nav.classList.toggle('activeMenu') 
}

search.addEventListener('click', showInput)

/* ===== SHOW AND HIDDE DESCRIPTION ===== */

const exitButton = document.getElementById('exit-description')
const moreInformationButton = document.getElementById('more-information')

const infoSeries = document.getElementById('info-serie')

function hiddeDescription() {
    infoSeries.classList.remove('description-display')
}

function showDescription() {
    infoSeries.classList.add('description-display')
}


exitButton.addEventListener('click', hiddeDescription)
moreInformationButton.addEventListener('click', showDescription)