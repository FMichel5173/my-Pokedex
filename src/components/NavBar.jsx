import PropTypes from "prop-types";

const NavBar = ({ pokemonList, setPokemonIndex }) => {
  
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
          <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
      ))
}
    </div>
  );
};

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
