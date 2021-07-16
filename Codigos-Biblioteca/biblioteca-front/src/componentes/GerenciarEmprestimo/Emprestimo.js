import React, { useState } from 'react';
import './GerenciarEmprestimo';
import axios from 'axios';

const Emprestimo = ( props ) => {

    const [campos, setCampos] = useState({
        "id_emprestimo": props.idEmp
  });

    const onDeleteEmprestimo = (event) => {
    event.preventDefault();
    
      axios.post('http://localhost:4000/deletaEmprestimo', campos)
        .then((response) => {
          console.log(response.data);
          alert("Emprestimo Deletado!");
          window.location.reload();
        })
        .catch((erro) => {
          console.log(erro);
          alert("Erro");
        });

  }

    return (
        <div className="container">
            <div >
                <img className="imagemEmprestimo" src={props.imgLivro}/>
            </div>
            <div className="conteudo">
                <p id="nome">{props.nomeCliente}</p>
                <p>Livro: {props.nomeLivro}</p>
                <p>Tempo: {props.tempo} Dias</p>
                <p>Funcionário: {props.nomeFunc}</p>
                <button onClick={onDeleteEmprestimo} class="buttonModalLivro">Deletar</button>
            </div>
        </div>
    );
}

export default Emprestimo;