import React from 'react';
import './NovoEmprestimo.css';

const NovoEmprestimo = () => {
    return (
        <div className="novoEmprestimo">
             <h1>Novo Empréstimo</h1>
                <table id="tabNovoEmprestimo">
                <tr>
                    <td>Cliente:</td>
                    <td><input type="text" id="cpfCliente" placeholder="Digite o CPF do Cliente"/></td>
                </tr> 
                <tr>
                    <td>Nome:</td>
                    <td><input type="text" id="nomeCliente" placeholder="Nome Cliente"/></td>
                </tr>
                <tr>
                    <td>ID Livro:</td>
                    <td><input type="text" id="idLivro" placeholder="Digite o ID do Livro"/></td>
                </tr>
                <tr>
                    <td>Nome Livro:</td>
                    <td><input type="text" id="novoLivro" placeholder="Nome do Livro"/></td>
                </tr>
                <tr>
                    <td>Nome Livro:</td>
                    <td><input type="text" id="novoLivro" placeholder="Nome do Livro"/></td>
                </tr>
                <tr>
                    <td>Tempo Emprestimo:</td>
                    <td><select id="tempo">
                        <option value="2sm">2 Semanas</option>
                        <option value="3sm">3 Semanas</option>
                        <option value="4sm">4 Semanas</option></select></td>
                </tr>
            </table>
            <input type="submit" name="cadastrar" id="botao" value="Cadastrar"/>
        </div>
    );
}

export default NovoEmprestimo;