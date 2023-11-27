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
