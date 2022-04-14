'use strict'

var gElEditor = document.querySelector('.content-container')
var gElGalleryContainer = gElEditor.querySelector('.gallery-container')
var gElGallery = gElGalleryContainer.querySelector('.grid-container')
var gElCnvasContainer=gElEditor.querySelector('.canvas-container')
var gElCanvas = gElCnvasContainer.querySelector('#canvas')



function onInit(){
    renderGallery()
    gElGalleryContainer.style.display="block"
    gElCnvasContainer.style.display="none"
    // renderMeme()
}

function onOpenGallery(){
    gElGalleryContainer.style.display="block"
    // gElGallery.style.display="block"
    gElCnvasContainer.style.display="none"
}