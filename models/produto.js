const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Atualize o caminho conforme necessário

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  data_cadastro: {
    type: DataTypes.DATE,  // Use DATE em vez de TIMESTAMP
    defaultValue: DataTypes.NOW,
    allowNull: true
  }
}, {
  timestamps: false,  // Desativa as colunas createdAt e updatedAt
  tableName: 'Produtos'  // Define o nome da tabela
});

module.exports = Produto;
