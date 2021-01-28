console.log('successfully linked!')

// For each prompt, perform the specified selection. Save the result to a variable, then console.log that variable. Confirm that it contains what it should in the console!

// 1) All img tags
const imgs = document.querySelectorAll("img")
console.log(imgs)
// 2) All section tags
const section = document.querySelectorAll("section")
console.log(section)
// 3) The element with an id of section-1
const id = document.getElementById("section-1")
console.log(id)
// 4) The element with an id of destinations-button
const dest = document.getElementById("destinations-button")
console.log(dest) 
// 5) The first element with a class of images-rack
const rack = document.querySelector('.images-rack')
console.log(rack)
// 6) The first h1 tag
const h1 = document.querySelector('h1')
console.log(h1)
// 7) All elements with a class of image-card
const card = document.getElementsByClassName('image-card')
console.log(card)
// 8) All elements with a class of over-image-text
const imgText = document.getElementsByClassName('over-image-text')
console.log(imgText)

