console.log('hello from search')
var gkeyWords = []
// gImgs.forEach(img => img.keywords.forEach(word => gkeyWords.push(word)))
// console.log(gkeyWords)
function wordc() {
  for (let i = 0; i < gImgs.length - 1; i++) {
    for (let k = 0; k < gImgs[i].keywords.length - 1; k++) {
      let word = gImgs[i][k]
      console.log(word)
      gkeyWords.push(word)
    }
  }
}
console.log(gImgs)

var res = wordc()
console.log(res)
// var wordsCounter = gkeyWords.reduce((acc, curr) => {
//   if (!acc[curr]) acc[curr] = 0
//   else acc[curr]++
//   return acc
// }, [])


var res = countWordApperances()
function countWordApperances() {
  var wordsCountMap = {}
  for (var i = 0; i < gkeyWords.length; i++) {
    var currWord = gkeyWords[i]
    wordsCountMap[currWord] = wordsCountMap[currWord] ? ++wordsCountMap[currWord] : 1
  }

  return wordsCountMap
}
console.log(res)
var orit = [{
  id: 1,
  keywords: ['trump', 'akward']
}]
console.log(gImgs)





gImgs = [
  {
    key: ['trump', 'akward'],

    id: 1,
    url: 'meme-imgs/1.jpg',
    keywords: ['trump', 'akward'],
  },
  {
    id: 2,
    url: 'meme-imgs/2.jpg',
    key: ['animal', 'dog'],
    keywords: ['animal', 'dog']
  },
  {
    id: 3,
    url: 'meme-imgs/3.jpg',
    keywords: ['baby', 'dog']
  },
  {
    id: 4,
    url: 'meme-imgs/4.jpg',
    keywords: ['animal', 'cat', 'sweet']
  },
  {
    id: 5,
    url: 'meme-imgs/5.jpg',
    keywords: ['baby', 'funny']
  },
  {
    id: 6,
    url: 'meme-imgs/6.jpg',
    keywords: ['funny', 'smiling']
  },
  {
    id: 7,
    url: 'meme-imgs/7.jpg',
    keywords: ['baby', 'funny']
  },
  {
    id: 8,
    url: 'meme-imgs/8.jpg',
    keywords: ['funny', 'smiling']
  },
  {
    id: 9,
    url: 'meme-imgs/9.jpg',
    keywords: ['baby', 'funny', 'smiling']
  },
  {
    id: 10,
    url: 'meme-imgs/10.jpg',
    keywords: ['obama', 'funny', 'smiling']
  },
  {
    id: 11,
    url: 'meme-imgs/11.jpg',
    keywords: ['angry']
  },
  {
    id: 12,
    url: 'meme-imgs/12.jpg',
    keywords: ['justice']
  },
  {
    id: 13,
    url: 'meme-imgs/13.jpg',
    keywords: ['leonardo', 'dicaprio', 'glass']
  },
  {
    id: 14,
    url: 'meme-imgs/14.jpg',
    keywords: ['metrix']
  },
  {
    id: 15,
    url: 'meme-imgs/15.jpg',
    keywords: []
  },
  {
    id: 16,
    url: 'meme-imgs/16.jpg',
    keywords: ['star', 'wars']
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
