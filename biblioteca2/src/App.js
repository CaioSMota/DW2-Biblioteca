import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './componentes/Header/Header';
import Body from './componentes/Body/Body';
import Login from './componentes/Login/Login';
import NovoEmprestimo from './componentes/NovoEmprestimo/NovoEmprestimo';
import GerenciarLivros from './componentes/GerenciarLivros/GerenciarLivros';
import GerenciarFuncionario from './componentes/GerenciarFuncionario/GerenciarFuncionario';
import GerenciarEmprestimo from './componentes/GerenciarEmprestimo/GerenciarEmprestimo';
import Sobre from './componentes/Sobre/Sobre';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Body></Body>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/sobre" exact>
            <Sobre></Sobre>
          </Route>
           <Route path="/novoEmprestimo" exact>
            <NovoEmprestimo></NovoEmprestimo>
          </Route>
           <Route path="/gerenciarLivros" exact>
            <GerenciarLivros></GerenciarLivros>
          </Route>
          <Route path="/gerenciarFuncionario" exact>
            <GerenciarFuncionario></GerenciarFuncionario>
          </Route>
          <Route path="/gerenciarEmprestimo" exact>
            <GerenciarEmprestimo></GerenciarEmprestimo>
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
