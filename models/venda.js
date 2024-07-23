const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Atualize o caminho se necessário

const Venda = sequelize.define('Venda', {
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  preco_venda: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  data_venda: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true
  }
}, {
  timestamps: false,  // Desativa as colunas createdAt e updatedAt
  tableName: 'Vendas'  // Define o nome da tabela
});

module.exports = Venda;
