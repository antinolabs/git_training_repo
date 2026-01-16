let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let entries = []
function increment() {
    count += 1
    countEl.textContent = count
}

function  decrement(){
    if(count > 0){
        count -=1;
        countEl.textContent =count;
    }
}


function resetAll(){
    count =0;
    entries = [];
    countEl.textContent =0;
    saveEl.textContent= "Previous entries: ";
}

function save() {
   entries.push(count);
    count = 0;
    countEl.textContent = count;
}

function showEntries() {
    if (entries.length === 0) {
        saveEl.textContent = "Previous entries: None" ;
        return ; 
    }

    let result = "Previous entries: " ;
    for (let i = 0; i < entries.length; i++) {
        result += entries[i] + " - " ;
    }
    saveEl.textContent = result ;
}

