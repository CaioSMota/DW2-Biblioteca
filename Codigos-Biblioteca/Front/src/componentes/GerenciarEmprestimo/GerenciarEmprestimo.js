import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GerenciarEmprestimo.css';
import Emprestimo from './Emprestimo';


const GerenciarEmprestimo = (props) => {
    const [emprestimos, setEmprestimos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/emprestimo')
            .then((response) => {
                setEmprestimos(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);



    return (
        <div className="listaEmprestimos">
            <div className="gerenciamento">
                <input type="text" id="pesquisa" placeholder="Pesquisar..." />
                <input type="submit" name="pesqusiar" id="botaoPesquisar" value="Pesquisar" />
            </div>
            {emprestimos.map((emprestimos) => {
                return (
                    <div className="livrosConteudo">
                        <Emprestimo imgLivro={emprestimos.livro_img} 
                        nomeCliente={emprestimos.nome_cliente} 
                        nomeLivro={emprestimos.nome_livro} 
                        tempo={emprestimos.tempo_emprestimo}
                        nomeFunc={emprestimos.nome_func}></Emprestimo>
                    </div>
                )
            })}
        </div>
    );
}


export default GerenciarEmprestimo;