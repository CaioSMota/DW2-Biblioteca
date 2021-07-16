import React, { useState } from 'react';
import './ModalEditaFuncionario.css';
import axios from 'axios';

const Modal = (props) => {
  const [show, setShow] = useState(false);

    const [campos, setCampos] = useState({
    "id_func": props.idFunc,
    "email_func": props.emailFunc,
    "senha": props.senhaFunc,
    "tipo_func": props.cargoFunc,
    "nome_func": props.nomeFunc,
    "img_func": "https://aulalivre.net/uploads/disciplines/icons/filosofia.png"
  });
  
  function onFieldChange(event) {
    event.preventDefault();
    campos[event.target.id] = event.target.value;
    console.log(campos);
    setCampos(campos);
  };

  const onEditFuncionario = (event) => {
    event.preventDefault();
    if (campos.nome_func != "" && campos.senha != "" && campos.tipo_func != "" && campos.email_func != "") {
      if(campos.nome_func.length <= 50 && campos.nome_func.length >= 5){
        if(campos.email_func.length <= 50 && campos.email_func.length >= 10){
          if(campos.senha.length <= 8 && campos.senha.length >= 5){ 
            if(campos.tipo_func == 1 || campos.tipo_func == 2 ){ 
            axios.post('http://localhost:4000/editaFuncionario', campos)
              .then((response) => {
                console.log(response.data);
                alert("Funcionario Editado!");
                window.location.reload();
              })
              .catch((erro) => {
                console.log(erro);
                alert("Erro");
              });
            }else{
            alert("O cargo do funcionario deve ser 1 para funcionario ou 2 para gerente!");
          }
          }else{
            alert("A senha do funcionario deve ter mais que 5 caracteres e menos que 8!");
          }
        }else{
          alert("O email do funcionario deve ter mais que 10 caracteres e menos que 50!");
        }
      }else{
        alert("O nome do funcionario deve ter mais que 5 caracteres e menos que 50!");
      }
    } else {
      alert("Campos em branco");
    }
  }

  const onDeleteFuncionario = (event) => {
    event.preventDefault();
    
      axios.post('http://localhost:4000/deletaFuncionario', campos)
        .then((response) => {
          console.log(response.data);
          alert("Funcionário Deletado!");
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
          <div className="modal-card-edit-func">
            <h1>Gerencia Funcionário</h1>
            <table class="center">
              <tr>
                  <td>ID do Funcionário:</td><td><input type="text" id="id_func"  value= {props.idFunc} disabled/></td>
              </tr>
              <tr>
                  <td>Nome do Funcionário:</td><td><input type="text" id="nome_func" placeholder= {props.nomeFunc} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>Email:</td><td><input type="text" id="email_func" placeholder= {props.emailFunc} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>Senha:</td><td><input type="text" id="senha" placeholder={props.senhaFunc} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>Cargo:</td><td><input type="text" id="tipo_func" placeholder={props.cargoFunc} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>Imagem Funcionário:</td><td><input type="text" id="img_func" placeholder={props.imgFunc} onChange={onFieldChange}/></td>
              </tr>
            </table>
            <br/>
            <button class="buttonModalLivro" id="btnEditarFunc" onClick={onEditFuncionario}>Editar</button>
            <button class="buttonModalLivro" id="btnEditarFunc" onClick={onDeleteFuncionario}>Deletar</button>
            <button class="buttonModalLivro" id="btnEditarFunc" onClick={handleModalClose}>Cancelar</button>
          </div>
        </div>
      </div>
      <button className="button" onClick={handleModalOpen}>Gerenciar</button>
    </div>
  );
};

export default Modal;