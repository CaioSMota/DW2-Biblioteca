import React from 'react';
import './GerenciarLivros.css';
import MyModal from "../ModalEditaLivro/ModalEditaLivro";

const Livros = ( props ) => {

    return (
        <div className="container">
                <img className="imagemLivro" src={props.imgLivro}/>
            <div className="conteudo">
                <p id="nome">{props.nomeLivro}</p>
                <p>Autor: {props.autor}</p>
                <p>ID: {props.idLivro}</p>
                <p>Quantidade: {props.quantidade}</p>
                <MyModal nomeLivro={props.nomeLivro} autor={props.autor} idLivro={props.idLivro} img={props.imgLivro} qtdLivros={props.quantidade} paginas={props.paginas}></MyModal>
            </div>
        </div>
    );
}

export default Livros;