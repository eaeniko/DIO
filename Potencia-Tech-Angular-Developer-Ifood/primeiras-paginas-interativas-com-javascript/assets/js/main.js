function convertPokemonToLi(pokemon) {
  return `
	<li class="pokemon ${pokemon.type}">
	<span class="pokemon-number">#${pokemon.number}</span>
	<span class="pokemon-name">${pokemon.name}</span>

	<div class="pokemon-detail">
		<ol class="pokemon-types">
			${pokemon.types.map((type) => `<li class="pokemon-type ${type}">${type}</li>`).join('')}

		</ol>

		<img src="${pokemon.photo}"
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