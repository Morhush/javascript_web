let rulesModalWindow = document.getElementsByClassName('rules')[0]
console.log(1, rulesModalWindow);

let buttons = rulesModalWindow.getElementsByTagName('button')
console.log(2, buttons);

for (let i = 0; i < buttons.lentgth; i++) {
    console.log(3, buttons[i]);
    buttons[i].onclick = function(e){
        console.log(e)
        rulesModalWindow.style.display = 'none'
    }
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
]

let images = 'images/';
let pokeball = 'pokeball.jpg'
let sectionBoard = document.getElementById('board')

function flipImg(){}

function createBoard(number=12){
    for(let i = 0; i < number; i++){
        let img = document.createElement('img')
        img.setAttribute('src', images + pokeball)
        img.setAttribute('id', 'i' + i)
        img.onclick = flipImg
        sectionBoard.append(img)
    }
}

createBoard(boardItems.lentgth)





