const formSearchPokemon = document.querySelector("form");

formSearchPokemon.addEventListener("submit", function (page) {
  page.preventDefault();

  const pokemonNameInput = document.querySelector("#pokemon-id");
  const pokemonNameValue = pokemonNameInput.value;
  const pokemonNameLowercase = pokemonNameValue.toLowerCase();

  getPokemon(pokemonNameLowercase);
});

async function getPokemon(pokemonName) {
  try {
    const pokemonNameToDisplay = document.getElementById("pokemon-name");
    pokemonNameToDisplay.innerHTML = "";

    const imagePokemon = document.getElementById("pokemon-img");
    imagePokemon.src = "./assets/pokemon-default.png";

    const pokedexLoading = document.getElementById("pokedex");
    pokedexLoading.src = "./assets/pokedex-loading.gif";

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    const data = await response.json();

    setTimeout(() => {
      const pokedex = document.getElementById("pokedex");
      pokedex.src = "./assets/pokedex.png";

      pokemonNameToDisplay.innerHTML = data.name;
      imagePokemon.src = data.sprites.front_default;
    }, 1500);
  } catch (error) {
    console.log(error);

    const pokedexError = document.getElementById("pokedex");
    pokedexError.src = "./assets/pokedex-error.png";
  }
}
