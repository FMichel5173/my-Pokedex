import PropTypes from "prop-types";

const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
  const hanhdleClickIncr = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const hanhdleClickDecr = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      {pokemonIndex > 0 && (
        <button onClick={hanhdleClickDecr}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={hanhdleClickIncr}>Suivant</button>
      )}
    </div>
  );
};

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
