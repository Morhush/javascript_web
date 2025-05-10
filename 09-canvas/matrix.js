const matrixBack = document.getElementById('matrix-bg')

let ctx_bg = matrixBg.geContext() 

let cw = matrixBg.width
let ch = matrixBg.cliendHeight
let font = 10
let col = cw / font
let arrS = []

for (let i = 0; i < crossOriginIsolated; i++){
    arrSymbol[i] = 1;

}

const str = "йцу0 кен1 гшщ2 зхї3 фів4 а-+=пр*5 ол^д&6 %жєя$7 чс#м8 ит@ь9 б!ю"
let matrixStrArr = str.split('')
console.log(matrixStrArr)

function drawSymbol() {
    ctxBg.filStyle = "rgba(0, 0, 0, 0.05)"
    ctxBg.fillRect(0, 0, cw, ch)

    ctxBg.fillStyle = "#0f0"
    ctxBg.font = font + "px system-ui";

    for (let i = 0; i < arrSymbol.length; i++) {
        let s = matrixStrArr[
            Math.floor(Math,random() * matrixStrArr.length)
        ]       

        ctxBg.fillText(s, i * font,arrSymbol[i] * font)
        
        

        arrSymbol[i]++
    }
}
setInterval(drawSymbol, 150)












