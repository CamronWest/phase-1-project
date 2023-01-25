//window.addEventListener('DOMContentLoaded', (event) => { window.alert("choose your next vacation!"); });
// const locationContainer = document.getElementById("container-location");

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
        info.className = 'card'

        const h2 = document.createElement('h2')
        h2.textContent = card.location

        const img = document.createElement('img')
        img.src = card.image
        img.className = 'img'

        const p = document.createElement('p')
        p.textContent = `Top Rated Activity: ${card.activity}`
        

        const p2 = document.createElement('p')
        p2.textContent = `Five Star Hotel: ${card.hotel}`

        const p3 = document.createElement('p')
        p3.textContent = `Favorite Restaurant: ${card.restaurant}`

        // const locationLikes = document.createElement('likes')
        // locationLikes.textContent = "Likes: "

        // const likesNum = document.createElement('h4')
        // likesNum.className = "likes-num"
        // likesNum.textContent = location.likes

        // const likesButton = document.createElement('button')
        // likesButton.className = "likes-button"
        // likesButton.textContent = "♥"
        // likesButton.addEventListener("click", function(e) {
        //     e.stopPropagation();
        //     location.likes += 1
        //     likesNum.textContent = location.likes

        info.append(h2, img, p, p2, p3)
        cardsList.append(info)
        // document.getElementById('destination-form').addEventListener('submit', renderNewDestination)
        
    })
}
// function renderNewDestination(e){
//     e.preventDefault();
//     const name = document.querySelector("#name-input").value;
//     const img = document.querySelector("#img-input").value;
//     let newDestination = {
//         name: name,
//         image: img,
//         likes: 0,
//     };
//     renderDestination(newDestination)
//     document.getElementById('destination-form').reset()
// }


//function addNewVacation(){
 //   const form = document.querySelector(".add-vacation-form")
//form.addEventListener('submit', (event) => {
    //event.preventDefault()
    //const nameInput = event.target.name.value
    //const imageInput = event.target.image.value

    //const newVacation = {
    //name: nameInput,
    //image: imageInput
    //likes: 0
    //}





// openButton.addEventListener('click', () => {
    // nav.classList.add('menu-btn')
    // const openButton = document.getElementById('Open-menu')
    // nav = document.querySelector('nav')
    // exitButton = document.getElementById('Exit-menu');


//const likeButton = document.getElementById('#like-button');
//likeButton.addEventListener('click', () => {
//data.likes = data.likes + 1;
//likesLocation.textContent = `${data.likes} likes`;
//})
//let numOfLikes = 0;

