// Navbar
let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
console.log(hamburger);

let menubox = document.querySelector(".menubox");
// let overlay = document.querySelector(".links-container");
hamburger.addEventListener("click",()=>{
    menubox.classList.add("show");
    console.log("dd");
    
})
close.addEventListener("click",()=>{
    menubox.classList.remove("show");
    console.log("dd");
    
})