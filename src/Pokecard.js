import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{props.name}</div>
            <img className="Pokecard-img" src={props.img} alt={props.name} />
            <p>Type: {props.type}</p>
            <p>EXP: {props.exp}</p>
        </div>
    );
};

export default Pokecard;
