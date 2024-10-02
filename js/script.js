// Action Function
let action = (btn,act,event) =>{
    btn.addEventListener("click",()=>{
        if(event == "add"){
            act.classList.toggle("show");
        }
        if(event == "remove"){
            act.classList.remove("show");
        }
        if(event == "toggle"){
            act.classList.toggle("show");
        }
    })
}
// Navbar
let hamburger = document.querySelector(".hamburger");
let closes = document.querySelector(".close");
let down = document.querySelectorAll(".down");
let dropdown = document.querySelector("nav .dropdown");
let menubox = document.querySelector(".menubox");

action(hamburger,menubox,"add");
action(closes,menubox,"remove");

down.forEach((item)=>{
    item.addEventListener("click",(event)=>{
        event.preventDefault();
        if(item.parentElement.parentElement.classList.contains("show")){
            item.parentElement.parentElement.classList.remove("show");
        }else{
            item.parentElement.parentElement.classList.add("show");
        }
        
    })
})

//antibody details page
let dropli = document.querySelectorAll(".dropli a");
dropli.forEach((item)=>{
    item.addEventListener("click",(event)=>{
        console.log("click");
        
        event.preventDefault();
        if(item.parentElement.classList.contains("show")){
            item.parentElement.classList.remove("show");
        }else{
            item.parentElement.classList.add("show");
        }
        
    })
})

//antibody details page
let subdropli = document.querySelectorAll(".subdropli a");
subdropli.forEach((item)=>{
    item.addEventListener("click",(event)=>{
        console.log("click");
        
        event.preventDefault();
        if(item.parentElement.classList.contains("subshow")){
            item.parentElement.classList.remove("subshow");
        }else{
            item.parentElement.classList.add("subshow");
        }
        
    })
})

