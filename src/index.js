window.addEventListener('DOMContentLoaded', (event) => { window.alert("choose your next vacation!"); });

function navbarButton(){
    const openButton = document.querySelector("#menu-cta")
    nav = document.querySelector('nav');

openButton.addEventListener('click', () => {
        nav.classList.add('menu-btn')
})
}
navbarButton();

fetch('http://localhost:3000/domestic')
.then(res => res.json())
.then(data => renderTravel(data));

fetch ('http://localhost:3000/international')
.then(res => res.json())
.then(data => renderTravel(data));

function renderTravel(cards){
    cards.forEach((card) => {
        const cardsList = document.querySelector('#cards')
        const info= document.createElement('div')
        card.className = 'card'

        const h2 = document.createElement('h2')
        h2.textContent = card.location

        const img = document.createElement('img')
        img.src = card.image
        img.className = 'img'

        const p = document.createElement('p')
        p.textContent = `Top Rated Actiity: ${card.activity}`
        

        const p2 = document.createElement('p')
        p2.textContent = `Five Star Hotel: ${card.hotel}`

        const p3 = document.createElement('p')
        p3.textContent = `Favorite Restaurant: ${card.restaurant}`
        

        info.append(h2, img, p, p2, p3)
        cardsList.append(info)

    })
}





// openButton.addEventListener('click', () => {
//     nav.classList.add('menu-btn')
// const openButton = document.getElementById('Open-menu')
//     nav = document.querySelector('nav')
//     exitButton = document.getElementById('exit-menu');
