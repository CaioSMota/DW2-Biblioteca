const Joi = require('joi');
const app = require('./config/server');
const routes = require('./app/routes/routes');


app.listen(app.get('port'), () => console.log(`Rodando na porta ${app.get('port')}`));

routes.login(app);
routes.livros(app);
routes.funcionario(app);
routes.emprestimo(app);
routes.clientes(app);
routes.cadastrarCliente(app);
routes.cadastrarLivro(app);
routes.cadastrarFunc(app);
routes.editaLivro(app);
routes.deleteLivro(app);
routes.editaFuncionario(app);
routes.deleteFuncionario(app);
routes.editaCliente(app);
routes.deleteCliente(app);
routes.deleteEmprestimo(app);