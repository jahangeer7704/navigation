
    let mainDoc = document.querySelector("main")
    let video = document.querySelector("video")

    video.setAttribute("autoplay",null)


    mainDoc.addEventListener("click", (e) => {
        let target = e.target.innerText.length === 1 ? e.target.innerText : e.target.previousSibling.innerText
        vedioChooser(target)


    })
    window.addEventListener("keyup", (e) => {
        vedioChooser(e.key)
    })
    function vedioChooser(target) {
        let userInput = target.toUpperCase()
        switch (userInput) {
            case "P":
                video.style.display="flex";
                video.setAttribute("src", `${userInput}.mp4`);
                break;

            case "Q":
                video.style.display="flex";
                video.setAttribute("src", `${userInput}.mp4`);
                break;


            case "R":
                video.style.display="flex";
                video.setAttribute("src", `${userInput}.mp4`);
                break;


            case "S":
                video.setAttribute("src", `${userInput}.mp4`);
   
                video.style.display="flex";

             
                break;


            case "1":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "2":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "3":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "4":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "5":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "6":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "7":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "8":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "9":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "A":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "B":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "C":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "D":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "E":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "F":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "G":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)

            case "H":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "M":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "J":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "K":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;


            case "L":
                video.style.display="flex"
                video.setAttribute("src", `${userInput}.mp4`)
                break;

            default:
                null

        }
       
    }
  

function videoRemover(){
   video.style.display="none"
}