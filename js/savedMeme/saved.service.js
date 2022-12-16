// 'use strict'
// console.log('js storage')


// function saveToStorage(key, val) {
//   console.log('stroage is')

//   localStorage.setItem(key, JSON.stringify(val))
//   console.log('stroage is')
//   var imgContent = gElCanvas.toDataURL('image/jpeg')
//   gMeme.urlForSave = imgContent
// }

// function loadFromStorage(key) {
//   var val = localStorage.getItem(key)
//   return JSON.parse(val)
// }
// ////////////////////////////////////////////////
// var gSavedMemes = []
// var STORAGE_KEY = 'gSavedMemes'
// function onSavedMeme() {
//   gSavedMemes.unshift(gMeme)
//   saveToStorage(STORAGE_KEY, gSavedMemes)
//   console.log("saved")
// }
// function getSavedMems() {
//   var savedLocalStroge = loadFromStorage(STORAGE_KEY)
//   console.log(savedLocalStroge)
//   return savedLocalStroge
// }
// getSavedMems()
// renderSavedMemes()
// renderSavedMemes()
// function renderSavedMemes() {
//   var savedMemes = getSavedMems()
//   console.log(savedMemes)
//   var strHTML = savedMemes.map((meme) => {
//     return `<div ><img  class= "gallery-saved-img" src= "${meme.urlForSave}"/></div>`
//   }).join('')
//   document.querySelector('.gallery-saved-container').innerHTML = strHTML
//   // console.log(strHTML)
//   // var strHTML = savedMemes.map((meme) => {
//   //   return `<div class="image" onclick="editSavedMeme('${meme.memeId}')">
//   //   <button class="btn optdelete" onclick="deleteFromSaved(event,'${meme.memeId}')">
//   //   <img src="ICONS/trash.png">
//   //   </button>
//   //   <img src="${meme.url}"></div>`
//   // }).join('')

//   {/* <img src="${meme.urlForSave}" */ }
//   var elController = document.querySelector('.control-box')
//   elController.hidden = true
//   var elMemeContainer = document.querySelector('.meme-container')
//   elMemeContainer.style.opacity = 0
//   var ElCanvas = document.querySelector('.canvas-container')
//   ElCanvas.hidden = true
//   var elGallery = document.querySelector('.gallery-container')
//   elGallery.style.display = 'none'
//   var elSearch = document.querySelector('.search-container')
//   elSearch.style.display = 'none'
//   var elSavedGallery = document.querySelector('.gallery-saved-container')
//   elSavedGallery.style.display = 'grid'


// }