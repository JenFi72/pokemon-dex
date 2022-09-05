import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [pokemon, setPokemon] = useState([])
const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")

const getPokemons = async () => {
  const res = await fetch(loadMore)
  const data = await res.json()

  console.log(data)
}

useEffect(() => {
  getPokemons()
}, [])


return (
  <div className="pokeBox">
    <div>
    <h1>Pokemon</h1>
    <button className="load-more">Loade more</button>
    </div>
  </div>
)
}
export default App;
