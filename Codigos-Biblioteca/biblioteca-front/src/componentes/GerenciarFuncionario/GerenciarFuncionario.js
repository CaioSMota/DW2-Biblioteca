import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GerenciarFuncionario.css';
import Funcionarios from './Funcionarios';
import MyModal from "../ModalCadastraFuncionario/ModalCadastraFuncionario";

const GerenciarFuncionario = (props) => {
    const [funcionarios, setFuncs] = useState([]);

    useEffect(() => {  
        axios.get('http://localhost:4000/funcionario')
        .then((response) => {
            setFuncs(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const [campos, setCampos] = useState({
        nome_func: ""  
    });

    function onFieldChange(event) {
        event.preventDefault();
        campos[event.target.id] = event.target.value;
        console.log(campos);
        setCampos(campos);
  };

    const pesquisarFuncionario= (e) =>{
        e.preventDefault();
        if(campos.nome_cliente != ""){
        axios.post('http://localhost:4000/funcionarioProcura', campos)
        .then((response)=>{
            if(response.data != 0){
                setFuncs(response.data);
            }else{
                alert("Funcionario não encontrado!");
            }
        })
        .catch((erro)=>{
            console.log(erro);
        });
    }else{
        window.location.reload();
    }};


    return (
        <div className="listaFuncionarios">
            <div className="gerenciamentoFunc">
                <MyModal></MyModal>
                <input type="text" id="nome_func" placeholder="Pesquisar..." onChange={onFieldChange}/>
                <input type="submit" name="pesqusiar" id="botaoPesquisarFunc" value="Buscar" onClick={pesquisarFuncionario} />
            </div>
            {funcionarios.map((func)=>{
                return (
                    <div className="funcConteudo">
                        <Funcionarios imgFunc={func.img_func}
                        nomeFunc={func.nome_func}
                        email={func.email_func}
                        tipoFunc={func.tipo_func}
                        idFunc={func.id_func}
                        senhaFunc={func.senha}></Funcionarios>
                    </div>
                )
            })}

        </div>
    );
}

export default GerenciarFuncionario;