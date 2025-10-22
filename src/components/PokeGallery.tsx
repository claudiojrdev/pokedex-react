import { type Pokemon } from '../types/DataTypes'
import PokeCard from './PokeCard'

interface PokeGalleryProps{
    loading: boolean,
    pokemonList: Pokemon[],
    onOpenInfo: (pokemon:Pokemon) => void
}

function PokeGallery ({loading, pokemonList, onOpenInfo}:PokeGalleryProps) {
    if (loading) return (<div><h3 className='poke-gallery'>Carregando...</h3></div>)

    return (
        <ul className='poke-gallery'>
            {pokemonList.map(pokemon => <li key={pokemon.id}><PokeCard onOpenInfo={onOpenInfo} pokemon={pokemon}/></li>)}
        </ul>
    )
}

export default PokeGallery