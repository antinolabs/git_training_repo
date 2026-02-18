// Get elements
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

// Initialize count
let count = 0

// Increment function
function increment() {
    count += 1
    countEl.textContent = count
}

// Save function with validation
function save() {

    // Validation: Prevent saving if count is 0
    if (count === 0) {
        alert("Count cannot be zero. Please increment before saving.")
        return
    }

    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
