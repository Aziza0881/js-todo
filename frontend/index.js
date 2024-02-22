let grid = document.querySelector('.grid')
let url = 'http://localhost:8080/'

function reload(arr, place) {
    place.innerHTML = ''

    for(let item of arr) {
        let card = document.createElement('div')
        let title = document.createElement('h3')
        let desc = document.createElement('div')
        let company = document.createElement('h4')
        let email = document.createElement('h4')
        let tel = document.createElement('h4')
        let a = document.createElement('a')
        let aBtn = document.createElement('button')

        card.classList.add('card')
        title.classList.add('title')
        desc.classList.add('desc')
        a.classList.add('more')
        aBtn.classList.add('moreBtn')

        place.append(card)
        card.append(title, desc, a)
        desc.append(company,email, tel)
        a.append(aBtn)

        a.href = './okno.html?id=' + item.id

        title.innerHTML = item.name
        company.innerHTML = item.username
        tel.innerHTML = item.phone
        aBtn.innerHTML = 'Подробнее'
    }
}


let user_id = document.querySelector('.user_id')
let user_name = document.querySelector('.user_name')

let id = location.search.split('=').at(-1)

fetch('http://localhost:8080/users/' + id)
.then(res => res.json())
.then(res => {
    user_name.innerHTML = res.name
    user_id.innerHTML = res.id

})


let total = document.querySelector('.total')
let next = document.querySelector('.next')

function getData1() {
    total.onclick = () => {
        
            fetch(url + 'users1')
            .then(res => res.json())
            .then(res => reload(res, grid))
          
            }
    }
    getData1()




function getData() {
    fetch(url + 'users')
    .then(res => res.json())
    .then(res => reload(res, grid))
    
    
}

getData()