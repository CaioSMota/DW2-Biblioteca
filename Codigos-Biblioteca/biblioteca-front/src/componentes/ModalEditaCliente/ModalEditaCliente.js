import React, { useState } from 'react';
import './ModalEditaCliente.css';
import axios from 'axios';


const Modal = (props) => {
  const [show, setShow] = useState(false);

  const [campos, setCampos] = useState({
    "id_cliente": props.idCliente,
    "cpf": props.cpfCliente,
    "nome_cliente": props.nomeCliente,
    "email": props.emailCliente
  });
  
  function onFieldChange(event) {
    event.preventDefault();
    campos[event.target.id] = event.target.value;
    console.log(campos);
    setCampos(campos);
  };

  const onEditCliente = (event) => {
    event.preventDefault();
    if (campos.cpf != 0 && campos.nome_cliente != "" && campos.email != "") {
      if(campos.cpf.length <= 11 ){
        if(campos.nome_cliente.length <= 50 && campos.nome_cliente.length >= 5){
          if(campos.email.length <= 50 && campos.email.length >= 10){
            axios.post('http://localhost:4000/editaCliente', campos)
              .then((response) => {
                console.log(response.data);
                alert("Cliente Editado!");
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
      alert("Campos obrigatorios em branco");
    }

  }

  const onDeleteCliente = (event) => {
    event.preventDefault();
    
      axios.post('http://localhost:4000/deletaCliente', campos)
        .then((response) => {
          console.log(response.data);
          alert("Cliente Deletado!");
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
          <div className="modal-card-edit-cliente">
            <h1>Gerencia Cliente</h1>
            <table class="center">
              <tr>
                  <td>ID do Cliente:</td><td><input type="text" id="id_cliente"  value= {props.idCliente} disabled/></td>
              </tr><tr>
                  <td>Nome do Cliente:</td><td><input type="text" id="nome_cliente" placeholder= {props.nomeCliente} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>Email:</td><td><input type="text" id="email" placeholder= {props.emailCliente} onChange={onFieldChange}/></td>
              </tr><tr>
                <td>CPF:</td><td><input type="text" id="cpf" placeholder={props.cpfCliente} onChange={onFieldChange}/></td>
              </tr>
            </table><br/>
            <button id="btnModal" class="buttonModalLivro" onClick={onEditCliente}>Editar</button>
            <button id="btnModal" class="buttonModalLivro" onClick={onDeleteCliente}>Deletar</button>
            <button id="btnModal" class="buttonModalLivro" onClick={handleModalClose}>Cancelar</button>
          </div>
        </div>
      </div>
      <button id="buttonGerenciar" class="buttonModalLivro" onClick={handleModalOpen}>Gerenciar</button>
    </div>
  );
};

export default Modal;