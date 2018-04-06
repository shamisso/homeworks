import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

export default class PokemonList extends PureComponent {
  static propTypes = {
    pokemons: PropTypes.arrayOf(
      PropTypes.shape(
        {
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        }
      )
    )
  };
  constructor(props){
    super(props);
  }

  static defaultProps = {
    pokemons: [],
  };

  render() {
    let  pokemons = []; 
    pokemons = this.props.pokemons;
    console.log(pokemons);
    return (
      <div>
        
        {pokemons.map(pokemon => <Pokemon name={pokemon.name} url={pokemon.url}/>)}
      </div>
    );
  }
}