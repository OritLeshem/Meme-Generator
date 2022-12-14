'use strict'

let gSelectedImg = {}
var gImgs
var gMeme

console.log("hello from canvasjs")
gMeme = {
  selectedImgId: 1,
  selectedImgUrl: 'meme-imgs/1.jpg',
  selectedLineIdx: 0,
  lines: []
}
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
// DOWNLOAD CANVAS
function downloadCanvas(elLink) {
  const data = gElCanvas.toDataURL()
  elLink.href = data
}





