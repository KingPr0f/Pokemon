import React from 'react'
import { userPokemonsType } from '../utils/Types'

function PokemonCardGrid( { pokemons }: { pokemons: userPokemonsType[] } ) {
  return (
    <div className="pokemon-card-grid-container">
        <div className="pokemon-card-grid">
            {
                pokemons &&
                pokemons.length > 0 &&
                pokemons?.map((data:any) => {
                    return (
                    <div className='pokemon-card' key={data.id}>
                        <div className='pokemon-card-list'>

                        </div>
                        <div className="pokemon-card-compare">

                            
                        </div>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default PokemonCardGrid