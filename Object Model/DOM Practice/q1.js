// Create a new button element Give it text "Click me" back.. color=>red & text color ==> white.
// Insret the button at first eliment inside the body tag.

let newBtn= document.createElement("button")
newBtn.innerText="Click me!"

newBtn.style.color="white"
newBtn.style.backgroundColor="red"

document.querySelector("body").prepend(newBtn)