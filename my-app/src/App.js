import React, { useState } from 'react';
import Pokedex from './Pokedex';
import axios from 'axios';


function App() {
  const [pokemon, setPokemon] = useState([])

  axios.get("https://pokeapi.co/api/v2/pokemon")
.then(res => {
  setPokemon(res.data.results.map(p => p.name))
})
return (
<Pokedex pokemon={pokemon}/>
  );
}

export default App;
