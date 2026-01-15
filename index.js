let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let goalInput = document.getElementById("goal-input")

function increment() {
    count += 1
    countEl.textContent = count

    let goal = Number(goalInput.value)
    if (goal && count === goal) {
        alert("Goal reached: " + goal)
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
