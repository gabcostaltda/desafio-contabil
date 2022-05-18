const { DataTypes } = require("sequelize");
const db = require("../../db");

module.exports = db.define("ContaBancaria", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  banco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  conta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  agencia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  saldo: {
    type: DataTypes.DECIMAL,
    allowNull: true
  }
});

