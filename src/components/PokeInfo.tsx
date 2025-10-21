import { type Pokemon } from "../types/DataTypes"

interface PokeInfoProps{
    pokemon: Pokemon
}
function PokeInfo({pokemon}:PokeInfoProps) {
    <div>
        <img src={pokemon.img} />
        <h2>{pokemon.name}</h2>
        <p>{pokemon.id}</p>
    </div>
}

export default PokeInfo