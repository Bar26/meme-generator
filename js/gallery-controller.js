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

function onOpenGallery() {
    gElGalleryContainer.style.display = "block"
    gElCnvasContainer.style.display = "none"
    gFilterBy = ''
    renderGallery()
}

function onImgSelect(elImg) {
    setImg(elImg)
    renderMeme()
}

function renderKeyWords() {
    const keyWords = getKeyWords()
    const elKeyWords = document.querySelector('.key-words')
    var strHtmls = ``
    keyWords.forEach(wordObj => {
        strHtmls += `<li class="${wordObj.name}" style="font-size:${wordObj.size}px" onclick="onClickedWord(this)">${wordObj.name}</li>`
    })
    strHtmls += `<li class="more" onclick="onDisplayMore(this)">more...</li>`
    elKeyWords.innerHTML = strHtmls
}

function onDisplayMore(moreBtn) {
    toggleWords()
    moreBtn.classList.add('none')
}

function onClickedWord(elKeyWord){
    onEnlarge(elKeyWord)
    updateFilter(elKeyWord.innerText)
    renderGallery()
}

function onEnlarge(elKeyWord) {
    const keyWords = getKeyWords()
    const word = keyWords.find(word => word.name === elKeyWord.innerText)
    enlarge(word)
    renderKeyWords()
    toggleWords()
}

function onUpdatFilter(ev) {
    ev.preventDefault()
    const elSearch = document.querySelector('#search-key')
    const filterBy = elSearch.value
    elSearch.value = ''
    updateFilter(filterBy)
    renderGallery()
}