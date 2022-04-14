'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'famous', 'political'] },
    { id: 3, url: 'img/3.jpg', keywords: ['animal', 'cute'] },
    { id: 4, url: 'img/4.jpg', keywords: ['animal', 'cute', 'baby'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby', 'cute'] },
    { id: 6, url: 'img/6.jpg', keywords: ['animal', 'cute', 'funny'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'famous', 'movie'] },
    { id: 8, url: 'img/8.jpg', keywords: ['baby', 'cute', 'funny'] },
    { id: 9, url: 'img/9.jpg', keywords: ['famous'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny'] },
    { id: 12, url: 'img/12.jpg', keywords: ['famous', 'movie'] },
    { id: 13, url: 'img/13.jpg', keywords: ['happy', 'funny', 'cute', 'baby'] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', 'famous', 'political'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'baby', 'cute'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'animal', 'cute'] },
    { id: 17, url: 'img/17.jpg', keywords: ['famous', 'political', 'happy'] },
    { id: 18, url: 'img/18.jpg', keywords: ['movie'] },
    { id: 19, url: 'img/19.jpg', keywords: ['famous', 'movie', 'happy'] }
    // { id: 20, url: 'img/20.jpg', keywords: ['famous', 'movie'] },
    // { id: 21, url: 'img/21.jpg', keywords: ['famous', 'movie'] },
    // { id: 22, url: 'img/22.jpg', keywords: ['famous', 'happy'] },
    // { id: 23, url: 'img/23.jpg', keywords: ['famous', 'movie', 'happy', 'funny'] },
    // { id: 24, url: 'img/24.jpg', keywords: ['famous', 'political'] },
    // { id: 25, url: 'img/25.jpg', keywords: ['movie'] }
]

var gKeywordSearchCountMap = _createKeywordsMap()


function _createKeywordsMap() {
    const wordsCountMap = {}
    gImgs.forEach(img => {
        img.keywords.forEach(keyWord => {
            wordsCountMap[keyWord] = wordsCountMap[keyWord] ? wordsCountMap[keyWord] + 1 : 1
        })
    })
    return wordsCountMap
}

function getImgs(){
    return gImgs
}


// function setImg(){

// }