import React from 'react';
import PreLivro from '../PreLivro/PreLivro';
import './Body.css';
import ImgLivro1 from '../../imagens/l1.jpg';
import ImgLivro2 from '../../imagens/l2.jpg';
import ImgLivro3 from '../../imagens/l3.jpg';
import Footer from '../Footer/Footer';

const Body = () => {
    return (
        <div className="ExLivros">
            <div className="livro">
                <PreLivro imgLivro={ImgLivro1} titulo="A Menina que Roubava Livros"></PreLivro>
            </div>
            <div className="livro">
                <PreLivro imgLivro={ImgLivro2} titulo="Harry Potter: Ordem da Fênix"></PreLivro>
            </div>
            <div className="livro">
                <PreLivro imgLivro={ImgLivro3} titulo="Volta ao Mundo em 80 Dias"></PreLivro>
            </div>
        </div>
    );
}

export default Body;