import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
/* import axios from 'axios'; */


function App() {

  const [pokemons, setPokemons] = useState([])
  const [loadMore, setLoadMore] =useState ("https://pokeapi.co/api/v2/pokemon?limit=20")

  const getPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    
    function singlePokemon (result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setPokemons(currentArray => [...currentArray, data])
        
      })

    }
    singlePokemon(data.results)
    await console.log(pokemons)
  }

  useEffect(() => {
    getPokemons()
  }, [])


return (
  <div className="pokeBox">
    <div>
    <h1>Pokemon</h1>
    { pokemons.map((pokemon, index) => 
    <Pokemon 
    id={pokemon. id}
    name={pokemon.name}
    image={pokemon.sprites.other.dream_world.front_default}
    type={pokemon.types[0].type.name}
    stat={pokemon.stats[0].stat.name}
    key={index}
    />
    
    )}

    
    <button className="load-more">Loade more</button>
    </div>
  </div>
)
}
export default App;
