import React, { useEffect, useState } from 'react';
import PreLivro from '../PreLivro/PreLivro';
import './Body.css';
import axios from 'axios';

const Body = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {  
        axios.get('http://localhost:4000/livros')
        .then((response) => {
            setLivros(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);


    return (
        <div className="ExLivros">

            {livros.map((livro)=>{
                return (
                    <div className="livro">
                        <PreLivro imgLivro={livro.livro_img} titulo={livro.nome_livro}></PreLivro>
                    </div>
                )
            })}
        </div>
    );
}

export default Body;