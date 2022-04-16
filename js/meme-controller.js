'use strict'

var gElEditor = document.querySelector('.content-container')
var gElCanvasContainer = gElEditor.querySelector('.edit-container')
var gElCanvas = gElCanvasContainer.querySelector('#canvas')
var gelMyMeme = document.querySelector('.my-meme-container')
var gCtx = gElCanvas.getContext('2d')
var gElModal = document.querySelector('.modal')
var gElShare = document.querySelector('.share-container')
var gCurrLineIdx = 0

function renderMeme() {
    gElGalleryContainer.style.display = "none"
    gElCanvasContainer.style.display = "flex"
    const meme = getMeme()
    const imgId = meme.selectedImgId
    var img = new Image()
    img.src = `img/${imgId}.jpg`
    resizeCanvas(img.width, img.height)

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gMeme.lines.forEach((line, idx) => {
            let pos = line.pos
            let txt = line.txt
            drawText(txt, pos.x, pos.y, idx)

        })
    }
}

function drawText(txt, x, y, idx) {

    gCtx.beginPath()
    gCtx.textAlign = gMeme.lines[gCurrLineIdx].align
    gCtx.textBaseline = 'middle'
    gCtx.lineWidth = 1;
    gCtx.font = gMeme.lines[gCurrLineIdx].size + 'px impact'
    const textToMesure = gCtx.measureText(txt)
    const w = textToMesure.width
    if (gCurrLineIdx === idx) {
        gCtx.rect(x - w / 2 - 10, y - 27, w + 20, 54)
        gCtx.strokeStyle = 'rgba(252, 252, 252, 0.871)'
        gCtx.stroke()
        gCtx.fillStyle = 'rgba(211, 211, 211, 0.671)'
        gCtx.fill()
    }
    gCtx.fillStyle = gMeme.lines[gCurrLineIdx].color
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = '4'
    gCtx.strokeText(txt, x, y)
    gCtx.fillText(txt, x, y)
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


function onSwitchLine() {
    gCurrLineIdx++
    if (gCurrLineIdx === gMeme.lines.length) gCurrLineIdx = 0
    renderMeme()
}

function onDownloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'your-canvas'
}


function onSaveCanvas() {
    const imageData = gElCanvas.toDataURL("image/png")
    saveCanvas(imageData)
    _openModal()
    renderMemes()
}

function renderMemes() {
    const memes = getMemes()
    let strHtml = ``
    memes.forEach(meme => strHtml += `<div><img src="${meme}"></div>`)
    gelMyMeme.innerHTML = strHtml
}


function onOpenMyMeme() {
    gElGalleryContainer.style.display = "none"
    gElCanvasContainer.style.display = "none"
    gElAbout.style.display="none"
    gelMyMeme.style.display = "block"
    _openModal()
    onCloseModal()
    myMemeActive()
}

function _openModal() {
    gElModal.style.visibility = "visible"
    gElModal.classList.add('open')
    document.body.classList.add('modal-open')
}

function onCloseModal() {
    gElModal.style.visibility = "hidden"
    gElModal.classList.remove('open')
    document.body.classList.remove('modal-open')
}

function onShare() {
    _openShare()
    uploadCanvas()
}
function _openShare() {
    gElShare.style.visibility = "visible"
    gElShare.classList.add('open')
    document.body.classList.add('share-open')
}

function onCloseShare() {
    gElShare.style.visibility = "hidden"
    gElShare.classList.remove('open')
    document.body.classList.remove('share-open')
}

function onAlignText(alignTo) {
    alignText(alignTo)
    renderMeme()
}

function onAddLine(str) {
    addLine(str)
    renderMeme()
}

function onClearCanvas() {
    clearLines()
    renderMeme()
}

function resizeCanvas(width, height) {
    const ratio = width / height
    gElCanvas.width = gElCanvas.height * ratio
}


function renderImojis() {
    const imojis = getImojisForDisplay()
    let strHtml = ``
    strHtml += `<div class="page-idx" onclick="onSeqPageChange(-1)">&laquo;</div>`
    imojis.forEach(imoji => strHtml += `<div onclick="onAddLine('${imoji}')">${imoji}</div>`)
    strHtml += `<div class="page-idx" onclick="onSeqPageChange(1)">&raquo;</div>`
    document.querySelector('.imojis').innerHTML = strHtml
}

function onSeqPageChange(diff) {
    seqPageChanege(diff)
    const page = getPageIdx()
    if (page < 0) return
    renderImojis()
}





