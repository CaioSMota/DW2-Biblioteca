import React from 'react';
import './PreLivro.css';

const PreLivro = ( props ) => {
    return (
        <div className="PreLivro">
            <img className="img" src={props.imgLivro}/>
            <p className="NomeLivro">{props.titulo}</p>
        </div>
    );
}

export default PreLivro;