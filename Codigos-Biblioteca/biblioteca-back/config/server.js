let express = require('express'); // O express retorna uma função
var cors = require('cors');

let app = express(); //express é uma função.
let port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.listen(port, function(){
	console.log('Servidor rodando com express na porta', port);
});

module.exports = app;