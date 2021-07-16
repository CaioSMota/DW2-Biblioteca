import React from 'react';
import './GerenciarCliente.css';
import MyModal from "../ModalEditaCliente/ModalEditaCliente";

const Clientes = ( props ) => {
    return (
        <div className="container">
            <div className="conteudoCliente">
                <p id="nome">Nome: {props.nome_cliente}</p>
                <p id="id">ID: {props.idCliente}</p>
                <p>Email: {props.email}</p>
                <p>CPF: {props.cpf}</p>
                <MyModal idCliente={props.idCliente} nomeCliente={props.nome_cliente} emailCliente={props.email} cpfCliente={props.cpf}></MyModal>
            </div>
        </div>
    );
}

export default Clientes;