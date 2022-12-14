'use strict'
let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')
  renderGallery()

}

let elInputText = document.querySelector('.input-text')

function onAddText() {
  let elInputText = document.querySelector('.input-text')
  let textVal = elInputText.value

  setLineText(textVal)
  renderMeme()
  // elInputText.value = ''
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


function onColorPicker() {
  console.log('color picker')
  var elColor = document.querySelector('.font-color')
  var fontColor = elColor.value
  colorPicker(fontColor)
  console.log(fontColor)
  renderMeme()
}
function onSwitchLines() {
  swichLines()
  var meme = getMeme()
  console.log(meme)
  elInputText.value = meme.lines[meme.selectedLineIdx].txt

}


// DRAW TEXT
function drawText() {
  var meme = getMeme()
  meme.lines.forEach((text, index) => {
    console.log(meme.lines[index].txt)
    gCtx.lineWidth = 1
    gCtx.strokeStyle = meme.lines[index].stroke
    gCtx.fillStyle = meme.lines[index].color
    gCtx.font = `${meme.lines[index].size}px ${meme.lines[index].font}`;
    gCtx.textAlign = meme.lines[index].align
    gCtx.textBaseline = 'middle'
    gCtx.fillText(meme.lines[index].txt, meme.lines[index].pos.x, meme.lines[index].pos.y)
    gCtx.strokeText(meme.lines[index].txt, meme.lines[index].pos.x, meme.lines[index].pos.y)
  })
}

//INPUT TEXT


// CLEAR CANVAS
function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}




// RENDER MEME

function renderMeme() {
  var meme = getMeme()
  gCtx.beginPath()
  const elImg = new Image() // Create a new html img element
  elImg.src = meme.selectedImgUrl
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText()

  }
}