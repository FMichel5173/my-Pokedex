import PropTypes from "prop-types";

const NavBar = ({pokemonList, pokemonIndex,hanhdleClickIncr, hanhdleClickDecr}) => {
  return (
    <div>
      {pokemonIndex > 0 && <button onClick={hanhdleClickDecr}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={hanhdleClickIncr}>Suivant</button>}
    </div>
  );
};

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.array.isRequired,
  hanhdleClickIncr: PropTypes.func.isRequired,
  hanhdleClickDecr: PropTypes.func.isRequired
}

export default NavBar;