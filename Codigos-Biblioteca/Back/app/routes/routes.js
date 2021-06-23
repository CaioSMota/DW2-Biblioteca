const {listarEmprestimo, postEmprestimo} = require('../controllers/emprestimo');
const {listarFuncionarios} = require('../controllers/funcionario');
const {listarLivro} = require('../controllers/livros');
const {listarClientes} = require('../controllers/clientes');


module.exports = {
    livros: function(app){
        app.get('/livros', function(req,res){
            listarLivro(app, req, res);
        });
    },
    funcionario: function(app){
        app.get('/funcionario', function(req,res){
            listarFuncionarios(app, req, res);
        });
    },
    emprestimo: function(app){
        app.get('/emprestimo', function(req,res){
            listarEmprestimo(app, req, res);
        });
        app.post('/emprestimo',(req, res)=>{
            postEmprestimo(app, req, res);
        });
    },
    clientes: function(app){
        app.get('/clientes', function(req,res){
            listarClientes(app, req, res);
        });
    }
}