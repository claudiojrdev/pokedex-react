import './App.css'
import SearchBar from './components/SearchBar'
import PokeGallery from './components/PokeGallery'
import { type Pokemon } from './types/DataTypes'
import { useState } from 'react'

function App() {
  const [pokemons,setPokemons] = useState<Pokemon[]>([
              {
              id: 1,
              name: "Bulbassaur",
              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              },
             {
              id: 2,
              name: "Bulbassaur",
              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
              },
             {
              id: 3,
              name: "Bulbassaur",
              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
              },
              {
              id: 4,
              name: "Charmander",
              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
              },
              {
              id: 5,
              name: "Charmeleon",
              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
              }
            ])
  const [filteredPokemons,setFilteredPokemons] = useState<Pokemon[]>(pokemons)


  const handleSearch = (searchText: string) => {
    console.log(searchText)
    const newPokemons = pokemons.filter(pokemon=>{
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredPokemons(newPokemons)
    console.log(filteredPokemons)
  }

  return (
    <>
      <main>
        <div className='poke-container'>
          <SearchBar onSearch={handleSearch}></SearchBar>
          <PokeGallery pokemonList={filteredPokemons}/>
        </div>
        <div className='poke-info'></div>
      </main>
    </>
  )
}

export default App
