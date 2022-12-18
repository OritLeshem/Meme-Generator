'use strict'
let gElCanvas
let gCtx
let elInputText = document.querySelector('.input-text')
gElCanvas = document.getElementById('my-canvas')
gCtx = gElCanvas.getContext('2d')


function onInit() {

  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')
  renderGallery()
  addListeners()

}
function renderMeme() {
  var meme = getMeme()
  console.log(meme)
  gCtx.beginPath()
  const elImg = new Image() // Create a new html img element
  if (meme) elImg.src = meme.selectedImgUrl
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText()
  }
}

function onAddText(fromButtonAdd) {
  getMeme()
  console.log(gSelectedLineIdx)
  let textVal = elInputText.value
  console.log(fromButtonAdd)
  setLineText(textVal)
  if (fromButtonAdd) elInputText.value = ''
  renderMeme()
}

function onSetFont(elFontPicker) {
  setFont(elFontPicker)
  renderMeme()
}

function setLineText(textVal) {
  lineText(textVal)
}

function onChangeFontSize(num) {
  changeFontSize(num)
  renderMeme()
}

function onChangeAlign(side) {
  changeAlign(side)
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
  elInputText.value = meme.lines[meme.selectedLineIdx].txt
}


// DRAW TEXT
function drawText() {
  var meme = getMeme()
  meme.lines.forEach((text, index) => {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = meme.lines[index].stroke
    gCtx.fillStyle = meme.lines[index].color
    gCtx.font = `${meme.lines[index].size}px ${meme.lines[index].font}`;
    gCtx.textAlign = meme.lines[index].align
    gCtx.textBaseline = 'middle'
    gCtx.placeholder = 'hello',
      gCtx.fillText(meme.lines[index].txt, meme.lines[index].pos.x, meme.lines[index].pos.y)
    gCtx.strokeText(meme.lines[index].txt, meme.lines[index].pos.x, meme.lines[index].pos.y)
  })
}

// function onImgInput(ev) {
//   loadImageFromInput(ev, renderImg)
// }
// function renderImg(img) {
//   // Draw the img on the canvas
//   gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
// }
// function loadImageFromInput(ev, onImageReady) {
//   const reader = new FileReader()
//   reader.onload = (event) => {
//     let img = new Image()
//     img.src = event.target.result
//     img.onload = () => onImageReady(img)
//   }
//   reader.readAsDataURL(ev.target.files[0])
// }

function onImgInput(ev) {
  loadImageFromInput(ev, renderImg)
}

// CallBack func will run on success load of the img
function loadImageFromInput(ev, onImageReady) {
  const reader = new FileReader()
  // After we read the file
  reader.onload = (event) => {
    let img = new Image() // Create a new html img element
    img.src = event.target.result // Set the img src to the img file we read
    // Run the callBack func, To render the img on the canvas
    img.onload = () => onImageReady(img)
  }
  reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}

function renderImg(img) {
  // Draw the img on the canvas
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

//UPLOAD IMG
function onUploadImg() {
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
    // Encode the instance of certain characters in the url
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
  }
  // Send the image to the server
  doUploadImg(imgDataUrl, onSuccess)
}

// function resizeCanvas() {
//   const elContainer = document.querySelector('.canvas-container')
//   // Note: changing the canvas dimension this way clears the canvas
//   gElCanvas.width = elContainer.offsetWidth - 20
//   // Unless needed, better keep height fixed.
//   // gElCanvas.height = elContainer.offsetHeight
// }

// window.addEventListener('resize', () => {
//   renderMeme()
// resizeCanvas()
//   renderGallery()
// })

// CLEAR CANVAS
function onClearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}
