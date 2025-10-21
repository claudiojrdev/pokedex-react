import './App.css'
import SearchBar from './components/SearchBar'
import PokeGallery from './components/PokeGallery'
import { type Pokemon } from './types/DataTypes'
import { useEffect, useState } from 'react'
import axios from "axios"

interface PokemonListResponse {
  results: {name:string, url: string}[]
}

function App() {
  const POKEDEX_LIST_URL = "https://pokeapi.co/api/v2/pokemon?limit=100"
  
  const [loading,setLoading] = useState<boolean>(false)
  const [allPokemons,setAllPokemons] = useState<Pokemon[]>([])
  const [filteredPokemons,setFilteredPokemons] = useState<Pokemon[]>([])

  useEffect(()=>{
    const fetchPokemons = async () => {
      try {
        setLoading(true)
        
        const listResponse = await axios.get<PokemonListResponse>(POKEDEX_LIST_URL)
        const pokemonsUrls = listResponse.data.results.map(pokemon => pokemon.url) 

        const pokemonPromises = pokemonsUrls.map((url)=> axios.get(url))
        const pokemonDetails = await Promise.all(pokemonPromises)
        
        const newPokemons: Pokemon[] = pokemonDetails.map((Response => {
          const pokeApi = Response.data;
          return {
            id: pokeApi.id,
            name: pokeApi.name,
            img: pokeApi.sprites.front_default
          }
        }))
        setAllPokemons(newPokemons)
        setFilteredPokemons(newPokemons)
        setLoading(false)
      } catch(err){
        console.error(err)
      }}
    fetchPokemons()
  },[])

  const handleSearch = (searchText: string) => {
    if (searchText.trim()===''){
      setFilteredPokemons(allPokemons)
    }else{
      const filteredList = allPokemons.filter(pokemon=>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase()))
      setFilteredPokemons(filteredList)
    }
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
