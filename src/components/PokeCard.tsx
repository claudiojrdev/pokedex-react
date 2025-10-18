import { type Pokemon } from "../types/DataTypes";

interface PokeCardProps {
    pokemon: Pokemon
}

function PokeCard ({pokemon}: PokeCardProps) {
    return (
        <div className='poke-card'>
            <img src={pokemon.img}/>
            <p>N {pokemon.id}</p>
            <p>{pokemon.name}</p>
        </div>
    )
}

export default PokeCard