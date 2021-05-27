import React from 'react';
import './GerenciarEmprestimo.css';

const GerenciarEmprestimo = ( props ) => {
    return (
        <div className="listaEmprestimos">
        <div className="gerenciamento">
            <input type="text" id="pesquisa" placeholder="Pesquisar..."/> 
            <input type="submit" name="pesqusiar" id="botaoPesquisar" value="Pesquisar"/>
        </div>
       <table class="table">
                <tr class="titulos">
                    <td>ID Livro</td>
                    <td>ID Funcionario</td>
                    <td>ID Cliente</td>
                    <td>Tempo</td>
                </tr>
                <tr>
                    <td>{props.idLivro}</td>
                    <td>{props.idFuncionario}</td>
                    <td>{props.idCliente}</td>
                    <td>{props.tempoEmprestimo}</td>
                </tr>
            </table>   
        </div>
    );
}

export default GerenciarEmprestimo;