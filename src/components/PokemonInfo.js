import React, { useState } from "react";
import "./PokemonInfo.css";

const PokemonInfo = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const apiUrl =
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const foundPokemon = data.pokemon.find(
        (pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase()
      );

      if (foundPokemon) {
        setPokemonData(foundPokemon);
      } else {
        setPokemonData(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setPokemonData(null);
    }
  };

  return (
    <div class="enter">
      <form onSubmit={handleSubmit}>
        <label>
          <strong>Enter Pokémon Name</strong>:
          <input
            type="text"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            required
          />
        </label>
        <button type="submit">
          <strong>Search</strong>
        </button>
      </form>

      {pokemonData && (
        <div class="pokemon-details">
          <h2>
            {pokemonData.name} ({pokemonData.num})
          </h2>
          <img src={pokemonData.img} alt={pokemonData.name} />
          <p>Type: {pokemonData.type.join(", ")}</p>
          <p>Weaknesses: {pokemonData.weaknesses.join(", ")}</p>
        </div>
      )}

      {!pokemonData && pokemonName !== "" && <p>Pokémon not found.</p>}
    </div>
  );
};

export default PokemonInfo;
