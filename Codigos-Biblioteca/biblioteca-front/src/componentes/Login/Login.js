import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {

    const [campos, setCampos] = useState({
        usuario: "",
        senha: ""
    });

    function onFieldChange (event) {
        campos[event.target.id] = event.target.value;
        setCampos(campos);
        console.log(campos);
    };

    const onSubmitLogin = (event) =>{
        event.preventDefault();
        if(campos.usuario != "" && campos.senha != ""){
        axios.post('http://localhost:4000/login', campos)
        .then((response)=>{
            if(response.data != 0){
                window.location.assign("/");
            }else{
                alert("Usuario ou senha incorretos");
            }
        })
        .catch((erro)=>{
            console.log(erro);
        });
    }else{
        alert("Campos em branco");
    }};

    return (
        <div className="login">
        <h1>LOGIN</h1>
        <form onSubmit={onSubmitLogin}>
            <table id="tabLogin">
                <tr>
                    <td>Usuario:</td>
                    <td><input type="text" onChange={onFieldChange} id="usuario"/></td>
                </tr> 
                <tr>
                    <td>Senha:</td>
                    <td><input type="password"  onChange={onFieldChange} id="senha"/></td>
                    </tr>
            </table>
            <input type="submit"  name="enviar" id="botaoLogin" value="Entrar"/>  
        </form>          
        </div>
    );
}

export default Login;