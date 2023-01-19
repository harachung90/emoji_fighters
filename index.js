let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

// Challenge:
// When the user clicks on the "Pick Fighters" button, pick two random 
// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    
fightButton.addEventListener("click", function() {
    let randomNumber1 = Math.floor(Math.random() * fighters.length)
    let randomNumber2 = Math.floor(Math.random() * fighters.length)
    console.log(randomNumber1, randomNumber2)
    console.log(fighters[1])
    stageEl.textContent = fighters[randomNumber1] + " vs " + fighters[randomNumber2];

})
