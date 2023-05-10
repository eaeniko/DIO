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

pokeApi.getPokemons().then((pokemonList = []) => {
	pokemonOlList.innerHTML += pokemonList.map(convertPokemonToLi).join('');
})