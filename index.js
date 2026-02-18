let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement(){
    if (count>0){
        count -=1
    countEl.textContent = count
    }
    else{
        alert("value cannot be -ve")
    }
    
}

function save() {
    if (count==0){
        alert("nothing can be saved,count is zero")
        return
    }
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    
}
