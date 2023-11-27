let button = document.createElement('div')
let googleIconMaterialClass = 'material-symbols-outlined'
let playPauseParent = document.createElement('div')
let playPauseChildSymbol = document.createElement('div')
playPauseChildSymbol.className = `pauseSymbol ${googleIconMaterialClass}`
let playPauseChildText = document.createElement('div')
playPauseChildText.className = 'pauseText'
playPauseChildText.textContent = 'SPACE'
playPauseParent.append(playPauseChildSymbol, playPauseChildText)

let quitParent = document.createElement('div')
let quitChildSymbol = document.createElement('div')
quitChildSymbol.className = `quitSymbol ${googleIconMaterialClass}`
quitChildSymbol.textContent = 'undo'
let quitChildText = document.createElement('div')
quitChildText.className = 'quitText'
quitChildText.textContent = 'Q'
quitParent.append(quitChildSymbol, quitChildText)

let replayParent = document.createElement('div')
let replayChildText = document.createElement('div')
replayChildText.className = 'replayText'
replayChildText.textContent = 'R'
let replayChildSymbol = document.createElement('div')
replayChildSymbol.className = `replaySymbol ${googleIconMaterialClass}`
replayChildSymbol.textContent = 'replay'

replayParent.append(replayChildSymbol, replayChildText)

button.className = 'button-parent'
playPauseParent.className = 'pauseParent'
quitParent.className = 'quitParent'
replayParent.className = 'replayParent'
button.append(quitParent, playPauseParent, replayParent)
export {
  button,
  googleIconMaterialClass,
  playPauseParent,
  playPauseChildSymbol,
  playPauseChildText,
  quitParent,
  quitChildSymbol,
  quitChildText,
  replayParent,
  replayChildText,
  replayChildSymbol
}
