// creat button
let newBtn= document.createElement("button")
newBtn.innerText="Click me!"
console.log(newBtn)

// let div=document.querySelector("div")
// div.append(newBtn)
// let ul=document.querySelector("ul")
// ul.append(newBtn)
let div=document.querySelector("div")
div.after(newBtn)

let newHeadig=document.createElement("h2")
newHeadig.innerHTML="I am new Heading"

document.querySelector("body").prepend(newHeadig)


