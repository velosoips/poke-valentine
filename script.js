const questions = [
    { text: "What's your favorite Pokémon type?", options: ["Fire", "Water", "Grass", "Electric"] },
    { text: "What's your ideal Valentine's date?", options: ["Picnic", "Movie night", "Adventure", "Dinner"] },
    { text: "Which Pokémon region would you visit?", options: ["Kanto", "Johto", "Hoenn", "Sinnoh"] },
    { text: "Pick a Pokéball type", options: ["Pokéball", "Great Ball", "Ultra Ball", "Master Ball"] },
    { text: "What color do you like most?", options: ["Red", "Blue", "Green", "Yellow"] },
    { text: "What describes you best?", options: ["Brave", "Calm", "Energetic", "Mysterious"] },
    { text: "Which Pokémon ability do you prefer?", options: ["Speed Boost", "Levitate", "Intimidate", "Regenerator"] }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function showQuestion() {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");

    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = question.text;
    const answerContainer = document.getElementById("answer-options");
    
    // Clear previous buttons
    answerContainer.innerHTML = "";
    
    // Create buttons for each option
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => nextQuestion(index);
        answerContainer.appendChild(button);
    });
}

function nextQuestion(selectedIndex) {
    userAnswers.push(selectedIndex); // Store the selected answer
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        document.getElementById("loading").classList.remove("hidden");
        document.getElementById("quiz-container").classList.add("hidden");
        setTimeout(showQuestion, 1000);
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    
    const pokemon = getPokemonMatch(userAnswers);
    document.getElementById("pokemonMatch").innerText = pokemon.name;
    document.getElementById("pokemonImage").src = pokemon.image;

    // Show the "Catch Pokémon" prompt
    document.getElementById("catch-container").classList.remove("hidden");
}

function getPokemonMatch(answers) {
    if (answers[0] === 0 && answers[1] === 2) {
        return { name: "Charizard", image: "charizard.png" };
    } else if (answers[0] === 1 && answers[2] === 1) {
        return { name: "Blastoise", image: "blastoise.png" };
    } else if (answers[0] === 2 && answers[4] === 2) {
        return { name: "Venusaur", image: "venusaur.png" };
    } else if (answers[0] === 3 && answers[5] === 3) {
        return { name: "Raichu", image: "raichu.png" };
    } else {
        return { name: "Pikachu", image: "pikachu.png" };
    }
}

// Function to handle catching animation
function catchPokemon() {
    const pokeball = document.getElementById("pokeball");
    const pokemonImage = document.getElementById("pokemonImage");

    // Animate Pokéball moving toward the Pokémon
    pokeball.classList.add("throw-ball");

    // After animation, hide Pokémon and show "Got it!" message
    setTimeout(() => {
        pokemonImage.style.display = "none";
        document.getElementById("pokemonMatch").innerText = "Got it!";
        pokeball.style.display = "none";
    }, 1000);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById("result").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");

    // Reset Pokéball and Pokémon visibility
    document.getElementById("pokeball").classList.remove("throw-ball");
    document.getElementById("pokeball").style.display = "block";
    document.getElementById("pokemonImage").style.display = "block";
    document.getElementById("catch-container").classList.add("hidden");

    setTimeout(showQuestion, 1000);
}

window.onload = () => {
    document.getElementById("loading").classList.remove("hidden");
    setTimeout(showQuestion, 1000);
};
