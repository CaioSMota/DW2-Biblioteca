import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Header.css';
import imgHeader from '../../imagens/livro.png';


const Header = () => {

    const [user, setUser] = useState({tipo_func: ""});
    let test;

    useEffect (() => {
        axios.get('http://localhost:4000/getLogin')
        .then((response) => {
            setUser(response.data[0][0].tipo_func);
            test = response.data[0][0].tipo_func;
        })
        .catch((err) => {
            console.log("Erro ", err);
        })
    }, []);

    const onLogout = (event) => {
        event.preventDefault();

        axios.get('http://localhost:4000/getLogout')
        .then((response) => {
            console.log("Logout Efetuado!");
            window.location.assign('/');
        })
        .catch((err) => {
            console.log("Erro", err);
        })
    }
    
    if(user == 1){
        return (
        <header>
            <div className="header">
                <nav>
                    <ul>
                        <img src={imgHeader}/>
                        <a>Biblioteca de Livraria de Livros</a>
                        <li><NavLink to="/"><button>Home</button></NavLink></li>
                        <li><NavLink to="/sobre"><button>Sobre</button></NavLink></li>
                        <li><NavLink to="/novoEmprestimo"><button>Novo Emprestimo</button></NavLink></li>
                        <li><NavLink to="/gerenciarLivros"><button>Gerenciar Livros</button></NavLink></li>
                        <li><NavLink to="/gerenciarFuncionario"><button>Gerenciar Funcionarios</button></NavLink></li>
                        <li><NavLink to="/gerenciarCliente"><button>Gerenciar Clientes</button></NavLink></li>
                        <li><NavLink to="/gerenciarEmprestimo"><button>Gerenciar Emprestimo</button></NavLink></li>
                        <li><NavLink to=""><button onClick={onLogout}>Logout</button></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
    }else if(user == 2){
        return (
        <header>
            <div className="header">
                <nav>
                    <ul>
                        <img src={imgHeader}/>
                        <a>Biblioteca de Livraria de Livros</a>
                        <li><NavLink to="/"><button>Home</button></NavLink></li>
                        <li><NavLink to="/sobre"><button>Sobre</button></NavLink></li>
                        <li><NavLink to="/novoEmprestimo"><button>Novo Emprestimo</button></NavLink></li>
                        <li><NavLink to="/gerenciarCliente"><button>Gerenciar Clientes</button></NavLink></li>
                        <li><NavLink to="/gerenciarEmprestimo"><button>Gerenciar Emprestimo</button></NavLink></li>
                        <li><NavLink to=""><button onClick={onLogout}>Logout</button></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
    }else{
        return (
        <header>
            <div className="header">
                <nav>
                    <ul>
                        <img src={imgHeader}/>
                        <a>Biblioteca de Livraria de Livros</a>
                        <li><NavLink to="/"><button>Home</button></NavLink></li>
                        <li><NavLink to="/sobre"><button>Sobre</button></NavLink></li>
                        <li><NavLink to="/login"><button>Login</button></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

    }
}

export default Header;