

//@ts-check
import { keyLog, video, div, title, spinner, goBack } from "./elements.js";
import {
  button,
  googleIconMaterialClass,
  playPauseChildSymbol,
  playPauseChildText,
  quitChildText,
  replayChildText,
} from "./mediaButon.js";
let text = "";

const decs = {
  "X":"Principal Room ",
  "Y":"CSE HOD Room ",
  "Z":"CSE Staff Room",
  "1":"CS Lab 1 ,iss on first floor",
  "2":"CS Lab 2,iss on the first floor",
  "3":"CS Lab 3,iss  on the ground floor",
  "4":"CS Lab 4 , iss  on the second floor",
  "5":"Physics Lab , iss  on the ground floor",
  "6":"Chemistry Lab , iss on the ground floor",
  "7":"Electrical Lab , iss on the first floor",
  "8":"Digital Lab , iss on the first floor",
  "9":"CSE 2nd Year A-Section , iss on the third floor",
  "0":"CSE 2nd Year B-Section , iss on the third floor",
  "A":"CSE 3rd Year A-Section , iss on the second floor",
  "B":"CSE 3rd Year B-Section , iss on the second floor",
  "C":"CSE 4th Year , iss on the second floor",
  "D":"AI&DS 2nd Year B-section , iss on the third floor",
  "E":"Gents Rest Room 1 , iss on the ground floor",
  "F":"Gents Rest Room 2 , iss on the second floor",
  "G":"Ladies Rest Room 1 , iss on the second floor",
  "H":"Ladies Rest Room 2 , iss on the third floor",
  "M":"Seminar Hall , iss on the second floor",
  "J":"Smart Room  , iss on the first floor",
  "K":"Server Room  , iss on the first floor",
  "L":"AI&DS Staff Room , iss on the third floor",
}

const speak = (text) =>{
  speechSynthesis.cancel()
  let utterance = new SpeechSynthesisUtterance("Navigating to " + text);
  utterance.rate = .68
  utterance.pitch = 0
  speechSynthesis.speak(utterance);


}

function videoChooser(target) {
  let userInput = target.toUpperCase();
  switch (userInput) {
    case "X":
      text = "Principal Room";
      speak(decs['X'])
      videoSetter(userInput, text);
      break;

    case "Y":
      text = "CSE HOD Room";
      speak(decs['Y'])
      videoSetter(userInput, text);
      break;

    case "Z":
      text = "CSE Staff Room";
      speak(decs['Z'])
      videoSetter(userInput, text);
      break;

    case "1":
      text = "CS Lab 1";
      speak(decs['1'])
      videoSetter(userInput, text);
      break;

    case "2":
      text = "CS Lab 2";
      speak(decs['2'])
      videoSetter(userInput, text);
      break;

    case "3":
      text = "CS Lab 3";
      speak(decs['3'])
      videoSetter(userInput, text);
      break;

    case "4":
      text = "CS Lab 4";
      speak(decs['4'])
      videoSetter(userInput, text);
      break;

    case "5":
      text = "Physics Lab";
      speak(decs['5'])
      videoSetter(userInput, text);
      break;

    case "6":
      text = "Chemistry Lab";
      speak(decs['6'])
      videoSetter(userInput, text);
      break;

    case "7":
      text = "Electrical Lab";
      speak(decs['7'])
      videoSetter(userInput, text);
      break;

    case "8":
      text = "Digital Lab";
      speak(decs['8'])
      videoSetter(userInput, text);
      break;

    case "9":
      text = "CSE 2nd Year A-Sec";

      speak(decs['9'])
      videoSetter(userInput, text);
      break;

    case "0":
      text = "CSE 2nd Year B-Sec";

      speak(decs['0'])
      videoSetter(userInput, text);
      break;

    case "A":
      text = "CSE 3rd Year A-Sec";

      speak(decs['A'])
      videoSetter(userInput, text);
      break;

    case "B":
      text = "CSE 3rd Year B-Sec";

      speak(decs['B'])
      videoSetter(userInput, text);
      break;

    case "C":
      text = "CSE 4th Year";
      speak(decs['C'])
      videoSetter(userInput, text);
      break;

    case "D":
      text = "AI&DS 2nd Year B-sec";
      speak(decs['D'])
      videoSetter(userInput, text);
      break;

    case "E":
      text = "Gents Rest Room 1";
      speak(decs['E'])
      videoSetter(userInput, text);
      break;

    case "F":
      text = "Gents Rest Room 2";
      speak(decs['F'])
      videoSetter(userInput, text);
      break;

    case "G":
      text = "Ladies Rest Room 1";
      speak(decs['G'])
      videoSetter(userInput, text);
      break;
    case "H":
      text = "Ladies Rest Room 2";
      speak(decs['H'])
      videoSetter(userInput, text);
      break;

    case "M":
      text = "Seminar Hall";
      speak(decs['M'])
      videoSetter(userInput, text);
      break;

    case "J":
      text = "Smart Room";
      speak(decs['J'])
      videoSetter(userInput, text);
      break;

    case "K":
      text = "Server Room";
      speak(decs['K'])
      videoSetter(userInput, text);
      break;

    case "L":
      text = "AI&DS Staff Room";
      speak(decs['L'])
      videoSetter(userInput, text);
      break;

    default:
      null;
  }
}


function videoSetter(userInput, text) {
  div.style.display = "flex";
  title.textContent = text;
  div.append(title);
  div.append(spinner);
  button.remove();
  video.style.display = "none";
  window.scrollTo({
    top: 100,
    behavior: "smooth"
  });

  video.setAttribute("src", `./Videos/${userInput}.mp4`);
  video.addEventListener("canplaythrough", () => {
    video.style.display = "block";
    spinner.remove();
    android();
    playPauseChildSymbol.textContent = "pause";
    div.append(video);
    div.append(button);
  });
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
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function videoReplay(keyLog) {
  let index = keyLog.length - 1;
  if (index != -1) {
    videoChooser(keyLog[index]);
  }
}
function playPause() {
  if (video.paused) {
    video.play();
    playPauseChildSymbol.className = `pauseSymbol ${googleIconMaterialClass}`;
    playPauseChildSymbol.textContent = "pause";
  } else {
    video.pause();
    playPauseChildSymbol.className = `pauseSymbol ${googleIconMaterialClass}`;
    playPauseChildSymbol.textContent = "play_arrow";
  }
}
function keyLogPusher(key) {
  let allowedKeys =
    key === "X"
      ? key
      : key === "Y"
      ? key
      : key === "Z"
      ? key
      : key === "1"
      ? key
      : key === "2"
      ? key
      : key === "3"
      ? key
      : key === "4"
      ? key
      : key === "5"
      ? key
      : key === "6"
      ? key
      : key === "7"
      ? key
      : key === "8"
      ? key
      : key === "9"
      ? key
      : key === "0"
      ? key
      : key === "A"
      ? key
      : key === "B"
      ? key
      : key === "C"
      ? key
      : key === "D"
      ? key
      : key === "E"
      ? key
      : key === "F"
      ? key
      : key === "G"
      ? key
      : key === "H"
      ? key
      : key === "M"
      ? key
      : key === "J"
      ? key
      : key === "K"
      ? key
      : key === "L"
      ? key
      : null;
  if (allowedKeys != null) {
    keyLog.push(allowedKeys);
  }
}
function android() {
  let userAgent = navigator.userAgent;
  let system = userAgent.indexOf("Android") !== -1;
  if (system) {
    playPauseChildText.remove();
    quitChildText.remove();
    replayChildText.remove();
    goBack.remove();
  }
}
export {
  videoChooser,
  videoSetter,
  buttonInputHandler,
  videoQuit,
  videoReplay,
  playPause,
  keyLogPusher,
  android,
};
