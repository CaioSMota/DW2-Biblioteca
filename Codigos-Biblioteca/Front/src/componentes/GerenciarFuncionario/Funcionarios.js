import React from 'react';
import './GerenciarFuncionario';

const Funcionarios = ( props ) => {
    return (
        <div className="container">
            <div >
                <img className="imagem" src={props.imgFunc}/>
            </div>
            <div className="conteudo">
                <p id="nome">{props.nomeFunc}</p>
                <p>Email: {props.email}</p>
                <p>Tipo: {props.tipoFunc}</p>
            </div>
        </div>
    );
}

export default Funcionarios;