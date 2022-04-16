'use strict'
var gElAbout = document.querySelector('.about-container')

function onOpenAbout(){
    gElAbout.style.display="flex"
    gElGalleryContainer.style.display = "none"
    gElCanvasContainer.style.display = "none"
    gelMyMeme.style.display = "none"
    aboutActive()
}