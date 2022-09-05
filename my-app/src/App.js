import React, { useState } from 'react';
import Pokedex from './Pokedex';


function App() {
  const [pokemon, setPokemon] = useState(["bulbasuar", "charmander"])
  return (
<Pokedex pokemon={pokemon}/>
  );
}

export default App;
