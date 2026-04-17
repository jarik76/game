const container = document.querySelector("#games");
const SearchInput = document.querySelector("#search");

const API_KEY = "d787984d06c542cdbe4d9d1540507ca3";
const BASE_URL = "https://api.rawg.io/api";

async function loadGames(url) {
    const response = await fetch(url);
    const data = await response.json();
    showGames(data.results)
}


function showGames(games) {
    container.innerHTML = "";

    games.forEach(game => {
        // Далі пишемо тут
       const col = document.createElement("div");
       col.className = "col";

       col.innerHTML = `
            <div class="game">
                <img src="${game.background_image}">
                <h3 class = "game-name">${game.name}</h3>
                
            </div>
            
        `;
        col.addEventListener("click", () => {
            window.location.href = `game.html?id=${game.id}`;
        });
        container.appendChild(col);



        
    })

}

loadGames(`${BASE_URL}/games?key=${API_KEY}&ordering=-rating`);




SearchInput.addEventListener("input", () => {
    const query = SearchInput.value;
    if (query.length > 2) {
        loadGames(`${BASE_URL}/games?key=${API_KEY}&search=${query}`);
    } else {
        loadGames(`${BASE_URL}/games?key=${API_KEY}&ordering=-rating`);
    }
});

