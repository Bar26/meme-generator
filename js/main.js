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
    renderKeyWords()
    toggleWords()
    
}

function toggleWords(){
    const elBaby=document.querySelector('.baby')
    const elAnimal=document.querySelector('.animal')
    const elPolitical=document.querySelector('.political')
    elBaby.classList.toggle('none')
    elAnimal.classList.toggle('none')
    elPolitical.classList.toggle('none')
}

function toggleMenu(){
    document.body.classList.toggle('menu-open')
}

