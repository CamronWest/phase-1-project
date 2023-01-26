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


function scrollEvent(){
    document.addEventListener('scroll', (event) => {
        event.preventDefault();
        hiddenElements.forEach((el) => observer.observe(el));
    })
}
scrollEvent()



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


let num = 1;

function renderTravel(cards){
    cards.forEach((card) => {
        const cardsList = document.querySelector('#cards')
        var info = document.createElement('div')
        info.id = `card-${num}`
        info.className = 'card'
        num++;
        console.log(num);
        
        
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

        const button = document.createElement('button')
        button.textContent = 'LOVE'
        button.className = 'like-button'
        button.addEventListener('click', () => {
            button.textContent = 'LOVED!'
          })
          button.addEventListener("click", () => alert('Destination has been added to your Favorites'))
        
    
        const button2 = document.createElement('button')
        button2.textContent = 'Dislike'
        button2.className = 'dislike-button'
        button2.addEventListener('click', () => {
            button2.textContent = 'Not my Fave'
          })



        info.append(h2, img, p, p2, p3, button, button2)
        cardsList.append(info)
    }
    )}


function addNewVacation(){
    const form = document.querySelector(".add-vacation-form")
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






const likeButton = document.getElementById('#like-button');
likeButton.addEventListener('click', () => {
data.likes = data.likes + 1;
likesLocation.textContent = `${data.likes} likes`;
})
let numOfLikes = 0;






// const likeButton = document.getElementById('#like-button');
// likeButton.addEventListener('click', () => {
// data.likes = data.likes + 1;
// likesLocation.textContent = `${data.likes} likes`;
// })
// let numOfLikes = 0;
