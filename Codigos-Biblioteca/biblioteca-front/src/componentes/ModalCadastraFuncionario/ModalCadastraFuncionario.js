import React, { useState } from 'react';
import './ModalCadastraFuncionario.css';
import axios from 'axios';

const Modal = () => {
  const [show, setShow] = useState(false);

  const [campos, setCampos] = useState({
    "email_func": "",
    "senha": 0,
    "tipo_func": 1,
    "nome_func": "",
    "img_func": "https://aulalivre.net/uploads/disciplines/icons/filosofia.png"
  });

  function onFieldChange(event) {
    campos[event.target.id] = event.target.value;
    console.log(campos);
    setCampos(campos);
  };

  const onSubmitFunc = (event) => {
    event.preventDefault();
    if (campos.nome_func != "" && campos.senha != "" && campos.tipo_func != "" && campos.email_func != "") {
      if(campos.nome_func.length <= 50 && campos.nome_func.length >= 5){
        if(campos.email_func.length <= 50 && campos.email_func.length >= 10){
          if(campos.senha.length <= 8 && campos.senha.length >= 5){
            axios.post('http://localhost:4000/cadastroFunc', campos)
              .then((response) => {
                console.log(response.data);
                alert("Funcionario Cadastrado!");
                window.location.reload();
              })
              .catch((erro) => {
                console.log(erro);
                alert("Erro");
              });
              
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
          <div className="modal-card-func">
            <h1>Cadastro Funcionário</h1>
            <table class="center">
              <tr class="spaceUnder">
                  <td>Nome do Funcionário:</td>
                  <td><input onChange={onFieldChange} type="text" id="nome_func" placeholder="Nome do Funcionario" /></td>
              </tr>
              <tr class="spaceUnder">
                <td>Email:</td>
                <td><input onChange={onFieldChange} type="text" id="email_func" placeholder="Email" /></td>
              </tr>
              <tr class="spaceUnder">
                <td>Senha:</td>
                <td><input onChange={onFieldChange} type="password" id="senha" placeholder="Senha" /></td>
              </tr>
              <tr class="spaceUnder">
                <td>Cargo</td>
                <td><select onChange={onFieldChange} id="tipo_func">
                  <option value="1">Gerente</option>
                  <option value="2">Funcionario</option>
                </select></td>
              </tr>
            </table>
            <button class="buttonModalLivro" id="btnCadastroFunc" onClick={onSubmitFunc}>Cadastrar</button>
            <button class="buttonModalLivro" id="btnCadastroFunc" onClick={handleModalClose}>Cancelar</button>
          </div>
        </div>
      </div>
      <button className="button" onClick={handleModalOpen}>Cadastra Funcionário</button>
    </div>
  );
};
export default Modal;