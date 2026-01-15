let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let sumEl=document.getElementById("sum-el")
let totalSum=0

let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    totalSum += count
    sumEl.textContent = "Total sum: " + totalSum
    count = 0
   
}


 
