'use strict'

var gElEditor = document.querySelector('.content-container')
var gElCnvasContainer = gElEditor.querySelector('.canvas-container')
var gElCanvas = gElCnvasContainer.querySelector('#canvas')
var gCtx = gElCanvas.getContext('2d')
var gCurrLineIdx = 0



function renderMeme() {
    gElGalleryContainer.style.display = "none"
    gElCnvasContainer.style.display = "block"
    const meme = getMeme()
    const imgId = meme.selectedImgId
    const text1 = meme.lines[0].txt
    const text2 = meme.lines[1].txt
    const pos1 = meme.lines[0].pos
    const pos2 = meme.lines[1].pos
    const lines = meme.lines
    var img = new Image()
    img.src = `img/${imgId}.jpg`
    var elBtn = gElCanvas.querySelector('.check')
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        // drawRect(50, 10)

        drawText(text1, pos1.x, pos1.y)
        drawText(text2, pos2.x, pos2.y)
        // drawButton(elBtn, 20, 20)
    }

}

function drawText(txt = 'your text here', x, y) {
    // gCtx.beginPath()
    // gCtx.fillStyle = "blue"
    // gCtx.rect(0, 50, 400, 70)

    // gCtx.fill()
    // gCtx = gElCanvas.getContext('2d')
    gCtx.textAlign = gMeme.lines[gCurrLineIdx].align;
    gCtx.textBaseline = 'middle';
    gCtx.lineWidth = 1;
    gCtx.font = gMeme.lines[gCurrLineIdx].size + 'px david';
    gCtx.fillStyle = gMeme.lines[gCurrLineIdx].color;
    gCtx.fillText(txt, x, y)

}

function drawRect(x, y) {
    gCtx.rect(x, y, 400, 100);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}


function onSetText(txt) {
    gMeme.lines[gCurrLineIdx].txt = txt
    renderMeme()
}

function onSetTextColor(color) {
    console.log(gMeme.lines[0].color)
    setTextColor(color)
    renderMeme()
}

function onSetTextSize(diff) {
    setTextSize(diff)
    renderMeme()
}

function drawButton(x, y) {

}

function onSwitchLine() {
    gCurrLineIdx += 1
    if (gCurrLineIdx === gMeme.lines.length) gCurrLineIdx = 0
}