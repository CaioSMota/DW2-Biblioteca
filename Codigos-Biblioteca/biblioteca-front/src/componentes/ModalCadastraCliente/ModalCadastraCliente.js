import React, { useState } from 'react';
import './ModalCadastraCliente.css';
import axios from 'axios';

const Modal = () => {
  const [show, setShow] = useState(false);

  const [campos, setCampos] = useState({
    "cpf": 0,
    "nome_cliente": "",
    "email": ""
  });

  function onFieldChange(event) {
    campos[event.target.id] = event.target.value;
    console.log(campos);
    setCampos(campos);
  };

  const onSubmitCliente = (event) => {
    event.preventDefault();
    if (campos.cpf != 0 && campos.nome_cliente != "" && campos.email != "") {
      if(campos.cpf.length <= 11 ){
        if(campos.nome_cliente.length <= 50 && campos.nome_cliente.length >= 5){
          if(campos.email.length <= 50 && campos.email.length >= 10){
            axios.post('http://localhost:4000/cadastroCliente', campos)
              .then((response) => {
                console.log(response.data);
                alert("Cliente Cadastrado!");
                window.location.reload();
              })
              .catch((erro) => {
                console.log(erro);
                alert("Erro");
              });
          }else{
            alert("O email do cliente deve ter mais que 10 caracteres e menos que 50!");
          }
        }else{
          alert("O nome do cliente deve ter mais que 5 letra e menos que 50!");
        }
      }else{
        alert("CPF so pode ter 11 caracteres!");
      }
    }else{
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
          <div className="modal-card-cadastro-cliente">
            <h1 class="spaceTop">Cadastro Cliente</h1>
            <table class="center">
              <tr class="spaceUnder">
                <td class="spaceRight">Nome do Cliente:</td>
                <td><input onChange={onFieldChange} type="text" id="nome_cliente" placeholder="Nome do Cliente" /></td>
              </tr>
              <tr class="spaceUnder">
                <td class="spaceRight">Email:</td>
                <td><input onChange={onFieldChange} type="text" id="email" placeholder="Email" /></td>
              </tr>
              <tr class="spaceUnder">
                <td class="spaceRight">CPF:</td>
                <td><input onChange={onFieldChange} type="text" id="cpf" placeholder="CPF" /></td>
              </tr>
            </table>
            <br />
            <button class="buttonModalLivro" id="btnCadCliente"  onClick={onSubmitCliente}>Cadastrar</button>
            <button class="buttonModalLivro" id="btnCadCliente" onClick={handleModalClose}>Cancelar</button>
          </div>
        </div>
      </div>
      <button className="button" onClick={handleModalOpen}>Cadastra Cliente</button>
    </div>
  );
};
export default Modal;