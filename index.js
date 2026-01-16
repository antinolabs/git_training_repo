let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    const stepInput = document.getElementById("stepInput");
    const step = Number(stepInput.value) || 1;

    count += step;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}