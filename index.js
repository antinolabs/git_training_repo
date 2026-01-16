let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let messageEl = document.getElementById("message-el")

let count = 0
const MAX_COUNT = 999

function showMessage(text, type) {
    messageEl.textContent = text
    messageEl.className = `message ${type}`

    setTimeout(() => {
        messageEl.textContent = ""
        messageEl.className = "message"
    }, 2000)
}

function increment() {
    if (count >= MAX_COUNT) {
        showMessage("Maximum limit reached", "error")
        return
    }

    count += 1
    countEl.textContent = count
}

function save() {
    if (count === 0) {
        showMessage("Nothing to save", "info")
        return
    }

    let countStr = count + " - "
    saveEl.textContent += countStr

    showMessage("Count saved successfully", "success")

    count = 0
    countEl.textContent = 0
}
