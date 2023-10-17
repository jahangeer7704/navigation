let mainDoc = document.querySelector("main");
let body = document.querySelector("body > div");
let video = document.createElement("video");
let div = document.createElement("div");
let title = document.createElement("span");
let spinner = document.createElement("div");
let text = "";

/* buttons */
let button=document.createElement("div");
let playPause=document.createElement("div");
let quit=document.createElement("div");
let replay=document.createElement("div");
button.className="button-parent"
playPause.className="play-pause"
quit.className="quit"
replay.className="replay"
button.append(quit,playPause,replay)


//ends here
spinner.className = "spinner";
title.className = "title-span";
div.className = "video-container";
body.append(div);

video.setAttribute("autoplay", null);

mainDoc.addEventListener("click", (e) => {
  let target =
    e.target.innerText.length === 1
      ? e.target.innerText
      : e.target.previousSibling.innerText;
  vedioChooser(target);
});
window.addEventListener("keyup", (e) => {
  vedioChooser(e.key);
});
function videoSetter(userInput, text) {
  div.style.display = "flex";
  title.textContent = text;
  div.append(title);
  div.append(spinner);
  video.style.display = "none";

  video.setAttribute("src", `${userInput}.mp4`);
  video.addEventListener("canplaythrough", () => {
    div.removeChild(spinner);
    video.style.display = "block";
    div.append(video);
  });
}
function vedioChooser(target) {
  let userInput = target.toUpperCase();
  switch (userInput) {
    case "P":
      text = "Principal Room";
      videoSetter(userInput, text);
      break;

    case "Q":
      text = "CSE HOD Room";
      videoSetter(userInput, text);
      break;

    case "R":
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

video.addEventListener("ended", () => {
  let duration = setInterval(() => {
    div.style.display = "none";

    clearInterval(duration);
  }, 2000);
});
