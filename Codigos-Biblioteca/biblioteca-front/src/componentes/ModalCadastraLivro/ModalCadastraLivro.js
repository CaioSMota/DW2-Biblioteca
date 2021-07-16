import React, { useState } from 'react';
import './ModalCadastraLivro.css';
import axios from 'axios';

const Modal = () => {
  const [show, setShow] = useState(false);

  const [campos, setCampos] = useState({

    "nome_livro": "",
    "qtd_livro": 0,
    "autor": "",
    "n_pages": 0,
    "livro_img": ""
  });
  
  function onFieldChange(event) {
    campos[event.target.id] = event.target.value;
    console.log(campos);
    setCampos(campos);
  };

  const onSubmitLivro = (event) => {
    event.preventDefault();
    if (campos.nome_livro != "" && campos.qtd_livro != 0 && campos.autor != "" && campos.n_pages != 0) {
      if(campos.nome_livro.length <= 50 && campos.nome_livro.length >= 5){
        if(campos.autor.length <= 50 && campos.autor.length >= 5){
          if(!isNaN(campos.n_pages)){
            if(!isNaN(campos.qtd_livro)){
            axios.post('http://localhost:4000/cadastroLivro', campos)
              .then((response) => {
                console.log(response.data);
                alert("Livro Cadastrado!");
                window.location.reload();
              })
              .catch((erro) => {
                console.log(erro);
                alert("Erro");
              });
            }else{
              alert("O numero de livros devem conter somente numeros");
            }
          }else{
            alert("O numero de paginas devem conter somente numeros");
          }
        }else{
          alert("O autor do livro deve ter mais que 5 letras e menos que 50!");
        }
      }else{
        alert("O nome do livro deve ter mais que 5 caracteres e menos que 50!");
      }
    } else {
      alert("Campos em branco");
    }

  }

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass === 'modal-card') {
      return;
    }

    setShow(false);
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  return (
    <div className="App">
      <div hidden={!show} >
        <div className="modal-background" >
          <div className="modal-card-livro">
            <h1>Cadastro Livro</h1>
            <table class="center">
              <tr class="spaceUnder">
                <td>Nome do Livro:</td>
                <td><input onChange={onFieldChange} type="text" id="nome_livro" placeholder="Nome do Livro" /></td>
              </tr>
              <tr class="spaceUnder">
                <td>Autor do Livro:</td>
                <td><input onChange={onFieldChange} type="text" id="autor" placeholder="Autor do Livro" /></td>
              </tr>
              <tr class="spaceUnder">
                <td>Num Paginas:</td>
                <td><input onChange={onFieldChange} type="text" id="n_pages" placeholder="Num. Paginas" /></td>
              </tr>
              <tr class="spaceUnder">
                <td>Qtd Livros:</td>
                <td><input onChange={onFieldChange} type="text" id="qtd_livro" placeholder="Qtd. Livros" /></td>
              </tr>
              <tr class="spaceUnder">
                <td>Imagem Livro:</td>
                <td><input onChange={onFieldChange} type="text" id="livro_img" placeholder="Link Imagem Livro" /></td>
              </tr>
            </table>
            <button class="buttonModalLivro" id="btnCadastrarLivro" onClick={onSubmitLivro}>Cadastrar</button>
            <button class="buttonModalLivro" id="cancelButton" onClick={handleModalClose}>Cancelar</button>
          </div>
        </div>
      </div>
      <button className="button" onClick={handleModalOpen}>Cadastra Livro</button>
    </div>
  );
};

export default Modal;