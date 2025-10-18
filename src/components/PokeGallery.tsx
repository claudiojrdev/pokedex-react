import { type Pokemon } from '../types/DataTypes'
import PokeCard from './PokeCard'

interface PokeGalleryProps{
    pokemonList: Pokemon[]
}

function PokeGallery ({pokemonList}:PokeGalleryProps) {
    return (
        <ul className='poke-gallery'>
            {pokemonList.map(pokemon => <li className='poke-card' key={pokemon.id}><PokeCard pokemon={pokemon}/></li>)}
        </ul>
    )
}

export default PokeGallery