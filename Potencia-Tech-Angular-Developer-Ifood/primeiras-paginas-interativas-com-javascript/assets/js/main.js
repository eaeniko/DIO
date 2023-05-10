const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `
	<li class="pokemon">
	<span class="pokemon-number">#001</span>
	<span class="pokemon-name">${pokemon.name}</span>

	<div class="pokemon-detail">
		<ol class="pokemon-types">
			<li class="pokemon-type">grass</li>
			<li class="pokemon-type">poison</li>
		</ol>

		<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
			alt="${pokemon.name}">
	</div>
	</li>
  `
}
const pokemonOlList = document.getElementById('pokemons-list');
fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
	for (let i = 0; i < pokemonList.length; i++) {
		const pokemon = pokemonList[i];
		pokemonOlList.innerHTML += convertPokemonToLi(pokemon);
	}
  })
  .catch((error) => console.log(error))
  .finally(() => console.log('Concluido'))