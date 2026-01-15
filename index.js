let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let savedCounts = []
let maxValue = 0
let minValue = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    savedCounts.push(count) // saving the counts into array
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let maxEl = document.getElementById("max-ele")
let minEl = document.getElementById("min-ele")

// finding max val
function findMax(){
    maxValue = Math.max(...savedCounts)
    maxEl.textContent = maxValue
}
// finding the min val
function findMin(){
    minValue = Math.min(...savedCounts)
    minEl.textContent = minValue
}