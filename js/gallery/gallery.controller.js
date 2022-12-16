console.log("gallery controller")

function renderGallery() {
  var imgs = getImages()
  var strHTML = imgs.map((img) => {
    return `<div class="img-in-gallery" onclick="onImgSelect(${img.id},'${img.url}')"><img  class="img-in-gallery"src="${img.url}"></div>`
  }).join('')
  document.querySelector('.gallery-container').innerHTML = strHTML
}

function onImgSelect(imgId, imgUrl) {
  var images = getImages()
  var selectedImg = images.find(img => (img.id === imgId))
  createMeme(imgId, imgUrl)
  gMeme.selectedImgId = selectedImg.id
  gMeme.selectedImgUrl = selectedImg.url
  elController = document.querySelector('.control-box')
  elController.hidden = false
  ElCanvas = document.querySelector('.canvas-container')
  ElCanvas.hidden = false
  elGallery = document.querySelector('.gallery-container')
  elGallery.style.display = 'none'
  renderMeme()
}