let button= document.getElementById("btn")

button.addEventListener("dblclick" ,()=>{
   document.querySelector(" .box").innerHTML = "<b>Yayy you were click</b> Enjoyyour click!"
})
document.addEventListener("keydown", (e)=>{
   console.log(e,e.key, e.keyCode)
})