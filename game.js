const API_KEY = "d787984d06c542cdbe4d9d1540507ca3";
const BASE_URL = "https://api.rawg.io/api";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const GAME_URL = `${BASE_URL}/games/${id}?key=${API_KEY}`;

async function loadGame() {
    const response = await fetch(GAME_URL);
    const data = await response.json();

    game.innerHTML = `
    <div class="game-div" style="padding: 20px">
        <img class="game-image" src="${data.background_image}" style="width: 400px">
        <h1 class="game-name1">${data.name}</h1>
        <p class="game-name2">Рейтинг: ${data.rating}</p>
        <p class="game-name2">Рік випуску: ${data.released}</p>
        <p class="game-name2">${data.description_raw.slice(0, 200)}...</p>
        <a href="/" class="btn-back">Back</a>

    </div>

    `;
}
loadGame();