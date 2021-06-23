import './GerenciarLivros.css';
import ImgLivro1 from '../../imagens/l1.jpg';
import Livros from './Livros.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GerenciarLivros = (props) => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {  
        axios.get('http://localhost:4000/livros')
        .then((response) => {
            setLivros(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className="listalivros">
            <div className="gerenciamento">
                <input type="submit" name="cadastrarLivro" id="botaoCadastrarLivro" value="Cadastrar Livro" />
                <input type="text" id="pesquisa" placeholder="Pesquisar..." />
                <input type="submit" name="pesqusiar" id="botaoPesquisar" value="Pesquisar" />
            </div>
            {livros.map((livro)=>{
                return (
                    <div className="livrosConteudo">
                        <Livros imgLivro={livro.livro_img} nomeLivro={livro.nome_livro} autor={livro.autor} idLivro={livro.id_livro} quantidade={livro.qtd_livro}></Livros>
                    </div>
                )
            })}

        </div>
    );
}

export default GerenciarLivros;