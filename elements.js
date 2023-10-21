let mainDoc = document.querySelector("main");
let body = document.querySelector("body > div");
let keyLog = [];
let video = document.createElement("video");
let div = document.createElement("div");
let title = document.createElement("span");
let goBack = document.getElementsByClassName("goBack")[0];
let spinner = document.createElement("div");
spinner.className = "spinner";
title.className = "title-span";
div.className = "video-container";
video.setAttribute("autoplay", null);
video.setAttribute("controlsList", "nodownload");
body.append(div);

export { mainDoc, body, keyLog, video, div, title, spinner, goBack };
