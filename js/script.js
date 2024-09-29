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
let down = document.getElementsByClassName("down");
let dropdown = document.querySelector("nav .dropdown");
let navlist = document.querySelector("nav .menubox li.active");
let menubox = document.querySelector(".menubox");

action(hamburger,menubox,"add");
action(closes,menubox,"remove");
// action(down,dropdown,"toggle");
// action(down,navlist,"toggle");

console.log(down);

let my = document.getElementsByClassName("new");
let btn = document.querySelector(".btn");
action(btn,my,"toggle");
for(let x = 0; x < down.length;x++){
    down[x].addEventListener("click",()=>{
        dropdown.classList.toggle("show");
        
    })
}
