const btn = document.getElementById('btn')

function showMenu() {
    const nav = document.getElementById('nav')
   nav.classList.toggle('active')
}

btn.addEventListener('click', showMenu)