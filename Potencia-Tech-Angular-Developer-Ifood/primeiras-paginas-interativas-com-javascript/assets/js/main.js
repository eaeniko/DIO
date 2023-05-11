function convertPokemonTypesToLi(pokemontypes) {
	return pokemontypes.map((typeSlot) => `<li class="pokemon-type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
  return `
	<li class="pokemon">
	<span class="pokemon-number">#${pokemon.order}</span>
	<span class="pokemon-name">${pokemon.name}</span>

	<div class="pokemon-detail">
		<ol class="pokemon-types">
			${convertPokemonTypesToLi(pokemon.types).join('')}

		</ol>

		<img src="${pokemon.sprites.other.dream_world.front_default}"
			alt="${pokemon.name}">
	</div>
	</li>
  `
}
const pokemonOlList = document.getElementById('pokemons-list');

pokeApi.getPokemons().then((pokemons = []) => {
	const newHtml = pokemons.map(convertPokemonToLi).join('');
	pokemonOlList.innerHTML += newHtml
})