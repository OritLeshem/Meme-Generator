let gElCanvas
let gCtx

function onInit() {
  console.log('hello from init')
  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')
  renderGallery()

}
function renderGallery() {
  var imgs = getImages()
  var strHTML = imgs.map((img) => {
    return `<div class="img-in-gallery" onclick="onSelectedImg(${img.id},'${img.url}')"><img  class="img-in-gallery"src="${img.url}"></div>`
  }).join('')
  document.querySelector('.gallery-container').innerHTML = strHTML
}

function onSelectedImg(imgId, imgUrl) {
  var images = getImages()
  var selectedImg = images.find(img => (img.id === imgId))
  gMeme.selectedImgId = selectedImg.id
  gMeme.selectedImgUrl = selectedImg.url
  console.log(gMeme.selectedImgUrl)
  renderMeme()
}

function drawImg() {
  const elImg = new Image() // Create a new html img element
  elImg.src = gMeme.selectedImgUrl
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}


// DRAW TEXT
function drawText(text, x, y) {
  gCtx.beginPath()
  gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = 'white'
  gCtx.font = "50px arial";
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'
  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

//INPUT TEXT
function onAddText() {
  let elInputText = document.querySelector('.input-text')
  let textVal = elInputText.value
  console.log(textVal)
  var pos = { x: 150, y: 200 }
  renderMeme(textVal, pos.x, pos.y)

}
// CLEAR CANVAS
function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}




// RENDER MEME

function renderMeme(textVal, x, y) {
  // drawImg()
  drawText(textVal, x, y)
}