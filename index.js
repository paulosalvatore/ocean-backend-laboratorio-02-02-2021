const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/mensagens', (req, res) => {
  res.send('Exibir todas as mensagens.');
});

app.listen(3000, () => {
  console.info('Servidor rodando em http://localhost:3000');
});
