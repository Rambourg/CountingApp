//examples
//let count = 5
//count = count = 1
//console.log(count)

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the html to reflect the new count


let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

console.log(saveEl)


function increment() {

    count += 1
    countEl.textContent = count
    
}

function save() {
    
let countString = count + " - "


saveEl.textContent += countString

countEl.textContent = 0

count = 0




}













