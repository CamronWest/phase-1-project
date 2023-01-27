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

fetch('http://localhost:3000/Locations')
.then(res => res.json())
.then(data => renderTravel(data));





let num = 1;

function renderTravel(cards){
    cards.forEach((card) => {
        const cardsList = document.querySelector('#cards')
        const info = document.createElement('div')
        
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
        button.className = 'like-button'
        button.id = card.id;

       
    
        const button2 = document.createElement('button')
        button2.textContent = ''
        button2.className = 'dislike-button'

        const primaryNav = document.querySelector('.primary-nav')
        const favoritePlace = document.createElement('li')
        


        button.addEventListener('click', function(){
        
            fetch(`http://localhost:3000/Locations/${card.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    likes: 'loved'
                })
        })
        .then(res => res.json())
        .then(card => console.log(card.likes))
        const favoritePlace = document.createElement('li')
        favoritePlace.textContent = h2.textContent
        favoritePlace.className = 'favorite-place'
        primaryNav.appendChild(favoritePlace)

    }) 
        button2.addEventListener('click', function(){        
                fetch(`http://localhost:3000/Locations/${card.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    likes: 'NONE'
                })
            })
                .then(res => res.json())
                .then((card) => console.log(card.likes))
                primaryNav.remove(favoritePlace.textContent)
                
        })
             
        button.addEventListener("click", () => alert('Destination has been added to your Favorites'))
        button2.addEventListener("click", () => alert('Destination has been removed from your Favorites'))
        
        info.append(h2, img, p, p2, p3, button, button2)
        cardsList.append(info)
    })
}


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








