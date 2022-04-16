'use strict'

var gElEditor = document.querySelector('.content-container')
var gElGalleryContainer = gElEditor.querySelector('.gallery-container')
var gElGallery = gElGalleryContainer.querySelector('.grid-container')
var gElCanvasContainer = gElEditor.querySelector('.edit-container')
var gElCanvas = gElCanvasContainer.querySelector('#canvas')
var gElMeyMeme = document.querySelector('.my-meme-container')
var gElAbout = document.querySelector('.about-container')

function onInit() {
    renderGallery()
    gElGalleryContainer.style.display = "block"
    gElCanvasContainer.style.display = "none"
    gelMyMeme.style.display = "none"
    gElAbout.style.display="none"

    renderMemes()
    renderKeyWords()
    toggleWords()

    window.addEventListener('resize', () => {
        resizeCanvasToWindow()
        renderMeme()
    })
    renderImojis()
}

function toggleWords() {
    const elBaby = document.querySelector('.baby')
    const elAnimal = document.querySelector('.animal')
    const elPolitical = document.querySelector('.political')
    elBaby.classList.toggle('none')
    elAnimal.classList.toggle('none')
    elPolitical.classList.toggle('none')
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function galleryActive() {
    document.querySelector('.gallery').classList.add('active')
    document.querySelector('button.my-meme').classList.remove('active')
    document.querySelector('.about').classList.remove('active')
}

function myMemeActive() {
    document.querySelector('.gallery').classList.remove('active')
    document.querySelector('.my-meme').classList.add('active')
    document.querySelector('.about').classList.remove('active')
}

function aboutActive(){
    document.querySelector('.gallery').classList.remove('active')
    document.querySelector('.my-meme').classList.remove('active')
    document.querySelector('.about').classList.add('active')

}


