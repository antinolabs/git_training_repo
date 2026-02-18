import { formatCount, createEntry } from './utils.js';

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")

let count = 0

incrementBtn.addEventListener("click", increment)
saveBtn.addEventListener("click", save)

function increment() {
    count += 1
    countEl.textContent = formatCount(count)
}

function save() {
    let entry = createEntry(count)
    saveEl.textContent += entry + " | "
    countEl.textContent = formatCount(0)
    count = 0
}
