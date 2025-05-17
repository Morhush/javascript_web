console.log('Start!');
const matrixBg = document.getElementById('matrix-bg')
let ctxBg = matrixBg.getContext('2d') 
let cw = matrixBg.width
let ch = matrixBg.height
let font = 10
let col = cw / font
let arrSymbolPosY = []

for (let i = 0; i < col; i++) {
    arrSymbolPosY[i] = 1;

}

const str = "QW йцу0er кtyен1 yuгшщ2 зioхї3 фpaів4 аsdf-+=прg*5 оhjkл^д&6 %жlzxcєя$7 чсvbn#м8 иmт@ь9 б!ю"
let matrixStrArr = str.split('');
console.log(matrixStrArr);


ctxBg.fillStyle = "black";
ctxBg.fillRect(0, 0, cw, ch);

function drawSymbol() {
    ctxBg.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctxBg.fillRect(0, 0, cw, ch);

    ctxBg.fillStyle = "#0f0";
    ctxBg.font = font + "px system-ui";

    for (let i = 0; i < arrSymbolPosY.length; i++) {
        let s = matrixStrArr[
            Math.floor(Math.random() * matrixStrArr.length)
        ]       

        ctxBg.fillText(s, i * font, arrSymbolPosY[i] * font)
        
        if(arrSymbolPosY[i] * font > ch && Math.random() > 0.95)
            arrSymbolPosY[i] = 1

        arrSymbolPosY[i]++
    }
}
setInterval(drawSymbol, 60)




// ===================



const canvas3 = document.getElementById('canvas3')
const ctx3 = canvas3.getContext('2d')

const sliderArray = [
    'img-2/1.jpg', 'img-2/2.jpg', 'img-2/3.jpg',
    'img-2/4.jpg', 'img-2/5.jpg', 'img-2/6.jpg'
]
let sliderIndex = 0;
let slideImg = new Image()
slideImg.src = sliderArray[sliderIndex]
slideImg.onload = function(){
    ctx3.drawImage(slideImg, 0, 0)
}

let leftButton = document.getElementById('left-button')
let rightButton = document.getElementById('right-button')

leftButton.onclick = function (event) {
    sliderIndex--
    if(sliderIndex < 0)
        sliderIndex = sliderArray.length - 1
    
    slideImg.src = sliderArray[sliderIndex]
}
rightButton.onclick = function (event) {
    sliderIndex++
    if(sliderIndex >= sliderArray.length)
        sliderIndex = 0
    
    slideImg.src = sliderArray[sliderIndex]
}













