
const openButton = document.getElementById('Open-menu')
    nav = document.querySelector('nav')
    exitButton = document.getElementById('exit-menu');

openButton.addEventListener('click', () => {
        nav.classList.add('menu-btn')
})

exitButton.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
})

