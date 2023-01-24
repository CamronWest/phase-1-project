
const openButton = document.getElementById('Open-menu')
    nav = document.querySelector('nav')
    exitButton = document.getElementById('exit-menu');

openButton.addEventListener('click', () => {
        nav.classList.add('menu-btn')
})

exitButton.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
})


const cardList=document.querySelector('.card')
function renderDomestic(cards) {
    cards.forEach((card) => {
        const domesticCard = document.createElement('div')
        domesticCard.className = 'card'

        const location= document.querySelector("#location")
        location.textContent= card.location;

        const img = document.querySelector("body > div.card > img")
        img.className = 'img'


        const activity = document.querySelector("#activity")
        activity.textContent = card.activity

        const hotel = document.querySelector("#hotel")
        hotel.textContent = card.hotel

        const restaurant = document.querySelector("#restaurant")
        restaurant.textContent = card.restaurant

})