'use strict'

let gSelectedImg = {}
var gImgs
var gMeme

gImgs = [
  {
    id: 1,
    url: 'meme-imgs/1.jpg',
    keywords: ['trump']
  },
  {
    id: 2,
    url: 'meme-imgs/2.jpg',
    keywords: ['animal', 'dog']
  },
  {
    id: 3,
    url: 'meme-imgs/3.jpg',
    keywords: ['baby']
  },
  {
    id: 4,
    url: 'meme-imgs/4.jpg',
    keywords: ['animal', 'cat']
  },
  {
    id: 5,
    url: 'meme-imgs/5.jpg',
    keywords: ['baby']
  },
  {
    id: 6,
    url: 'meme-imgs/6.jpg',
    keywords: []
  },
  {
    id: 7,
    url: 'meme-imgs/7.jpg',
    keywords: ['baby']
  },
  {
    id: 8,
    url: 'meme-imgs/8.jpg',
    keywords: []
  },
  {
    id: 9,
    url: 'meme-imgs/9.jpg',
    keywords: ['baby']
  },
  {
    id: 10,
    url: 'meme-imgs/10.jpg',
    keywords: ['obama']
  },
  {
    id: 11,
    url: 'meme-imgs/11.jpg',
    keywords: []
  },
  {
    id: 12,
    url: 'meme-imgs/12.jpg',
    keywords: []
  },
  {
    id: 13,
    url: 'meme-imgs/13.jpg',
    keywords: ['leonardo', 'dicaprio',]
  },
  {
    id: 14,
    url: 'meme-imgs/14.jpg',
    keywords: []
  },
  {
    id: 15,
    url: 'meme-imgs/15.jpg',
    keywords: []
  },
  {
    id: 16,
    url: 'meme-imgs/16.jpg',
    keywords: []
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
  }
]

function getImages() {
  return gImgs
}
function createMeme(id, url) {
  gMeme = {
    selectedImgId: id,
    selectedImgUrl: url,
    selectedLineIdx: 0,
    lines: [
      {
        txt: 'hello',

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
      }
    ]
  }
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

function swichLines() {
  if (gMeme.selectedLineIdx === 0) {
    // console.log(gMeme.selectedLineIdx)
    gMeme.selectedLineIdx = 1
    // console.log('1')
  }
  else {
    gMeme.selectedLineIdx = 0
    // console.log('0')
  }
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
