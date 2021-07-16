import React from 'react';
import './GerenciarFuncionario';
import MyModal from "../ModalEditaFuncionario/ModalEditaFuncionario";

const Funcionarios = ( props ) => {
    return (
        <div className="container">
            <div >
                <img className="imagemFunc" src={props.imgFunc}/>
            </div>
            <div className="conteudo">
                <p id="nome">{props.nomeFunc}</p>
                <p>Email: {props.email}</p>
                <p>Cargo: {props.tipoFunc}</p>
                <MyModal idFunc={props.idFunc} nomeFunc={props.nomeFunc} emailFunc={props.email} senhaFunc={props.senhaFunc} cargoFunc={props.tipoFunc} imgFunc={props.imgFunc}></MyModal>
            </div>
        </div>
    );
}

export default Funcionarios;