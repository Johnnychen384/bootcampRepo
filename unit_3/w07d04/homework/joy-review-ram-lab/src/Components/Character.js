import React from "react";
import "../App.css"

const Character = (props) => {

    return (
        <div key={props.display.id} className="char card">
            <h2>{props.display.name}</h2>
            <img src={props.display.image} alt="Oopsie daisy" />
            <h4>{props.display.species}</h4>
            <h4>{props.display.status}</h4>
        </div>
    )
}

export default Character;