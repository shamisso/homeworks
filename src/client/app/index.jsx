import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import Counter from './components/counter';
import PokemonList from './containers/PokemonListContainer';

class App extends Component {
  render() {
    return <div>
      <Header />
      <PokemonList />
      <Footer />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));