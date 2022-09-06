import React from "react";

function Pokemon() {
    return (
        <div className="pokemon">
            <div className="number">
<small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="details">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default Pokemon