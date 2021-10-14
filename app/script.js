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