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
                        <li><NavLink to="/novoEmprestimo"><button>Novo Emprestimo</button></NavLink></li>
                        <li><NavLink to="/gerenciarLivros"><button>Gerenciar Livros</button></NavLink></li>
                        <li><NavLink to="/gerenciarFuncionario"><button>Gerenciar Funcionarios</button></NavLink></li>
                        <li><NavLink to="/gerenciarEmprestimo"><button>Gerenciar Emprestimo</button></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;