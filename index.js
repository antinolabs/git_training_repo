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

// Animal Image Feature
const animalImage = document.getElementById('animal-image');
const catBtn = document.getElementById('cat-btn');
const dogBtn = document.getElementById('dog-btn');

const getCatImage = async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        animalImage.src = data[0].url;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
};

const getDogImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        animalImage.src = data.message;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
};

catBtn.addEventListener('click', getCatImage);
dogBtn.addEventListener('click', getDogImage);

// Load a cat image on initial page load
getCatImage();

