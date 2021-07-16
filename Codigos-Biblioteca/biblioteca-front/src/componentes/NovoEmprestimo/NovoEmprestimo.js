import React, { useState } from 'react';
import './NovoEmprestimo.css';
import {onFieldChange, onSubmitEmprestimo} from '../GerenciarEmprestimo/GerenciarEmprestimo';
import axios from 'axios';

const NovoEmprestimo = () => {

    const [campos, setCampos] = useState({
        id_livro: 0,
        id_cliente: 0,
        id_func: 1,
        tempo_emprestimo: 14
    });

    function onFieldChange (event) {
        campos[event.target.id] = parseInt(event.target.value);
        setCampos(campos);
    };

    const onSubmitEmprestimo = (event) =>{
        event.preventDefault();
        if(campos.id_cliente != 0 && campos.id_livro!= 0 && campos.tempo_emprestimo!=0){
            axios.post('http://localhost:4000/emprestimo', campos)
            .then((response)=>{
                console.log(response.data);
                alert("Emprestimo Cadastrado!");
            })
            .catch((erro)=>{
                console.log(erro);
                alert("Erro");
            });
        }else{
            alert("Campos em branco");
        }

    };

    return (
        <div className="novoEmprestimo">
             <h1>Novo Emprestimo</h1>
             <form onSubmit={onSubmitEmprestimo}>
                <table id="tabNovoEmprestimo">
                <tr>
                    <td>ID Cliente : </td>
                    <td><input type="text" id="id_cliente" placeholder="Digite o ID do Cliente" onChange={onFieldChange}/></td>
                </tr> 
                <tr>
                    <td>ID Livro : </td>
                    <td><input type="text" id="id_livro" placeholder="Digite o ID do Livro"  onChange={onFieldChange}/></td>
                </tr>
                <tr>
                    <td>Tempo : </td>
                    <td><select id="tempo_emprestimo" onChange={onFieldChange}>
                        <option value="14">2 Semanas</option>
                        <option value="21">3 Semanas</option>
                        <option value="28">4 Semanas</option></select></td>
                </tr>
            </table>
            <input type="submit" name="cadastrar" id="btnCadastrarEmp" value="Cadastrar"/>
            </form>
        </div>
    );
}

export default NovoEmprestimo;