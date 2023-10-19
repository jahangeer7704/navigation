let mainDoc = document.querySelector("main");
let body = document.querySelector("body > div");
let video = document.createElement("video");
let div = document.createElement("div");
let title = document.createElement("span");
let spinner = document.createElement("div");
let text = "";
let keyLog = [];

/* buttons */
let button = document.createElement("div");
let googleIconMaterialClass="material-symbols-outlined"

let playPauseParent = document.createElement("div");
let playPauseChildSymbol = document.createElement("div");
playPauseChildSymbol.className=`pauseSymbol ${googleIconMaterialClass}`
let playPauseChildText = document.createElement("div");
playPauseChildText.className = "pauseText";
playPauseChildText.textContent = "SPACE";
playPauseParent.append(playPauseChildSymbol, playPauseChildText);

let quitParent = document.createElement("div");
let quitChildSymbol = document.createElement("div");
quitChildSymbol.className = `quitSymbol ${googleIconMaterialClass}`
quitChildSymbol.textContent="undo"
let quitChildText = document.createElement("div");
quitChildText.className = "quitText";
quitChildText.textContent = "Q";
quitParent.append(quitChildSymbol, quitChildText);

let replayParent = document.createElement("div");
let replayChildText = document.createElement("div");
replayChildText.className = "replayText";
replayChildText.textContent = "R";
let replayChildSymbol = document.createElement("div");
replayChildSymbol.className = `replaySymbol ${googleIconMaterialClass}`
replayChildSymbol.textContent="replay"

replayParent.append(replayChildSymbol, replayChildText);

button.className = "button-parent";
playPauseParent.className = "pauseParent";
quitParent.className = "quitParent";
replayParent.className = "replayParent";
button.append(quitParent, playPauseParent, replayParent);

//ends here
spinner.className = "spinner";
title.className = "title-span";
div.className = "video-container";
body.append(div);

video.setAttribute("autoplay", null);
video.controlsList = "nodownload";
mainDoc.addEventListener("click", (e) => {
  let target =
    e.target.innerText.length === 1
      ? e.target.innerText
      : e.target.previousSibling.innerText;
  if (target) {
    keyLog.push(target.toUpperCase());
    videoChooser(target);
  }
});
window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  videoChooser(e.key);
  keyLogPusher(e.key.toUpperCase());
  let inputForVideoController =
    e.key === " " ? " " : e.key === "q" ? "Q" : e.key === "r" ? "R" : null;
  if (inputForVideoController) {
    buttonInputHandler(inputForVideoController, keyLog);
  }
});
function videoSetter(userInput, text) {
  div.style.display = "flex";
  title.textContent = text;
  div.append(title);
  div.append(spinner);
  button.remove();

  video.style.display = "none";

  video.setAttribute("src", `${userInput}.mp4`);
  video.addEventListener("canplaythrough", () => {
    video.style.display = "block";
    spinner.remove();
     android()
     playPauseChildSymbol.textContent="pause"
    div.append(video);
    div.append(button);
  });
}
function videoChooser(target) {
  let userInput = target.toUpperCase();
  switch (userInput) {
    case "X":
      text = "Principal Room";
      videoSetter(userInput, text);
      break;

    case "Y":
      text = "CSE HOD Room";
      videoSetter(userInput, text);
      break;

    case "Z":
      text = "CSE Staff Room";
      videoSetter(userInput, text);
      break;

    case "1":
      text = "CS Lab 1";
      videoSetter(userInput, text);
      break;

    case "2":
      text = "CS Lab 2";
      videoSetter(userInput, text);
      break;

    case "3":
      text = "CS Lab 3";
      videoSetter(userInput, text);
      break;

    case "4":
      text = "CS Lab 4";
      videoSetter(userInput, text);
      break;

    case "5":
      text = "Physics Lab";
      videoSetter(userInput, text);
      break;

    case "6":
      text = "Chemistry Lab";
      videoSetter(userInput, text);
      break;

    case "7":
      text = "Electrical Lab";
      videoSetter(userInput, text);
      break;

    case "8":
      text = "Digital Lab";
      videoSetter(userInput, text);
      break;

    case "9":
      text = "CSE 2nd Year A-Sec";

      videoSetter(userInput, text);
      break;

    case "0":
      text = "CSE 2nd Year B-Sec";

      videoSetter(userInput, text);
      break;

    case "A":
      text = "CSE 3rd Year A-Sec";

      videoSetter(userInput, text);
      break;

    case "B":
      text = "CSE 3rd Year B-Sec";

      videoSetter(userInput, text);
      break;

    case "C":
      text = "CSE 4th Year";
      videoSetter(userInput, text);
      break;

    case "D":
      text = "AI&DS 2nd Year B-sec";
      videoSetter(userInput, text);
      break;

    case "E":
      text = "Gents Rest Room 1";
      videoSetter(userInput, text);
      break;

    case "F":
      text = "Gents Rest Room 2";
      videoSetter(userInput, text);
      break;

    case "G":
      text = "Ladies Rest Room 1";
      videoSetter(userInput, text);
      break;
    case "H":
      text = "Ladies Rest Room 2";
      videoSetter(userInput, text);
      break;

    case "M":
      text = "Seminar Hall";
      videoSetter(userInput, text);
      break;

    case "J":
      text = "Smart Room";
      videoSetter(userInput, text);
      break;

    case "K":
      text = "Server Room";
      videoSetter(userInput, text);
      break;

    case "L":
      text = "AI&DS Staff Room";
      videoSetter(userInput, text);
      break;

    default:
      null;
  }
}

function buttonInputHandler(input, keyLog) {
  input === "Q"
    ? videoQuit()
    : input === "R"
      ? videoReplay(keyLog)
      : playPause();
}
function videoQuit() {
  div.style.display = "none";
}
function videoReplay(keyLog) {

  let index = keyLog.length - 1;
  if(index!=-1){

    videoChooser(keyLog[index]);
  }
}
function playPause() {
 
  if (video.paused) {
    video.play();
    playPauseChildSymbol.className=`pauseSymbol ${googleIconMaterialClass}`
    playPauseChildSymbol.textContent="pause"

  }
  else {
    video.pause();
    playPauseChildSymbol.className=`pauseSymbol ${googleIconMaterialClass}`
    playPauseChildSymbol.textContent="play_arrow"

  }
}
button.addEventListener("click", (e) => {
  let caughtClass = e.target.className

  caughtClass.includes("replay") ? videoReplay(keyLog) 
  : caughtClass.includes("quit") ? videoQuit() 
  : caughtClass.includes("pause") ? playPause() 
  : null

})

function keyLogPusher(key) {
let allowedKeys=key==="X"?key
:key==="Y"?key
:key==="Z"?key
:key==="1"?key
:key==="2"?key
:key==="3"?key
:key==="4"?key
:key==="5"?key
:key==="6"?key
:key==="7"?key
:key==="8"?key
:key==="9"?key
:key==="0"?key
:key==="A"?key
:key==="B"?key
:key==="C"?key
:key==="D"?key
:key==="E"?key
:key==="F"?key
:key==="G"?key
:key==="H"?key
:key==="M"?key
:key==="J"?key
:key==="K"?key
:key==="L"?key:null
if(allowedKeys!=null){

  keyLog.push(allowedKeys)
}

}
 video.addEventListener("ended", () => {
  let duration = setInterval(() => {
    div.style.display = "none";

    clearInterval(duration);
  }, 2000);
});

function android(){
  let userAgent=navigator.userAgent
  let system=userAgent.indexOf("Android")!==-1
  if (system) {
playPauseChildText.remove()
quitChildText.remove()
replayChildText.remove()


  
    
  }
  
}