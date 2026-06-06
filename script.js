let overlay = document.querySelector(".overlay")
let menu = document.querySelector(".menup")
let isOpen = false

let body = document.querySelector("body")
let h1mouse = document.querySelector(".hero1-mouse")
let mf = document.querySelector(".mf")
let hero1 = document.querySelector(".hero-parent")
let h1vid = document.querySelector(".h1vid")
let hero2 = document.querySelector(".hero2")
let hero3 = document.querySelector(".hero3")
let hero4 = document.querySelector(".hero4")
let hero5 = document.querySelector(".hero5")
let card1 = document.querySelector(".h5card1")
let card2 = document.querySelector(".h5card2")
let card3 = document.querySelector(".h5card3")
let card4 = document.querySelector(".h5card4")
let services = document.querySelector(".services")
let sm1 = document.querySelector(".sm1")
let sm2 = document.querySelector(".sm2")
let sm3 = document.querySelector(".sm3")
let sm4 = document.querySelector(".sm4")
let sm5 = document.querySelector(".sm5")
let sm6 = document.querySelector(".sm6")
let sm7 = document.querySelector(".sm7")


menu.addEventListener("click", ()=>{
    if (!isOpen) {
        overlay.style.top = "0%"
        overlay.style.transform = "rotate(30deg)"
    } else {
        overlay.style.top = "-260%"
        overlay.style.transform = "rotate(0deg)"
    }

    isOpen = !isOpen
})

hero1.addEventListener("mousemove", (a)=>{
    h1mouse.style.display = "block"
    h1mouse.style.height = 350+"px"
    h1mouse.style.width = 250+"px"
    h1vid.style.display = "block"
    h1vid.style.height = 350+"px"
    h1vid.style.width = 250+"px"

    h1mouse.style.left = a.x + 20 +"px" 
    h1mouse.style.top = a.y + 20 +"px"
    h1mouse.style.transition = "all linear 0.3s" 
    mf.style.display = "none"
})


hero2.addEventListener("mousemove", (a)=>{
    h1mouse.style.display = "none"
    mf.style.display = "block"
    mf.style.left = a.x + 20 +"px" 
    mf.style.top = a.y + 20 +"px"
    mf.style.transition = "all linear 0.1s" 
})

hero3.addEventListener("mousemove", (a)=>{
    h1mouse.style.display = "none"
    mf.style.display = "block"
    mf.style.left = a.x + 20 +"px" 
    mf.style.top = a.y + 20 +"px" 
    mf.style.transition = "all linear 0.1s" 
})

hero4.addEventListener("mousemove", (a)=>{
    h1mouse.style.display = "none"
    mf.style.display = "block"
    mf.style.left = a.x + 20 +"px" 
    mf.style.top = a.y + 20 +"px" 
    mf.style.transition = "all linear 0.1s" 
})
hero5.addEventListener("mousemove", (a)=>{
    h1mouse.style.display = "none"
    mf.style.display = "block"
    mf.style.left = a.x + 20 +"px" 
    mf.style.top = a.y + 20 +"px" 
    mf.style.transition = "all linear 0.1s" 
})
card1.addEventListener("mouseover", ()=>{
    card1.querySelector("video").style.display = "block"
    card1.style.scale = "0.98"
    card1.querySelector("img").style.filter = "blur(5px)"
    card1.style.transition = "all ease 0.2s"
})
card1.addEventListener("mouseleave", ()=>{
    card1.querySelector("video").style.display = "none"
    card1.style.scale = "1"
    // hero5.querySelector("video").style.display = "none"
    card1.querySelector("img").style.filter = "blur(0px)"
})


card2.addEventListener("mouseover", ()=>{
    card2.querySelector("video").style.display = "block"
    card2.style.scale = "0.98"
    card2.querySelector("img").style.filter = "blur(5px)"
    card2.style.transition = "all ease 0.2s"
})
card2.addEventListener("mouseleave", ()=>{
    card2.style.scale = "1"
    card2.querySelector("video").style.display = "none"
    card2.querySelector("img").style.filter = "blur(0px)"
})


card3.addEventListener("mouseover", ()=>{
    card3.querySelector("video").style.display = "block"
    card3.style.scale = "0.98"
    card3.querySelector("img").style.filter = "blur(5px)"
    card3.style.transition = "all ease 0.2s"
})
card3.addEventListener("mouseleave", ()=>{
    card3.style.scale = "1"
    card3.querySelector("video").style.display = "none"
    card3.querySelector("img").style.filter = "blur(0px)"
})


card4.addEventListener("mouseover", ()=>{
    card4.querySelector("video").style.display = "block"
    card4.style.scale = "0.98"
    card4.querySelector("img").style.filter = "blur(5px)"
    card4.style.transition = "all ease 0.2s"
})
card4.addEventListener("mouseleave", ()=>{
    card4.style.scale = "1"
    card4.querySelector("video").style.display = "none"
    card4.querySelector("img").style.filter = "blur(0px)"
})
services.addEventListener("mousemove", (a)=>{
    h1mouse.style.display = "none"
    mf.style.display = "block"
    mf.style.left = a.x + 20 +"px" 
    mf.style.top = a.y + 20 +"px" 
    mf.style.transition = "all linear 0.1s" 
})

sm1.querySelector("p").addEventListener("mouseover", ()=>{
    sm2.style.color = "#C5C5C5"
    sm2.style.transition = "all ease 0.15s"
    sm1.querySelector(".sm1a").style.display = "block"
})
// sm1.querySelector("p").addEventListener("mouseleave", ()=>{
//     sm2.style.color = "black"
//     sm2.style.transition = "all ease 0.15s"
//     sm1.querySelector(".sm1a").style.display = "none"
// })