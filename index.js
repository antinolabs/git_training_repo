let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count > 0) {
        let countStr = count + " - "
        saveEl.textContent += countStr
        alert("Count saved: " + count)
        alert("🎉 Great job! You counted " + count + " rows. Keep going!")
        countEl.textContent = 0
        count = 0
    } else {
        alert("⚠️ Nothing to save! Please increment first.")
    }
}

function reset() {
    if (confirm("Are you sure you want to reset all counts?")) {
        count = 0
        countEl.textContent = 0
        saveEl.textContent = "Previous entries: "
        alert("✅ All counts have been reset!")
    }
}