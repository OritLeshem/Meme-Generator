'use strict'


var gImgs
var gMeme
var gSelectedLineIdx


var gImgs = [{
  id: 1,
  url: 'meme-imgs/1.jpg',
  keywords: ['trump', 'akward']
},
{
  id: 2,
  url: 'meme-imgs/2.jpg',
  keywords: ['fun', 'dog']
}, {
  id: 3,
  url: 'meme-imgs/3.jpg',
  keywords: ['baby', 'dog']
},
{
  id: 4,
  url: 'meme-imgs/4.jpg',
  keywords: ['cat', 'sleeping']
},
{
  id: 5,
  url: 'meme-imgs/5.jpg',
  keywords: ['boy', 'succses']
},
{
  id: 6,
  url: 'meme-imgs/6.jpg',
  keywords: ['funny', 'smiling']
},
{
  id: 7,
  url: 'meme-imgs/7.jpg',
  keywords: ['baby', 'smiling']
},
{
  id: 8,
  url: 'meme-imgs/8.jpg',
  keywords: ['guy', 'smiling']
},
{
  id: 9,
  url: 'meme-imgs/9.jpg',
  keywords: ['boy', 'smiling']
},
{
  id: 10,
  url: 'meme-imgs/10.jpg',
  keywords: ['obama', 'smiling']
},
{
  id: 11,
  url: 'meme-imgs/11.jpg',
  keywords: ['angry']
},
{
  id: 12,
  url: 'meme-imgs/12.jpg',
  keywords: ['wright']
},
{
  id: 13,
  url: 'meme-imgs/13.jpg',
  keywords: ['smiling', 'leonardo']
},
{
  id: 14,
  url: 'meme-imgs/14.jpg',
  keywords: ['metrix', 'sunglasses']
},
{
  id: 15,
  url: 'meme-imgs/15.jpg',
  keywords: ['men', 'smiling']
},
{
  id: 16,
  url: 'meme-imgs/16.jpg',
  keywords: ['starwars', 'smiling']
},
{
  id: 17,
  url: 'meme-imgs/17.jpg',
  keywords: ['putin']
},
{
  id: 18,
  url: 'meme-imgs/18.jpg',
  keywords: ['toy']
},
]


function getImages() {
  var elSearch = document.querySelector('.search')
  var val = elSearch.value
  console.log(val)
  var imgForFilter = gImgs
  var gFilter = []
  for (var i = 0; i < imgForFilter.length; i++) {
    var res = imgForFilter[i].keywords.filter(word => word.includes(val))
    if (res.length > 0) gFilter.push(imgForFilter[i])
    console.log(res, res.length, i)
  }
  console.log(gFilter)
  if (gFilter.length > 0) return gFilter
  else return imgForFilter

}
function createMeme(id, url) {
  gMeme = {
    selectedImgId: id,
    selectedImgUrl: url,
    urlForSave: '',
    selectedLineIdx: 0,
    lines: [
      {
        txt: 'your text here',
        size: 30,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        pos: { x: gElCanvas.width / 2, y: 50 },
        isDrag: false
      },
      {
        txt: '',
        size: 30,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        pos: { x: gElCanvas.width / 2, y: gElCanvas.height - 50 },
        isDrag: false
      },
      {
        txt: '',
        size: 30,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        pos: { x: gElCanvas.width / 2, y: gElCanvas.height / 2 },
        isDrag: false
      }
    ]
  }
  gSelectedLineIdx = gMeme.selectedLineIdx
}

function getMeme() {
  return gMeme
}
function gText() {
  return gMeme.lines[gMeme.selectedLineIdx]
}
function lineText(textVal) {
  gMeme.lines[gMeme.selectedLineIdx].txt = textVal
}
function colorPicker(fontColor) {
  console.log("fontColor", fontColor)
  console.log(gMeme.lines[gMeme.selectedLineIdx].color)
  gMeme.lines[gMeme.selectedLineIdx].color = fontColor
  console.log(gMeme.lines[gMeme.selectedLineIdx])
}
function changeFontSize(num) {
  gMeme.lines[gMeme.selectedLineIdx].size += num
}
function changeAlign(side) {
  gMeme.lines[gMeme.selectedLineIdx].align = side
}
function setFont(elFontPicker) {
  gMeme.lines[gMeme.selectedLineIdx].font = elFontPicker.value
}

function swichLines() {
  if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1
  else if (gMeme.selectedLineIdx === 1) gMeme.selectedLineIdx = 2
  else gMeme.selectedLineIdx = 0
  gSelectedLineIdx = gMeme.selectedLineIdx
  elInputText.placeholder = `Text Here ${gSelectedLineIdx + 1}`

}

// DOWNLOAD CANVAS
function downloadCanvas(elLink) {
  const data = gElCanvas.toDataURL()
  elLink.href = data
}

function doUploadImg(imgDataUrl, onSuccess) {
  const formData = new FormData()
  formData.append('img', imgDataUrl)
  console.log('formData:', formData)
  fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
    .then(res => res.text())
    .then(url => {
      console.log('url:', url)
      onSuccess(url)
    })
}
