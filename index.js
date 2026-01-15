let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let totalCount = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalCount += count
    totalEl.textContent = "Total Rows: " + totalCount
    countEl.textContent = 0
    count = 0
}

function resetHistory() {
    let confirmReset = confirm("Are you sure you want to clear all history?");
    
    if (confirmReset) {
        saveEl.textContent = "Previous entries: "
        totalCount = 0
        totalEl.textContent = "Total Rows: 0"
        alert("Success! All history and totals have been cleared.");
    }
}