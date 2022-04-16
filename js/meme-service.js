'use strict'

var gExtraLines = 0
var gPageIdx = 0
const PAGE_SIZE = 5
var gMemes = []

var gImojis = ['😂', '😋', '😍', '🤩', '❤', '💥', '🎊', '🎈', '🧁']

var gMeme = {
    selectedImgId: '01',
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'your text here',
            size: 50,
            align: 'center',
            color: 'white',
            pos: { x: gElCanvas.width / 2, y: 50 }
        },
        {
            txt: 'your text here',
            size: 50,
            align: 'center',
            color: 'white',
            pos: { x: gElCanvas.width / 2, y: 350 }
        }
    ]
}

function getMeme() {
    return gMeme
}

function setImg(elImg) {
    const imgId = elImg.id
    gMeme.selectedImgId = imgId
}

function setTextSize(diff) {
    gMeme.lines[gCurrLineIdx].size += diff
}

function setTextColor(color) {
    gMeme.lines[gCurrLineIdx].color = color
}


function alignText(alignTo) {
    gMeme.lines[gCurrLineIdx].align = alignTo
}

function addLine(str) {
    if (str) gMeme.lines.push(_createLine(str))
    else gMeme.lines.push(_createLine())
    gExtraLines++
}

function _createLine(str) {
    let line
    if (str) {
        line = {
            txt: str,
            size: 50,
            align: 'center',
            color: 'white',
            pos: { x: gElCanvas.width / 2, y: (gElCanvas.height / 2) + (50 * gExtraLines) }
        }
    } else {
        line = {
            txt: 'your text here',
            size: 50,
            align: 'center',
            color: 'white',
            pos: { x: gElCanvas.width / 2, y: (gElCanvas.height / 2) + (50 * gExtraLines) }
        }
    }
    return line
}


function clearLines() {
    gMeme.lines.splice(2)
    gExtraLines = 0
}

function getImojisForDisplay() {
    var imojis = gImojis
    const idxStart = gPageIdx
    imojis = imojis.slice(idxStart, idxStart + PAGE_SIZE)
    return imojis
}

function seqPageChanege(diff) {
    gPageIdx += diff
    if (gPageIdx + PAGE_SIZE >= gImojis.length) {
        gPageIdx = 0;
    }
}

function getPageIdx() {
    return gPageIdx
}

function saveCanvas(dataUrl) {
    gMemes.push(dataUrl)
    saveToStorage('memesDB', gMemes)
}

function getMemes() {
    gMemes = loadFromStorage('memesDB')
    return gMemes
}