import { type Pokemon } from "../types/DataTypes"

interface PokeInfoProps{
    pokemon: Pokemon | undefined
}
function PokeInfo({pokemon}:PokeInfoProps) {
    if (pokemon===undefined) return <div className="poke-info"></div>

    return (
        <div className="poke-info">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} />
            <h2>{pokemon.name}</h2>
            <p>{pokemon.id}</p>
        </div>
    )
}

export default PokeInfo