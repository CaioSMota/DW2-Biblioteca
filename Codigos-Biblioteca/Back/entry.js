const Joi = require('joi');
const app = require('./config/server');
const routes = require('./app/routes/routes');


app.listen(app.get('port'), () => console.log(`Rodando na porta ${app.get('port')}`));

routes.livros(app);
routes.funcionario(app);
routes.emprestimo(app);
routes.clientes(app);