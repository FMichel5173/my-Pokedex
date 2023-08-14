const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
  },
];

const PokemonCard = () => {
  const pokemon = pokemonList[0]; // Changez ceci à pokemonList[1] pour tester le second Pokémon.

  return (
    <div className='cards'>
      <figure className='card'>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} className='card-img' />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;
