let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let messageEl = document.getElementById("message-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    messageEl.textContent = ""
}

function save() {
    if (count === 0) {
        messageEl.textContent = "Nothing to save!"
        return
    }

    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    messageEl.textContent = ""
}
