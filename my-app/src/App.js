import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';



function App() {

  const [pokemons, setPokemons] = useState([])
  const [loadMore, setLoadMore] =useState ("https://pokeapi.co/api/v2/pokemon?limit=20")

  //*I have commented  (as it didn't work) out a solution I had in mind to be able to search for stats and information on specific pokemon by using input field.*//
  
/*   const [pokemonName, searchPokemonName] =useState (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)⁄ */

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
    <div className="inputBox">
  {/*   <input
    className="inputBox"
    type="text"
    onChange={(e) => {
      setPokemons(e.target.value);
    }}
    />
    <button onClick={searchPokemonName}>Search for pokemon</button>
     */}
{/*       <button
        onClick={  singlePokemon }
      >
        Search Pokemon
      </button> */}
    </div>
    <div>
    <h1>Pokemon</h1>
    { pokemons.map((pokemon, index) => 
    <Pokemon 
    id={pokemon. id}
    name={pokemon.name}
    image={pokemon.sprites.other.dream_world.front_default}
    type={pokemon.types[0].type.name}
  /*   stats={pokemon.stats[0].stats.name} */
    key={index}
    />
    
    )}

    
    <button className="load-more">Loade more</button>
    </div>
  </div>
)
}
export default App;
