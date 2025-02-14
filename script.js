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

function showQuestion() {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = question.text;
    const select = document.getElementById("answer-options");
    select.innerHTML = "";
    question.options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.innerText = option;
        select.appendChild(opt);
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
    document.getElementById("pokemonMatch").innerText = "Pikachu!";
    document.getElementById("pokemonImage").src = "pikachu.png";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");
    setTimeout(showQuestion, 1000);
}

window.onload = () => {
    document.getElementById("loading").classList.remove("hidden");
    setTimeout(showQuestion, 1000);
};
