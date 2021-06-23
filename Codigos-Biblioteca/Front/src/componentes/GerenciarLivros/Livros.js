import React from 'react';
import './GerenciarLivros.css';

const Livros = ( props ) => {
    return (
        <div className="container">
            <div >
                <img className="imagem" src={props.imgLivro}/>
            </div>
            <div className="conteudo">
                <p id="nome">{props.nomeLivro}</p>
                <p>Autor: {props.autor}</p>
                <p>ID: {props.idLivro}</p>
                <p>Quantidade: {props.quantidade}</p>
            </div>
        </div>
    );
}

export default Livros;