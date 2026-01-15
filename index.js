let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let inputEl = document.getElementById("input-el")
let count = 0

let storageCount = JSON.parse(localStorage.getItem("count")) || []
renderStorageCount()

function increment() {
    count += 1
    countEl.textContent = count
}



function save() {
   let inputName = inputEl.value || "Anonymous"
   
   const entry = { name: inputName,  count: count }
   storageCount.push(entry)
    localStorage.setItem("count", JSON.stringify(storageCount))

    renderStorageCount()
    resetCounter()
}

function renderStorageCount() {
    saveEl.innerHTML = "" 
    storageCount.forEach((entry) => {
        let li = document.createElement("li")
        li.textContent = `${entry.name}: ${entry.count} rows`
        saveEl.appendChild(li)
    })
}

function resetCounter() {
    count = 0
    countEl.textContent = 0
    inputEl.value = ""
}
