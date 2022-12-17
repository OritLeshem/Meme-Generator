console.log('hello form tst')
var gWordsCounter = []
// var ggImg = [{
//   id: 1,
//   url: 'meme-imgs/1.jpg',
//   keywords: ['trump', 'akward']
// },
// {
//   id: 2,
//   url: 'meme-imgs/2.jpg',
//   keywords: ['fun', 'dog']
// }, {
//   id: 3,
//   url: 'meme-imgs/3.jpg',
//   keywords: ['baby', 'dog']
// },
// {
//   id: 4,
//   url: 'meme-imgs/4.jpg',
//   keywords: ['cat', 'sleeping']
// },
// {
//   id: 5,
//   url: 'meme-imgs/5.jpg',
//   keywords: ['boy', 'succses']
// },
// {
//   id: 6,
//   url: 'meme-imgs/6.jpg',
//   keywords: ['funny', 'smiling']
// },
// {
//   id: 7,
//   url: 'meme-imgs/7.jpg',
//   keywords: ['baby', 'smiling']
// },
// {
//   id: 8,
//   url: 'meme-imgs/8.jpg',
//   keywords: ['guy', 'smiling']
// },
// {
//   id: 9,
//   url: 'meme-imgs/9.jpg',
//   keywords: ['boy', 'smiling']
// },
// {
//   id: 10,
//   url: 'meme-imgs/10.jpg',
//   keywords: ['obama', 'smiling']
// },
// {
//   id: 11,
//   url: 'meme-imgs/11.jpg',
//   keywords: ['angry']
// },
// {
//   id: 12,
//   url: 'meme-imgs/12.jpg',
//   keywords: ['wright']
// },
// {
//   id: 13,
//   url: 'meme-imgs/13.jpg',
//   keywords: ['smiling', 'leonardo']
// },
// {
//   id: 14,
//   url: 'meme-imgs/14.jpg',
//   keywords: ['metrix', 'sunglasses']
// },
// {
//   id: 15,
//   url: 'meme-imgs/15.jpg',
//   keywords: ['men', 'smiling']
// },
// {
//   id: 16,
//   url: 'meme-imgs/16.jpg',
//   keywords: ['starwars', 'smiling']
// },
// {
//   id: 17,
//   url: 'meme-imgs/17.jpg',
//   keywords: ['putin']
// },
// {
//   id: 18,
//   url: 'meme-imgs/18.jpg',
//   keywords: ['toy']
// },
// ]
var wordsCountMap = []
gImgs.forEach(el => el.keywords.forEach(word => gWordsCounter.push(word)))

for (var i = 0; i < gWordsCounter.length; i++) {
  var currWord = gWordsCounter[i]
  wordsCountMap[currWord] = wordsCountMap[currWord] ? ++wordsCountMap[currWord] : 1
}
console.log(wordsCountMap)
var words = wordsCountMap.slice()
console.log(words)

renderSearch()
function renderSearch() {

}
wordsCountMap
console.log(wordsCountMap.length)
console.log('hellp')
for (var i = 0; i < wordsCountMap.length; i++) {
  console.log('he')
}

// var strHTML = words.map(word => word)
// console.log(wordsCountMap)

// var arr1 = ['woe', 'ff', 'gg']
// var arr2 = wordsCountMap.map(el => el)
// console.log(arr2)
// var strHTML = words.map((word) => {
// words.map((word) => {
//   // return `<div> ${word} ></div>`
//   console.log(word)
// return `<div> hello ></div>`
// return `<div onclick="onWord(${word[key]},'${img.url}')"><img  class="img-in-gallery"src="${img.url}"></div>`
// })
// .join('')
// document.querySelector('.word-box').innerHTML = strHTML
// }



