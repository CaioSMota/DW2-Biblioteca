import React from 'react';
import './GerenciarEmprestimo';

const Emprestimo = ( props ) => {
    return (
        <div className="container">
            <div >
                <img className="imagem" src={props.imgLivro}/>
            </div>
            <div className="conteudo">
                <p id="nome">{props.nomeCliente}</p>
                <p>Livro: {props.nomeLivro}</p>
                <p>Tempo: {props.tempo} Dias</p>
                <p>Funcionário: {props.nomeFunc}</p>
            </div>
        </div>
    );
}

export default Emprestimo;