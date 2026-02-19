let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
function validateEmail() {
    const email = document.getElementById("email").value;
    const error = document.getElementById("error");

    if (!email) {
        error.textContent = "Email is required";
    } else {
        error.textContent = "Submitted successfully!";
    }
}
