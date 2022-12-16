console.log("gallery controller")

function renderGallery() {
  var imgs = getImages()
  var strHTML = imgs.map((img) => {
    return `<div onclick="onImgSelect(${img.id},'${img.url}')"><img  class="img-in-gallery"src="${img.url}"></div>`
  }).join('')
  document.querySelector('.gallery-container').innerHTML = strHTML
}

function onImgSelect(imgId, imgUrl) {
  var images = getImages()
  var selectedImg = images.find(img => (img.id === imgId))
  createMeme(imgId, imgUrl)
  elInputText.placeholder = `Text Here ${gSelectedLineIdx + 1}`

  gMeme.selectedImgId = selectedImg.id
  gMeme.selectedImgUrl = selectedImg.url
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