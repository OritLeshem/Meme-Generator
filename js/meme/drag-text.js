const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']
var gIsDrag = false
var gStartPos = {}

gElCanvas = document.getElementById('my-canvas')
gCtx = gElCanvas.getContext('2d')

addListeners()

function addListeners() {
  addMouseListeners()
  addTouchListeners()

  // window.addEventListener('resize', () => {
  //   resizeCanvas()

  // })
  renderMeme()
}

// function isTextClicked(clickedPos) {
//   const pos = {}
//   var gText = gMeme.lines[gMeme.selectedLineIdx]
//   pos.x = gText.pos.x
//   pos.y = gText.pos.y
//   if ((Math.abs(clickedPos.x - pos.x) <= 50) && (Math.abs(clickedPos.y - pos.y) <= 25)) {
//     gIsDrag = true
//     return true
//   }
//   else return false

// }
// function isTextClicked(clickedPos,ev) {
//   // const pos = {}
//   var elGtext = {}
//   // elGtext = gMeme.lines.findIndex((el) => ((Math.abs(clickedPos.x - el.pos.x) <= 50) && (Math.abs(clickedPos.y - el.pos.y) <= 25)))
//   elGtext = gMeme.lines.findIndex((el) => ((Math.abs(clickedPos.x - el.pos.x) <= 200) && (Math.abs(clickedPos.y - el.pos.y) <= 100)))

//   console.log(elGtext)
//   if (elGtext >= 0) {
//     gMeme.selectedLineIdx = elGtext
//     gIsDrag = true
//     return true
//   } else return false

// }
function isTextClicked(clickedPos, ev) {
  // const pos = {}
  var elGtext = {}
  if (TOUCH_EVS.includes(ev.type)) elGtext = gMeme.lines.findIndex((el) => ((Math.abs(clickedPos.x - el.pos.x) <= 200) && (Math.abs(clickedPos.y - el.pos.y) <= 100)))
  else elGtext = gMeme.lines.findIndex((el) => ((Math.abs(clickedPos.x - el.pos.x) <= 50) && (Math.abs(clickedPos.y - el.pos.y) <= 25)))


  console.log(elGtext)
  if (elGtext >= 0) {
    gMeme.selectedLineIdx = elGtext
    gIsDrag = true
    return true
  } else return false

}

function addMouseListeners() {
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mouseup', onUp)
}
function addTouchListeners() {
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
  const pos = getEvPos(ev)
  if (!isTextClicked(pos, ev)) return
  gStartPos.x = pos.x
  gStartPos.y = pos.y
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  if (!gIsDrag) return
  const pos = getEvPos(ev)
  const dx = pos.x - gStartPos.x
  const dy = pos.y - gStartPos.y
  gMeme.lines[gMeme.selectedLineIdx].pos.x += dx
  gMeme.lines[gMeme.selectedLineIdx].pos.y += dy
  gStartPos.x = pos.x
  gStartPos.y = pos.y
  renderMeme()
}

function onUp() {
  gIsDrag = false
  document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  if (TOUCH_EVS.includes(ev.type)) {
    console.log('ev:', ev)
    ev.preventDefault()
    ev = ev.changedTouches[0]
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }
  return pos
}