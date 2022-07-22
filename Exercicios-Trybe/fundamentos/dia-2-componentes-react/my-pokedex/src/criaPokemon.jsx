import React from "react";

class CriaPoke extends React.Component {
    render() {
        const { name, type, image, averageWeight } = this.props.poke;
        return(
            <div>
                <img src={image} alt='imagem pokemon'></img> 
                <p> Nome: {name} </p>
                <p> Tipo: {type} </p>
                <p> peso: {averageWeight.value}{averageWeight.measurementUnit}</p>
            </div>
        )
    }
}

export default CriaPoke;