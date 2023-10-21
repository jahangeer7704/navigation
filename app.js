import {
  mainDocClick,
  keyUpEvent,
  buttonClickEvent,
  videoEndEvent,
  goBackBlock,
  scrollPrevent,
} from "./eventFunction.js";
import { mainDoc, goBack, video } from "./elements.js";

import { button } from "./mediaButon.js";

mainDoc.addEventListener("click", mainDocClick);
window.addEventListener("keydown", scrollPrevent);

window.addEventListener("keyup", keyUpEvent);

button.addEventListener("click", buttonClickEvent);

video.addEventListener("ended", videoEndEvent);
goBack.addEventListener("click", goBackBlock);
