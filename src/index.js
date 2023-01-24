// const openButton = document.getElementById('Open-menu')
//     nav = document.querySelector('nav')
//     exitButton = document.getElementById('exit-menu');


// openButton.addEventListener('click', () => {
//         nav.classList.add('menu-btn')
// })

// exitButton.addEventListener('click', () => {
//     nav.classList.remove('menu-btn')
// })
///
fetch('http://localhost:3000/domestic')
.then(res => res.json())
.then(data => renderDomestic(data));

// fetch ('http://localhost:3000/international')
// .then(res => res.json())
// .then(data => renderInternational(data));

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


openButton.addEventListener('click', () => {
        nav.classList.add('menu-btn')
})

}
// function renderInternational(international) {
//     international.forEach((card) => {
//         const internationalCard = document.createElement('div')
//         internationalCard.className = 'card'
//         const locationI= document.querySelector("#location > b")
//         location.textContent= card.location;

//         const imgI = document.querySelector("body > div.card > img")
//         imgI.src = card.image
//         imgI.className = ('.img')


//         const activityI = document.querySelector("#activity")
//         activityI.textContent = card.activity

//         const hotelI = document.querySelector("#hotel")
//         hotelI.textContent = card.hotel

//         const restaurantI = document.querySelector("#restaurant")
//         restaurantI.textContent = card.restaurant


//      internationalCard.append(locationI, imgI, activityI, hotelI, restaurantI)
//      cardsList.append(internationalCard)
//     })
// }
const openButton = document.getElementById('Open-menu')
    nav = document.querySelector('nav')
    exitButton = document.getElementById('exit-menu');