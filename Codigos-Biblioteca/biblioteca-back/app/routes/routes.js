const {listarEmprestimo, postEmprestimo, listarProcuraEmprestimo} = require('../controllers/emprestimo');
const {listarFuncionarios, listarProcuraFuncionario} = require('../controllers/funcionario');
const {listarLivro, listarProcuraLivro} = require('../controllers/livros');
const {listarClientes, listarProcuraCliente} = require('../controllers/clientes');
const {Logar, getLogar, getLogout} =  require('../controllers/login');
const {postCliente} = require('../controllers/cadastroCliente');
const {postLivro} = require ('../controllers/cadastroLivro');
const {postFunc} = require ('../controllers/cadastroFunc');
const {editLivro} = require ('../controllers/editLivro');
const {deleteLivro} = require ('../controllers/deleteLivro');
const {editFuncionario} = require ('../controllers/editFuncionario');
const {deleteFuncionario} = require ('../controllers/deleteFuncionario');
const {editCliente} = require ('../controllers/editCliente');
const {deleteCliente} = require ('../controllers/deleteCliente');
const {deleteEmprestimo} = require ('../controllers/deleteEmprestimo');

module.exports = {
    livros: function(app){
        app.get('/livros', function(req,res){
            listarLivro(app, req, res);
        });
        app.post('/livrosProcura', function(req,res){
            listarProcuraLivro(app, req, res);
        });
    },
    funcionario: function(app){
        app.get('/funcionario', function(req,res){
            listarFuncionarios(app, req, res);
        });
        app.post('/funcionarioProcura', function(req,res){
            listarProcuraFuncionario(app, req, res);
        });
    },
    emprestimo: function(app){
        app.get('/emprestimo', function(req,res){
            listarEmprestimo(app, req, res);
        });
        app.post('/emprestimo',(req, res)=>{
            postEmprestimo(app, req, res);
        });
        app.post('/emprestimoProcura',(req, res)=>{
            listarProcuraEmprestimo(app, req, res);
        });
    },
    clientes: function(app){
        app.get('/clientes', function(req,res){
            listarClientes(app, req, res);
        });
        app.post('/clientesProcura', function(req,res){
            listarProcuraCliente(app, req, res);
        });
    },
    login: function(app){
        app.post('/login', function(req,res){
            Logar(app, req, res);
        });
        app.get('/getLogin', function(req,res){
            getLogar(app, req, res);
        });
        app.get('/getLogout', function(req,res){
            getLogout(app, req, res);
        });
    },
    cadastrarCliente: function(app){
        app.post('/cadastroCliente', function(req,res){
            postCliente(app,req,res);
        })
    },
    cadastrarLivro: function(app){
        app.post('/cadastroLivro', function(req,res){
            postLivro(app,req,res);
        })
    },
    cadastrarFunc: function(app){
        app.post('/cadastroFunc', function(req,res){
            postFunc(app,req,res);
        })
    },
    editaLivro: function(app){
        app.post('/editaLivro', function(req,res){
            editLivro(app,req,res);
        })
    },
     deleteLivro: function(app){
        app.post('/deletaLivro', function(req,res){
            deleteLivro(app,req,res);
        })
    },
    editaFuncionario: function(app){
        app.post('/editaFuncionario', function(req,res){
            editFuncionario(app,req,res);
        })
    },
    deleteFuncionario: function(app){
        app.post('/deletaFuncionario', function(req,res){
            deleteFuncionario(app,req,res);
        })
    },
    editaCliente: function(app){
        app.post('/editaCliente', function(req,res){
            editCliente(app,req,res);
        })
    },
    deleteCliente: function(app){
        app.post('/deletaCliente', function(req,res){
            deleteCliente(app,req,res);
        })
    },
    deleteEmprestimo: function(app){
        app.post('/deletaEmprestimo', function(req,res){
            deleteEmprestimo(app,req,res);
        })
    }
}