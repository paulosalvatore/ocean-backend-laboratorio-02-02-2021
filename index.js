const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 3000;

/*
Create, Read (All/Single), Update & Delete
Criar, Ler (Tudo ou Individual), Atualizar e Remover
*/

const mensagens = [
  "Primeira mensagem",
  "Segunda mensagem"
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ler Tudo (Read All)
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
});

// Criar (Create)
app.post('/mensagens', (req, res) => {
  res.send(req.body.texto);
});

app.listen(port, () => {
  console.info('Servidor rodando em http://localhost:' + port);
});
