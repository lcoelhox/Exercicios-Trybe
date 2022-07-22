import React from "react";
import CriaPoke from "./criaPokemon";
import pokemons from "./data";
import css from "./App.css"

class Pokedex extends React.Component {
    render() {
        return(
            <div className="pokemons" id="pokemons">
                {pokemons.map((elem) => (
                <CriaPoke poke={elem}/>
                ))}
            </div>
        )
    }
}

export default Pokedex;