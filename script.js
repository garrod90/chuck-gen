// global variables
const chuckDisplay = document.querySelector(".fact-display")
const generateButton = document.querySelector("button")


// functions

// generate new fact
const generateFact = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(result => JSON.stringify(result.value))
        .then(data => chuckDisplay.innerHTML = data)
        .then(data2 => chuckDisplay.style.padding = "10px")
}

// event handlers
generateButton.addEventListener("click", () => {
    generateFact()
})