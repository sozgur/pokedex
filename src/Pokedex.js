import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
    let message;
    if (props.isWinner) {
        message = <p className="Pokedex-message">THIS HAND WINS!</p>;
    }
    return (
        <div className="Pokedex">
            <h1> Pokedex </h1>
            <div className="Pokedex-card">
                {props.pokemon.map((p) => {
                    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
                    return (
                        <Pokecard
                            key={p.id}
                            name={p.name}
                            img={imgUrl}
                            type={p.type}
                            exp={p.base_experience}
                        />
                    );
                })}
            </div>
            {message}
        </div>
    );
};

export default Pokedex;
