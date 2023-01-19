let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

// Challenge:
// When the user clicks on the "Pick Fighters" button, pick two random 
// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    
fightButton.addEventListener("click", function() {
    let randomNumber1 = Math.floor(Math.random() * 17)
    let randomNumber2 = Math.floor(Math.random() * 17)
    let fighter1 = fighters[randomNumber1]
    let fighter2 = fighters[randomNumber2]
    console.log("random numbers:" + randomNumber1 + randomNumber2)
    console.log(fighter1, fighter2)

    stageEl.textContent = fighter1 + " vs " + fighter2;

})
