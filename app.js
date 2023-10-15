
    let mainDoc = document.querySelector("main")
    let video = document.querySelector("video")

    video.setAttribute("autoplay",null)


    mainDoc.addEventListener("click", (e) => {
/*         let target = e.target.innerText.length === 1 ? e.target.innerText : e.target.previousSibling.innerText
 */ 

let target=e.target.innerText
let  targetELementClass=()=>{

    if(e.target.tagName==="SPAN"  && target.length===1){
        let targetVideo=e.target.previousElementSibling.classList.value
        return targetVideo;
        
    }
    else if(e.target.tagName==="SPAN"  && target.length>1){
        let targetVideo=e.target.previousElementSibling.previousElementSibling.classList.value
        return targetVideo;
        
    
    }
    else{
        return null
    }
}
ChoosenClassSender=targetELementClass()

vedioChooser(ChoosenClassSender)



    })
    window.addEventListener("keyup", (e) => {

switch (e.key.toUpperCase()) {
    case "P":
          vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;

    case "Q":
          vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "R":
          vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "S":
        vedioChooser(`videos-${e.key.toUpperCase()}`)

     
        break;


    case "1":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "2":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "3":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "4":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "5":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "6":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "7":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "8":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "9":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "A":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "B":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "C":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "D":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "E":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "F":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "G":
         vedioChooser(`videos-${e.key.toUpperCase()}`)

    case "H":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "M":
         vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "J":
        vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "K":
        vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;


    case "L":
        vedioChooser(`videos-${e.key.toUpperCase()}`)
        break;

    default:
        null

}
    })
   function vedioChooser(target)  {

let caughtClass=document.querySelector(`.${target}`)
caughtClass.style.display="flex";

caughtClass.addEventListener("ended",()=>{
    caughtClass.style.display="none"
})
    }




