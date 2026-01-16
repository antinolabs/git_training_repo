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

function decrement() {
    if(count > 0){
        count -= 1;
        countEl.textContent = count;
    }

}

function randomizeBg() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.setProperty("background-color", "#" + randomColor);

}