let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function updateColor() {
    if (count < 0) {
        countEl.style.color = "red";
    } else if (count > 0) {
        countEl.style.color = "green";
    } else {
        countEl.style.color = "black";
    }
}

function increment() {
    count += 1
    countEl.textContent = count
    updateColor();
}

// this is the decrement button function
function decrement() {
    count -= 1
    countEl.textContent = count
    updateColor();
}

function save() {
    // Get the current time
    let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let countStr = ` ${count}, `
    
    // Update the history list on the page
    saveEl.textContent += countStr
    
    // Create the alert pop-up
    alert(`Value ${count} saved at ${time}`);
    
    //reset value of count
    count = 0
    countEl.textContent = count
}