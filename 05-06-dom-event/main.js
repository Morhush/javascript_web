let rulesModalWindow = document.getElementsByClassName('rules')[0]
console.log(1, rulesModalWindow);

let buttons = rulesModalWindow.getElementsByTagName('button')
console.log(2, buttons);

for (let i = 0; i < buttons.length; i++) {
    console.log(3, buttons[i]);
    buttons[i].onclick = function(e){
        console.log(e)
        rulesModalWindow.style.display = 'none'
    }
}

let openHelp = document.querySelector('main button')
openHelp.onclick = function(){
    rulesModalWindow.style.display = 'flex';
}

const boardItems = [
    {name:'bullbasaur', img:'bullbasaur.png'},
    {name:'charmander', img:'charmander.png'},
    {name:'eevee', img:'eevee.png'},
    {name:'pikachu', img:'pikachu.png'},
    {name:'psyduck', img:'psyduck.png'},
    {name:'squirtle', img:'squirtle.png'},
    {name:'bullbasaur', img:'bullbasaur.png'},
    {name:'charmander', img:'charmander.png'},
    {name:'eevee', img:'eevee.png'},
    {name:'pikachu', img:'pikachu.png'},
    {name:'psyduck', img:'psyduck.png'},
    {name:'squirtle', img:'squirtle.png'},
];

boardItems.sort(()=>Math.random() - 0.5)

let images = 'images/';
let initImg = 'pokeball.jpg'
let selectImg = 'pokecoin.jpg'
let sectionBoard = document.getElementById('board')
let cardsId = []
let countResult = 0
let spanResult = document.getElementById('result')

function flipImg(e){

    let id = this.getAttribute('id')
    
    console.log('i=', cardsId, cardsId.length/ cardsId.length < 3)
    
    if (cardsId.length <= 2 && !cardsId.includes(id)) {
        this.setAttribute('src', images + boardItems[id].img)

        cardsId.push(id)

        console.log('ids=', cardsId, cardsId.length)

        if (cardsId.length === 2)
            setTimeout(checkCards, 400)
    }
}

function checkCards(){
    countResult++

    let item1 = document.getElementById(cardsId[0])
    let item2 = document.getElementById(cardsId[1])

    if (item1.getAttribute('src') === item2.getAttribute('src')){
        
        item1 = setAttribute('src', images + initImg)
        item2 = setAttribute('src', images + initImg)
        item1.onclick = ''
        item2.onclick = ''
    } else {
        // повідомлення
        item1.setAttribute('src', images + initImg)
        item2.setAttribute('src', images + initImg)
    }
    cardsId = []
    spanResult.innerHTML = countResult
}

function createBoard(number=0){
    for(let i = 0; i < number; i++){
        let img = document.createElement('img')
        img.setAttribute('src', images + initImg)
        img.setAttribute('id', i)
        img.onclick = flipImg
        console.log(img)
        sectionBoard.append(img)
    }
}

createBoard(boardItems.length)





