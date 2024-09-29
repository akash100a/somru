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

let allLink = document.querySelectorAll(".mainlink"); 
console.log(allLink);


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