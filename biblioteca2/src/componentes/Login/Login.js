import React from 'react';
import Footer from '../Footer/Footer';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
        <h1>LOGIN</h1>
            <table id="tabLogin">
                <tr>
                    <td>Usuario:</td>
                    <td><input type="text" id="emailAuth"/></td>
                </tr> 
                <tr>
                    <td>Senha:</td>
                    <td><input type="password" id="senhaAuth"/></td>
                    </tr>
            </table>
            <input type="submit" name="enviar" id="botao" value="Entrar"/>            
        </div>
    );
}

export default Login;