function getPokemonMatch() {
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;

    let match = "";
    let imageUrl = "";

    if (q1 === "fire" && q2 === "fire" && q3 === "fire") {
        match = "🔥 Charmander – A fiery and passionate love!";
        imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png";
    } else if (q1 === "water" && q2 === "water" && q3 === "water") {
        match = "🌊 Squirtle – A deep and calming relationship!";
        imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png";
    } else if (q1 === "electric" && q2 === "electric" && q3 === "electric") {
        match = "⚡ Pikachu – Energetic and fun love!";
        imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png";
    } else {
        match = "🌿 Bulbasaur – A nurturing and caring relationship!";
        imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    }

    document.getElementById("pokemonMatch").innerText = match;
    document.getElementById("pokemonImage").src = imageUrl;
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
}

function restartQuiz() {
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
}
