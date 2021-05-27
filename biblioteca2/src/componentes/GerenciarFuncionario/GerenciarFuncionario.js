import React from 'react';
import './GerenciarFuncionario.css';

const GerenciarFuncionario = (props) => {
    return (
        <div className="listaFuncionarios">
            <div className="gerenciamento">
                <input type="submit" name="cadastrarFuncionario" id="botaoCadastrarFuncionario" value="Cadastrar Funcionario" />
                <input type="text" id="pesquisa" placeholder="Pesquisar..." />
                <input type="submit" name="pesqusiar" id="botaoPesquisar" value="Pesquisar" />
            </div>
            <table class="table">
                <tr class="titulos">
                    <td>Nome</td>
                    <td>ID Funcionario</td>
                    <td>E-mail</td>
                </tr>
                <tr>
                    <td>{props.nomeFuncionario}</td>
                    <td>{props.idFuncionario}</td>
                    <td>{props.emailFuncionario}</td>
                </tr>
            </table>
        </div>
    );
}

export default GerenciarFuncionario;