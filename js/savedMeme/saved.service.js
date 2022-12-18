'use strict'
console.log('hellp js storage')

var gSavedMemes = []
var STORAGE_KEY = 'gSavedMemes'

function saveToStorage(key, val) {
  console.log('stroage is')

  localStorage.setItem(key, JSON.stringify(val))
  console.log('stroage is')
  var imgContent = gElCanvas.toDataURL('image/jpeg')
  gMeme.urlForSave = imgContent
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key)
  return JSON.parse(val)
}
////////////////////////////////////////////////
function onSavedMeme() {
  console.log('24', gMeme.savedId)
  if (!gMeme.savedId) {
    gMeme.savedId = makeId()
    gSavedMemes.unshift(gMeme)
    console.log(gSavedMemes)
    saveToStorage(STORAGE_KEY, gSavedMemes)
  }
  else {
    var savedLocalStroge = loadFromStorage(STORAGE_KEY)
    console.log(savedLocalStroge)
    var meme = savedLocalStroge.findIndex(savedMeme => savedMeme.savedId === gMeme.savedId)
    console.log(meme, savedLocalStroge[meme])
    console.log('39', savedLocalStroge)
    savedLocalStroge[meme] = gMeme
    gSavedMemes = savedLocalStroge
    saveToStorage(STORAGE_KEY, gSavedMemes)
    renderGallery()

  }
}
function getSavedMems() {
  var savedLocalStroge = loadFromStorage(STORAGE_KEY)
  return savedLocalStroge
}

function onRenderSavedMemes(e) {
  e.preventDefault()
  var savedMemes = getSavedMems()
  if (savedMemes) {
    console.log(savedMemes[0])
    var strHTML = savedMemes.map((meme) => {
      return `<div ><img onclick="onUpdateSavedMeme('${meme.savedId}')" 
      class= "gallery-saved-img" src= "${meme.urlForSave}"/></div>`
    }).join('')
    document.querySelector('.gallery-saved-container').innerHTML = strHTML
  }
  var elController = document.querySelector('.control-box')
  elController.hidden = true
  var elMemeContainer = document.querySelector('.meme-container')
  elMemeContainer.style.opacity = 0
  var ElCanvas = document.querySelector('.canvas-container')
  ElCanvas.hidden = true
  var elGallery = document.querySelector('.gallery-container')
  elGallery.style.display = 'none'
  var elSearch = document.querySelector('.search-container')
  elSearch.style.display = 'none'
  var elSavedGallery = document.querySelector('.gallery-saved-container')
  elSavedGallery.style.display = 'grid'
}


function onUpdateSavedMeme(savedId) {
  var savedMemes = getSavedMems()
  gMeme = savedMemes.find(meme => meme.savedId === savedId)
  console.log(gMeme)
  renderMeme()
  elInputText.value = gMeme.lines[0].txt
  elInputText.placeholder = `Text Here ${gSelectedLineIdx + 1}`
  var elController = document.querySelector('.control-box')
  elController.hidden = false
  var elMemeContainer = document.querySelector('.meme-container')
  elMemeContainer.style.opacity = 1
  var ElCanvas = document.querySelector('.canvas-container')
  ElCanvas.hidden = false
  elGallery = document.querySelector('.gallery-container')
  elGallery.style.display = 'none'
  var elSearch = document.querySelector('.search-container')
  elSearch.style.display = 'none'
  var elSavedGallery = document.querySelector('.gallery-saved-container')
  elSavedGallery.style.display = 'none'
  renderMeme()
}
