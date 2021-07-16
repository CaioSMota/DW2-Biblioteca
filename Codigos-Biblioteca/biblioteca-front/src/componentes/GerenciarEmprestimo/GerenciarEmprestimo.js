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
        axios.post('http://localhost:4000/emprestimoProcura', campos)
        .then((response)=>{
            if(response.data != 0){
                setEmprestimos(response.data);
            }else{
                alert("Emprestimo não encontrado!");
            }
        })
        .catch((erro)=>{
            console.log(erro);
        });
    }else{
        window.location.reload();
    }};

    return (
        <div className="listaEmprestimos">
            <div className="gerenciamentoEmp">
                <input type="text" id="nome_cliente"  placeholder="Pesquisar..." onChange={onFieldChange}/>
                <input type="submit" name="pesquisar" id="botaoPesquisarEmp" value="Buscar" onClick={pesquisarEmprestimos}/>
            </div>
            {emprestimos.map((emprestimos) => {
                return (
                    <div className="livrosConteudo">
                        <Emprestimo imgLivro={emprestimos.livro_img} 
                        idEmp={emprestimos.id_emprestimo} 
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