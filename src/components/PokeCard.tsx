import { type Pokemon } from "../types/DataTypes";

interface PokeCardProps {
    pokemon: Pokemon,
    onOpenInfo: (pokemon:Pokemon) => void
}

function PokeCard ({pokemon, onOpenInfo}: PokeCardProps) {
    return (
        <div className='poke-card' onClick={()=>onOpenInfo(pokemon)}>
            <img src={pokemon.img}/>
            <p>N {pokemon.id}</p>
            <p>{pokemon.name}</p>
        </div>
    )
}

export default PokeCard