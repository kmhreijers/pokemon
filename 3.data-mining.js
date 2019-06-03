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

const getGymLeader = (gym, trainers) => {   
    return trainers.find(trainer => trainer.id === gym.trainerId)
}

const getTrainerPokemons = (trainer, pokemons) => {
    return pokemons.reduce((trainerPokemon, pokemon) => {
        if (trainer.pokemonIds.includes(pokemon.id)) {
            trainerPokemon[trainer.pokemonIds.indexOf(pokemon.id)] = pokemon
            return trainerPokemon
        } return trainerPokemon
    },[])
}

const getTrainersPokemons = (trainers, pokemons) => {
    return trainers.reduce((pokemonTrainers, trainer) => {
        pokemonTrainers.pokemons = getTrainerPokemons(trainer, pokemons)
        //console.log("Pokemon Trainers", pokemonTrainers)
        return pokemonTrainers
    }, [])
}
const getBigTeam = (trainers) => {
    //console.log(trainers.filter(trainer => trainer.pokemonIds.length > 3))
    return trainers.filter(trainer => trainer.pokemonIds.length > 3)
}

const getBigGyms = (gyms, trainers) => { 
    return gyms.reduce((gymData, gym) => {
        getBigTeam(trainers).map(trainer => {
            if(trainer.id == gym.trainerId) {
                gymData.push(gym.city)
                return gymData
            }
        })
        return gymData
    }, [])
}
const getRarestGym = (gyms, trainers, pokemons) => {
    return gyms.map(gym => {
        //if (gym.trainersId == trainers.id) {
        console.log(trainers.find(trainer => trainer.id == gym.trainersId))
            
        //console.log("trainerKutzooi", trainer)
        
               
            var test = getTrainerPokemons(trainer, pokemons)
            //console.log("test", test)
            var test2 = categorizePokemonsByRarity(test.pokemons)
            //console.log("test2", test2.common.length)
            //console.log("test2", test2.rare.length)
            //console.log("test2", test2.legendary.length)
            return test2
        }
    })
}
// const getRarestGym = (gyms, trainers, pokemons) => {
//     return trainers.map(trainer => {
//         console.log(getTrainerPokemons(trainer, pokemons))
//         return getTrainerPokemons(trainer, pokemons).reduce((uberPokemon, pokemon) => {
            
//             //console.log(uberPokemon)
//             return parseFloat(uberPokemon.spawn_chance) < parseFloat(pokemon.spawn_chance) ? uberPokemon : pokemon
//         },0) 
//     })
// }


/* 
    get list of all trainerPokemon.id trainers have
        if trainerPokemon.id == pokemon.id then push pokemon{id, name, spawn_chance}
            check which pokemon has lowest spawn_chance
                check to which trainer.id it belongs 
                    check gym.trainerId with previously found trainer.id
*/


// test('getRarestGym: gets the gym with the most legendary pokemon', () => {
//     const rarestGym = getRarestGym(gyms, trainers, pokemons)
//     expect(rarestGym).toEqual({ id: 1, city: 'Saffron City', trainerId: 2 })
// })



module.exports = {
    getGymLeader,
    getTrainerPokemons,
    getTrainersPokemons,
    getBigGyms,
    getRarestGym,
    getBigTeam,
}