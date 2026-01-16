let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

let savedEntries = localStorage.getItem("previousEntries")
if (savedEntries) {
    saveEl.textContent = savedEntries
}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    localStorage.setItem("previousEntries", saveEl.textContent)
    countEl.textContent = 0
    count = 0
}
