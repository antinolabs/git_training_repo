
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let errorEl = document.getElementById("error")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count = count - 1
    countEl.textContent = count
    if (count < -10) {
        errorEl.textContent = 'Decrement can\'t be more than 10!';
    }
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
