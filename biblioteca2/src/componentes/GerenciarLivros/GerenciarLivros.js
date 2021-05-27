import React from 'react';
import './GerenciarLivros.css';

const GerenciarLivros = (props) => {
    return (
        <div className="listalivros">
            <div className="gerenciamento">
                <input type="submit" name="cadastrarLivro" id="botaoCadastrarLivro" value="Cadastrar Livro" />
                <input type="text" id="pesquisa" placeholder="Pesquisar..." />
                <input type="submit" name="pesqusiar" id="botaoPesquisar" value="Pesquisar" />
            </div>
            <table class="table">
                <tr class="titulos">
                    <td>Imagens</td>
                    <td>Nome Livro</td>
                    <td>Autor</td>
                    <td>ID Livro</td>
                    <td>Quantidade</td>
                </tr>
                <tr>
                    <td><img src={props.imgLivro} /></td>
                    <td>{props.titulo}</td>
                    <td>{props.autor}</td>
                    <td>{props.id}</td>
                    <td>{props.qtd}</td>
                </tr>
            </table>
        </div>
    );
}

export default GerenciarLivros;