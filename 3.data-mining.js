const getGymLeader = (gym, trainers) => {
    console.log("test1", trainers.find(trainer => trainer.id === gym.trainerId))
    console.log("test2", trainers.find(trainer => trainer.id === 5))
    
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

}

const getBigGyms = (gyms, trainers) => {

}

const getRarestGym = (gyms, trainers, pokemons) => {

}

module.exports = {
    getGymLeader,
    getTrainerPokemons,
    getTrainersPokemons,
    getBigGyms,
    getRarestGym,
}