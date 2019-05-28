const calculateTotalPokemonWeight = (pokemons) => {
    return pokemons.reduce((totalWeight, currentPokemon) => {
        //console.log(totalWeight + parseFloat(currentPokemon.weight))
        return totalWeight + parseFloat(currentPokemon.weight)
    }, 0)
}

const calculateAverageSpawnChance = (pokemons) => {
    return pokemons.reduce((totalSpawn, currentPokemon) => {
        return (totalSpawn + parseFloat(currentPokemon.spawn_chance))
    }, 0) / pokemons.length
}

const calculateTotalEggDistance = (pokemons) => {
    var filteredPokemons = pokemons.filter(pokemon => {
        const b = pokemon.egg != "Not in Eggs";
        return b
    })
    return filteredPokemons.reduce((totalDistance, currentPokemon) => {
        return totalDistance + parseFloat(currentPokemon.egg.split(" ", 1))
    },0)
}
const getHeaviestPokemon = (pokemons) => {
    return pokemons.reduce((prev, current) => {
        var heavy = parseFloat(prev.weight.split(" ", 1)) > parseFloat(current.weight.split(" ", 1)) ? prev : current
        return heavy
    })
}



const categorizePokemonsByRarity = (pokemons) => {
   return pokemons.reduce((pokemonRarity, pokemon) => {
     if (pokemon.spawn_chance < 0.01) {
         pokemonRarity.legendary.push(pokemon)
         return pokemonRarity
     } if (pokemon.spawn_chance >= 0.01 && pokemon.spawn_chance < 0.11) {
         pokemonRarity.rare.push(pokemon)
         return pokemonRarity
     } else {
         pokemonRarity.common.push(pokemon)
         return pokemonRarity
     }
  }, {
      common: [],
      rare: [],
      legendary: []
  })
}

const getRarePokemons = (pokemons) => {
    return pokemons.filter(pokemon => pokemon.spawn_chance < 0.11).length
}



module.exports = {
    calculateTotalPokemonWeight,
    calculateAverageSpawnChance,
    calculateTotalEggDistance,
    getHeaviestPokemon,
    getRarePokemons,
    categorizePokemonsByRarity
}