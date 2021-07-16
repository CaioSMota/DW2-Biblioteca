import React, { useState } from 'react';
import './ModalEditaLivro.css';
import axios from 'axios';


const Modal = (props) => {
const [show, setShow] = useState(false);

    const [campos, setCampos] = useState({
    "id_livro": props.idLivro,
    "nome_livro": props.nomeLivro,
    "qtd_livro":props.qtdLivros,
    "autor": props.autor,
    "n_pages": props.paginas,
    "livro_img": props.img
  });
  
  function onFieldChange(event) {
    event.preventDefault();
    campos[event.target.id] = event.target.value;
    console.log(campos);
    setCampos(campos);
  };

  const onEditLivro = (event) => {
    event.preventDefault();
    if (campos.nome_livro != "" && campos.qtd_livro != 0 && campos.autor != "" && campos.n_pages != 0) {
      if(campos.nome_livro.length <= 50 && campos.nome_livro.length >= 5){
        if(campos.autor.length <= 50 && campos.autor.length >= 5){
          if(!isNaN(campos.n_pages)){
            if(!isNaN(campos.qtd_livro)){
              axios.post('http://localhost:4000/editaLivro', campos)
                .then((response) => {
                  console.log(response.data);
                  alert("Livro Editado!");
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

  const onDeleteLivro = (event) => {
    event.preventDefault();
    
      axios.post('http://localhost:4000/deletaLivro', campos)
        .then((response) => {
          console.log(response.data);
          alert("Livro Deletado!");
          window.location.reload();
        })
        .catch((erro) => {
          console.log(erro);
          alert("Erro");
        });

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
          <div className="modal-card-editaLivro">
            <h1>Gerencia Livro</h1>
            <table class="center">
              <tr>
                  <td>ID do Livro:</td><td><input type="text" id="idLivro"  value= {props.idLivro} disabled/></td>
              </tr>
              <tr>
                  <td>Nome do Livro:</td><td><input type="text" id="nome_livro" placeholder= {props.nomeLivro} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>Autor do Livro:</td><td><input type="text" id="autor" placeholder= {props.autor} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>Num Paginas:</td><td><input type="text" id="n_pages" placeholder={props.paginas} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>Qtd Livros:</td><td><input type="text" id="qtd_livro" placeholder={props.qtdLivros} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>Imagem Livro:</td><td><input type="text" id="livro_img" placeholder={props.img} onChange={onFieldChange} /></td>
              </tr>
            </table><br/>
            <button class="buttonModalLivro" id="btnEditaLivro" onClick={onEditLivro}>Editar</button>
            <button class="buttonModalLivro" id="btnEditaLivro" onClick={onDeleteLivro}>Deletar</button>
            <button class="buttonModalLivro" id="btnEditaLivro" onClick={handleModalClose}>Cancelar</button>
          </div>
        </div>
      </div>
      <button className="button" onClick={handleModalOpen}>Gerenciar</button>
    </div>
  );
};

export default Modal;