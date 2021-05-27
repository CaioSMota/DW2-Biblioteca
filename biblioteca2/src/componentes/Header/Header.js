import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import imgHeader from '../../imagens/livro.png';

const Header = () => {
    return (
        <header>
            <div className="header">
                <nav>
                    <ul>
                        <img src={imgHeader}/>
                        <a>Livraria de Livros</a>
                        <li><NavLink to="/"><button>Home</button></NavLink></li>
                        <li><NavLink to="/sobre"><button>Sobre</button></NavLink></li>
                        <li><NavLink to="/login"><button>Login</button></NavLink></li>
                        <li><NavLink to="/novoEmprestimo"><button>Novo Empréstimo</button></NavLink></li>
                        <li><NavLink to="/gerenciarLivros"><button>Gerenciar Livros</button></NavLink></li>
                        <li><NavLink to="/gerenciarFuncionario"><button>Gerenciar Funcionários</button></NavLink></li>
                        <li><NavLink to="/gerenciarEmprestimo"><button>Gerenciar Empréstimo</button></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;