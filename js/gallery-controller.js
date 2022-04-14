'use strict'

var gElEditor = document.querySelector('.content-container')
var gElGalleryContainer = gElEditor.querySelector('.gallery-container')
var gElGallery = gElGalleryContainer.querySelector('.grid-container')

function renderGallery() {
    const imgs = getImgs()
    let strHtmls = ``
    imgs.forEach(img => {
        const strHtml = `<div><img src="img/${img.id}.jpg" onclick="onImgSelect(this)" id=${img.id}></div>`
        strHtmls += strHtml
    })


    gElGallery.innerHTML = strHtmls
}

function onOpenGallery(){
    gElGalleryContainer.style.display="block"
    gElCnvasContainer.style.display="none"
}

function onImgSelect(elImg) {
    setImg(elImg)
    renderMeme()
}

