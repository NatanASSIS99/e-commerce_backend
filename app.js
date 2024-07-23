// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

// Importar e usar as rotas
const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');
const estoquesRouter = require('./routes/estoques');
const pedidosRouter = require('./routes/pedidos');
const vendasRouter = require('./routes/vendas');

app.use('/api/clientes', clientesRouter);
app.use('/api/produtos', produtosRouter);
app.use('/api/estoques', estoquesRouter);
app.use('/api/pedidos', pedidosRouter);
app.use('/api/vendas', vendasRouter);

// Sincronizar modelos e iniciar o servidor
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => {
  console.error('Erro ao sincronizar os modelos com o banco de dados:', error);
});
