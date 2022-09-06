import React from "react";

const Pokemon = ({id, name, image, type}) => {
    return (
        <div className="pokemon">
            <div className="number">
<small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="details">
                <h3>Name:{name}</h3>
                <small>Type: {type}</small>
                
            </div>
        </div>
    )
}

export default Pokemon