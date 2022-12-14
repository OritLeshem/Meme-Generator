'use strict'
let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')
  renderGallery()

}


function onAddText() {
  let elInputText = document.querySelector('.input-text')
  let textVal = elInputText.value
  console.log(textVal)
  console.log(gMeme.lines[0].txt)
  setLineText(textVal)
  renderMeme()
}
function setLineText(textVal) {
  lineText(textVal)
}

// function drawImg() {
//   gCtx.beginPath()
//   const elImg = new Image() // Create a new html img element
//   elImg.src = gMeme.selectedImgUrl
//   elImg.onload = () => {
//     gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

//   }
// }

function onChangeFontSize(num) {
  changeFontSize(num)
  renderMeme()
}
function changeFontSize(num) {
  gMeme.lines[0].size += num
}
function onDecreaseFont() {
  decreaseFont()
  renderMeme()
  console.log("decrease")
}
function decreaseFont() {
  gMeme.lines[0].size--
}
function onIncreaseFont() {
  console.log("increase")
}
function onColorPicker() {
  console.log('color picker')
  var elColor = document.querySelector('.font-color')
  var fontColor = elColor.value
  colorPicker(fontColor)
  console.log(fontColor)
  renderMeme()
}

// DRAW TEXT
function drawText(text, x, y) {
  gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = gMeme.lines[0].color
  gCtx.font = `${gMeme.lines[0].size}px arial`;
  console.log(gMeme.lines[0].size)
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'
  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

//INPUT TEXT


// CLEAR CANVAS
function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}




// RENDER MEME

function renderMeme() {
  gCtx.beginPath()
  const elImg = new Image() // Create a new html img element
  elImg.src = gMeme.selectedImgUrl
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(gMeme.lines[0].txt, gMeme.lines[0].pos.x, gMeme.lines[0].pos.y)

  }
}