import { type Pokemon } from '../types/DataTypes'
import PokeCard from './PokeCard'

interface PokeGalleryProps{
    pokemonList: Pokemon[],
    onOpenInfo: (pokemon:Pokemon) => void
}

function PokeGallery ({pokemonList, onOpenInfo}:PokeGalleryProps) {
    return (
        <ul className='poke-gallery'>
            {pokemonList.map(pokemon => <li key={pokemon.id}><PokeCard onOpenInfo={onOpenInfo} pokemon={pokemon}/></li>)}
        </ul>
    )
}

export default PokeGallery