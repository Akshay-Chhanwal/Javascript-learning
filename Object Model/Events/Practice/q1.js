// Que->> Create  toggle button ,changes the screen to dark mode when clicke & light mode  when clicked mode

let btn=document.querySelector("#mode")

let mode = "light"

btn.addEventListener("click",()=>{
   if(mode == "light"){
    mode="dark"
    document.querySelector("body").style.backgroundColor="black"
   }
   else{
    mode="light"
    document.querySelector("body").style.backgroundColor="white"
   }
   console.log(mode)
})