import './GerenciarLivros.css';
import ImgLivro1 from '../../imagens/l1.jpg';
import Livros from './Livros.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyModal from "../ModalCadastraLivro/ModalCadastraLivro";

const GerenciarLivros = (props) => {
    const [livros, setLivros] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {  
        axios.get('http://localhost:4000/livros')
        .then((response) => {
            setLivros(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const [campos, setCampos] = useState({
        nome_livro: ""  
    });

    function onFieldChange(event) {
        event.preventDefault();
        campos[event.target.id] = event.target.value;
        console.log(campos);
        setCampos(campos);
  };

    const pesquisarLivro= (e) =>{
        e.preventDefault();
        if(campos.nome_cliente != ""){
        axios.post('http://localhost:4000/livrosProcura', campos)
        .then((response)=>{
            if(response.data != 0){
                setLivros(response.data);
            }else{
                alert("Livro não encontrado!");
            }
        })
        .catch((erro)=>{
            console.log(erro);
        });
    }else{
        window.location.reload();
    }};

    return (
        <div className="listalivros">
            <div className="gerenciamentoLivros">
                <MyModal></MyModal>
                <input type="text" id="nome_livro" placeholder="Pesquisar..." onChange={onFieldChange}/>
                <input type="submit" name="pesquisar" id="botaoPesquisarLivro" value="Buscar" onClick={pesquisarLivro} />
            </div>
            {livros.map((livro)=>{
                return (
                    <div className="livrosConteudo">
                        <Livros imgLivro={livro.livro_img} nomeLivro={livro.nome_livro} autor={livro.autor} idLivro={livro.id_livro} quantidade={livro.qtd_livro} paginas={livro.n_pages} ></Livros>
                    </div>
                )
            })}

        </div>
    );
}

export default GerenciarLivros;