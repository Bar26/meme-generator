'use strict'

// var gImgMap = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]


var gMeme = {
    selectedImgId: '01',
    selectedLineIdx: 0,
    lines: [
        {
            txt:'your text here',
            size: 50,
            align: 'center',
            color: 'red',
            pos:{x:200,y:50}
        },
        {
            txt:'your text here',
            size: 50,
            align: 'center',
            color: 'red',
            pos:{x:200,y:350}
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

function setTextSize(diff){
    gMeme.lines[gCurrLineIdx].size+=diff
}

function setTextColor(color){
    gMeme.lines[gCurrLineIdx].color = color
}

// function isTextClicked(clickedPos) {
//     const x=200
//     const y=350
    
// }