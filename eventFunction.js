import { keyLog, div } from "./elements.js";
import {
  videoChooser,
  buttonInputHandler,
  videoQuit,
  videoReplay,
  playPause,
  keyLogPusher,
  android,
} from "./function.js";

let mainDocClick = (e) => {
  let target =
    e.target.innerText.length === 1
      ? e.target.innerText
      : e.target.previousSibling.innerText;
  if (target) {
    keyLog.push(target.toUpperCase());
    videoChooser(target);
  }
};

let keyUpEvent = (e) => {
  videoChooser(e.key);
  keyLogPusher(e.key.toUpperCase());
  let inputForVideoController =
    e.key === " " ? " " : e.key === "q" |e.key==="Q" ? "Q" : e.key === "r" |e.key==="R"  ? "R" : null;
  if (inputForVideoController) {
    buttonInputHandler(inputForVideoController, keyLog);
  }
  if (e.key === "Escape") {
    goBackBlock();
  }
};
let buttonClickEvent = (e) => {
  let caughtClass = e.target.className;

  caughtClass.includes("replay")
    ? videoReplay(keyLog)
    : caughtClass.includes("quit")
    ? videoQuit()
    : caughtClass.includes("pause")
    ? playPause()
    : null;
};

let videoEndEvent = () => {
  let duration = setInterval(() => {
    div.style.display = "none";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    clearInterval(duration);
  }, 2000);
};
function goBackBlock() {
 window.location.assign("https://easebot.netlify.app")//easesbot.ne
}

let scrollPrevent=(e)=>{
    if (e.key === " ") {
        e.preventDefault();
      }
}
export {
  mainDocClick,
  keyUpEvent,
  buttonClickEvent,
  videoEndEvent,
  goBackBlock,
  scrollPrevent
};
