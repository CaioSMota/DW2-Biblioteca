import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GerenciarFuncionario.css';
import Funcionarios from './Funcionarios';

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

    return (
        <div className="listaFuncionarios">
            <div className="gerenciamento">
                <input type="submit" name="cadastrarFuncionario" id="botaoCadastrarFuncionario" value="Cadastrar Funcionario" />
                <input type="text" id="pesquisa" placeholder="Pesquisar..." />
                <input type="submit" name="pesqusiar" id="botaoPesquisar" value="Pesquisar" />
            </div>
            {funcionarios.map((func)=>{
                return (
                    <div className="funcConteudo">
                        <Funcionarios imgFunc={func.img_func}
                        nomeFunc={func.nome_func}
                        email={func.email_func}
                        tipoFunc={func.tipo_func}></Funcionarios>
                    </div>
                )
            })}

        </div>
    );
}

export default GerenciarFuncionario;