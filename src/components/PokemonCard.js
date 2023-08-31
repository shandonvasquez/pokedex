import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/PokemonCard.css";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonsData, setPokemonsData] = useState({});

  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemonsData(res.data));
  }, []);

  return (
    <Link to={`/pokedex/${pokemonsData.id}`}>
     <div className="pokemon-types">
      
     <div className={`pokemon-card ${pokemonsData.types?.[0].type.name}`}>
        <div className="pokemon-short-info">
          <p>#{("000" + pokemonsData.id).slice(-3)}</p>
          <h1>{pokemonsData.name}</h1>
          
          <div className="pokemon-types">
            
            {pokemonsData.types?.map((pokemonTypes) => (
              <p key={pokemonTypes.type.name} id={pokemonTypes.type.name}>
                {pokemonTypes.type.name}
              </p>
            ))}
          </div>
         
        </div>
        <div className="pokemon-image">
          <img
            src={pokemonsData.sprites?.other["official-artwork"].front_default}
            alt={`${pokemonsData.name} sprite`}
          />
        </div>
     
      </div>
      <p>Hp: {pokemonsData.stats?.[0].base_stat}</p>
          <p>Attack: {pokemonsData.stats?.[1].base_stat}</p>
          <p>Defense: {pokemonsData.stats?.[2].base_stat}</p>
          <p>Velocity: {pokemonsData.stats?.[3].base_stat}</p>
     </div>
    </Link>
  );
};

export default PokemonCard;
