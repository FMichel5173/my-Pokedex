const PokemonCard = () => {
  return (
    <div className="cards">
      <figure className="card-bulbasaur">
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          alt='Bulbasaur'
          className="card-img"
        />
        <figcaption>Bulbasaur</figcaption>
      </figure>
      <figure className="card-charmander">
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
          alt='Charmander'
          className="card-img"
        />
        <figcaption>Charmander</figcaption>
      </figure>
      <figure className="card-pikachu">
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
          alt='Pikachu'
          className="card-img"
        />
        <figcaption>Pikachu</figcaption>
      </figure>
      <figure className="card-squirtle">
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
          alt='Squirtle'
          className="card-img"
        />
        <figcaption>Squirtle</figcaption>
      </figure>
    </div>
    
  );
};

export default PokemonCard;
