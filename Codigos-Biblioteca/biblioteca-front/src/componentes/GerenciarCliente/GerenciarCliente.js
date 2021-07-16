import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GerenciarCliente.css';
import Cliente from './Cliente';
import MyModal from "../ModalCadastraCliente/ModalCadastraCliente";

const GerenciarCliente = (props) => {
    const [cliente, setClientes] = useState([]);

    useEffect(() => {  
        axios.get('http://localhost:4000/clientes')
        .then((response) => {
            setClientes(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const [campos, setCampos] = useState({
        nome_cliente: ""  
    });

    function onFieldChange(event) {
        event.preventDefault();
        campos[event.target.id] = event.target.value;
        console.log(campos);
        setCampos(campos);
  };

    const pesquisarEmprestimos = (e) =>{
        e.preventDefault();
        if(campos.nome_cliente != "" ){
        axios.post('http://localhost:4000/clientesProcura', campos)
        .then((response)=>{
            if(response.data != 0){
                setClientes(response.data);
            }else{
                alert("Cliente não encontrado!");
            }
        })
        .catch((erro)=>{
            console.log(erro);
        });
    }else{
        window.location.reload();
    }};

    return (
        <div className="listaClientes">
            <div className="gerenciamentoCliente">
                <MyModal></MyModal>
                <input type="text" id="nome_cliente" placeholder="Pesquisar..." onChange={onFieldChange}/>
                <input type="submit" name="pesquisar" id="botaoPesquisarClie" value="Pesquisar" onClick={pesquisarEmprestimos}/>
            </div>
            {cliente.map((clie)=>{
                return (
                    <div className="clienteConteudo">
                       <Cliente 
                        idCliente={clie.id_cliente}
                        nome_cliente={clie.nome_cliente}
                        email={clie.email}
                        cpf={clie.cpf}></Cliente>
                    </div>
                )
            })}

        </div>
    );
}

export default GerenciarCliente;