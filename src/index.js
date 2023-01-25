
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

// function scrollEvent(){
//     observer.addEventListener('scroll', (event) => {
//         event.preventDefault();
//     })
// }



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
        const info = document.createElement('div')
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
<<<<<<< HEAD


=======
>>>>>>> a507642b2dca913c2cba340a1ebf44fc6d5ae2c3

        info.append(h2, img, p, p2, p3)
        cardsList.append(info)
    })

<<<<<<< HEAD
        
}

=======
      
}


>>>>>>> a507642b2dca913c2cba340a1ebf44fc6d5ae2c3
// function addNewVacation(){
// const form = document.querySelector(".add-vacation-form")
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const nameInput = event.target.name.value
//     const imageInput = event.target.image.value

//     const newVacation = {
//     name: nameInput,
//     image: imageInput,
//     likes: 0
//     }
// })

<<<<<<< HEAD


function addNewVacation(){
   const form = document.querySelector(".add-vacation-form")
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const nameInput = event.target.name.value
    const imageInput = event.target.image.value

    const newVacation = {
    name: nameInput,
    image: imageInput,
    likes: 0
    }
})
}
=======
>>>>>>> a507642b2dca913c2cba340a1ebf44fc6d5ae2c3
function renderNewDestination(e){
    e.preventDefault();
    const name = document.querySelector("#name-input").value;
    const img = document.querySelector("#img-input").value;
    const activity = document.querySelector("#activity-input").value;
    const restaurant = document.querySelector("#restaurant-input").value;
    const hotel = document.querySelector("#hotel-input").value;

    let newDestination = {
        location: name,
        image: img,
        activity: activity,
        restaurant: restaurant,
        hotel: hotel
    };

    renderTravel([newDestination])
}

document.getElementById('destination-form').addEventListener('submit', renderNewDestination)




<<<<<<< HEAD


const likeButton = document.getElementById('#like-button');
likeButton.addEventListener('click', () => {
data.likes = data.likes + 1;
likesLocation.textContent = `${data.likes} likes`;
})
let numOfLikes = 0;







=======
>>>>>>> a507642b2dca913c2cba340a1ebf44fc6d5ae2c3
// const likeButton = document.getElementById('#like-button');
// likeButton.addEventListener('click', () => {
// data.likes = data.likes + 1;
// likesLocation.textContent = `${data.likes} likes`;
// })
// let numOfLikes = 0;









//function addNewVacation(){
 //   const form = document.querySelector(".add-vacation-form")
//form.addEventListener('submit', (event) => {
    //event.preventDefault()
    //const nameInput = event.target.name.value
    //const imageInput = event.target.image.value


// openButton.addEventListener('click', () => {
//     nav.classList.add('menu-btn')
//     const openButton = document.getElementById('Open-menu')
//     nav = document.querySelector('nav')
//     exitButton = document.getElementById('Exit-menu');



// const likeButton = document.getElementById('#like-button');
// likeButton.addEventListener('click', () => {
// data.likes = data.likes + 1;
// likesLocation.textContent = `${data.likes} likes`;

// let numOfLikes = 0;

// })
// let numOfLikes = 0;
// // })
//const likeButton = document.getElementById('#like-button');
//likeButton.addEventListener('click', () => {
//data.likes = data.likes + 1;
//likesLocation.textContent = `${data.likes} likes`;
//})
//let numOfLikes = 0;
