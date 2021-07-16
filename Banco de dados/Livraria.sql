DROP DATABASE livraria;
CREATE DATABASE livraria;

USE livraria;

CREATE TABLE livros(
id_livro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_livro VARCHAR(50) NOT NULL,
qtd_livro INT NOT NULL,
autor VARCHAR(50) NOT NULL,
n_pages INT NOT NULL,
livro_img VARCHAR(200) NOT NULL
);

CREATE TABLE funcionario(
id_func INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
email_func VARCHAR(50) NOT NULL UNIQUE,
senha VARCHAR(8) NOT NULL,
tipo_func INT NOT NULL,
nome_func VARCHAR(50) NOT NULL,
img_func VARCHAR(200) NOT NULL
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cpf VARCHAR(11) NOT NULL UNIQUE,
nome_cliente VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL
);

CREATE TABLE emprestimo(
id_emprestimo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_livro INT NOT NULL,
id_cliente INT NOT NULL,
id_func INT NOT NULL,
tempo_emprestimo INT NOT NULL,
CONSTRAINT FK_Livros FOREIGN KEY (id_livro) REFERENCES livros(id_livro) ON DELETE CASCADE,
CONSTRAINT FK_Clientes FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente) ON DELETE CASCADE,
CONSTRAINT FK_Func FOREIGN KEY (id_func) REFERENCES funcionario(id_func) ON DELETE CASCADE
);

INSERT INTO livros(nome_livro, qtd_livro, autor, n_pages, livro_img) VALUES ("Mitologia Nórdica", 10, "Neil Gaiman", 288, "https://images-na.ssl-images-amazon.com/images/I/51xkKWPnIcL._SX332_BO1,204,203,200_.jpg");
INSERT INTO livros(nome_livro, qtd_livro, autor, n_pages, livro_img) VALUES ("O Homem de Giz", 15, "C. J. Tudor", 272, "https://images-na.ssl-images-amazon.com/images/I/41rJPazVO5L._SX258_BO1,204,203,200_.jpg");
INSERT INTO livros(nome_livro, qtd_livro, autor, n_pages, livro_img) VALUES ("Mindset ", 3, "Carol S. Dweck", 312, "https://images-na.ssl-images-amazon.com/images/I/41cCK9HS6VL._SX346_BO1,204,203,200_.jpg");
INSERT INTO livros(nome_livro, qtd_livro, autor, n_pages, livro_img) VALUES ("Extraordinário", 2,"R. J. Palacio", 320, "https://images-na.ssl-images-amazon.com/images/I/41l4Kj-A13L._SX346_BO1,204,203,200_.jpg");
INSERT INTO livros(nome_livro, qtd_livro, autor, n_pages, livro_img) VALUES ("Mentirosos", 7,"E. Lockhart ", 272, "https://images-na.ssl-images-amazon.com/images/I/41CntX16eWL._SX332_BO1,204,203,200_.jpg");

INSERT INTO funcionario(email_func, senha, tipo_func, nome_func, img_func) VALUES ("joao@yahoo.com", "123456", 2, "João Pedro", "https://aulalivre.net/uploads/disciplines/icons/filosofia.png");
INSERT INTO funcionario(email_func, senha, tipo_func, nome_func, img_func) VALUES ("maria@yahoo.com", "654321", 1, "Maria da Silva", "https://aulalivre.net/uploads/disciplines/icons/filosofia.png");

INSERT INTO cliente(cpf, nome_cliente, email) VALUES ("88877766624", "Natalia Bravo", "natzinhadograu@yahoo.com");
INSERT INTO cliente(cpf, nome_cliente, email) VALUES ("12345678901", "Gabriel Baron", "baronzinho123@yahoo.com");

INSERT INTO emprestimo(id_livro, id_cliente, id_func, tempo_emprestimo) VALUES (4, 1, 1, 14);
INSERT INTO emprestimo(id_livro, id_cliente, id_func, tempo_emprestimo) VALUES (2, 2, 1, 21);


Select * from emprestimo;
SELECT * FROM funcionario;
SELECT * FROM livros;
SELECT * FROM cliente;

SELECT id_emprestimo,livro_img,nome_livro, nome_cliente, nome_func, tempo_emprestimo FROM emprestimo
INNER JOIN livros ON  livros.id_livro = emprestimo.id_livro
INNER JOIN cliente ON  cliente.id_cliente = emprestimo.id_cliente
INNER JOIN funcionario ON  funcionario.id_func = emprestimo.id_func
WHERE nome_cliente LIKE '%null%' OR nome_livro LIKE '%Extraordinário%'; 

SELECT * FROM livros WHERE nome_livro LIKE '%O homem%' ;
