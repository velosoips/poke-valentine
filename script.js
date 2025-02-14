const questions = [
    { text: "What's your favorite Pokémon type?", options: ["Fire", "Water", "Grass", "Electric"] },
    { text: "What's your ideal Valentine's date?", options: ["Picnic", "Movie night", "Adventure", "Dinner"] },
    { text: "Which Pokémon region would you visit?", options: ["Kanto", "Johto", "Hoenn", "Sinnoh"] },
    { text: "Pick a Pokéball type", options: ["Pokéball", "Great Ball", "Ultra Ball", "Master Ball"] },
    { text: "What color do you like most?", options: ["Red", "Blue", "Green", "Yellow", "Orange"] },
    { text: "What describes you best?", options: ["Brave", "Calm", "Energetic", "Mysterious"] },
    { text: "Which Pokémon ability do you prefer?", options: ["Speed Boost", "Levitate", "Intimidate", "Regenerator"] }
];

const pokemonResults = [
    { name: "Pikachu", img: "pikachu.png" },
    { name: "Charizard", img: "charizard.png" },
    { name: "Blastoise", img: "blastoise.png" },
    { name: "Venusaur", img: "venusaur.png" },
    { name: "Raichu", img: "raichu.png" }
];

let currentQuestionIndex = 0;
let selectedPokemon = null;

function showQuestion() {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");

    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = question.text;
    const answerContainer = document.getElementById("answer-options");

    answerContainer.innerHTML = ""; // Clear previous options

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("quiz-button");
        button.classList.add(`button-${index + 1}`); // Assign different colors
        button.onclick = nextQuestion;
        answerContainer.appendChild(button);
    });
}

function nextQuestion() {
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

    selectedPokemon = pokemonResults[Math.floor(Math.random() * pokemonResults.length)];

    document.getElementById("pokemonMatch").innerText = selectedPokemon.name + "!";
    document.getElementById("pokemonImage").src = selectedPokemon.img;
}

function catchPokemon() {
    const pokeball = document.getElementById("pokeball");
    const pokemonImage = document.getElementById("pokemonImage");

    pokeball.classList.add("throw-ball");
    pokemonImage.classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("result").classList.add("hidden");
        document.getElementById("caught-screen").classList.remove("hidden");
    }, 1200);
}

function revealSurprise() {
    document.getElementById("caught-screen").classList.add("hidden");
    document.getElementById("surprise-screen").classList.remove("hidden");
}

function restartQuiz() {
    currentQuestionIndex = 0;
    document.getElementById("surprise-screen").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");
    setTimeout(showQuestion, 1000);
}

window.onload = () => {
    document.getElementById("loading").classList.remove("hidden");
    setTimeout(showQuestion, 1000);
};
