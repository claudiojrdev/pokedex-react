import { type Pokemon } from "../types/DataTypes"

interface PokeInfoProps{
    pokemon: Pokemon | undefined
}
function PokeInfo({pokemon}:PokeInfoProps) {
    if (pokemon===undefined) return <div className="poke-info"></div>

    return (
        <div className="poke-info">
            <img src={pokemon.img} />
            <h2>{pokemon.name}</h2>
            <p>{pokemon.id}</p>
        </div>
    )
}

export default PokeInfo