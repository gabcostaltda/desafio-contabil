const { entrada } = require("./");
module.exports = (sequelize, DataTypes) => {
  let ContaBancaria = sequelize.define(
    "conta_bancaria",
    {
      banco: DataTypes.STRING,
      conta: DataTypes.STRING,
      agencia: DataTypes.STRING,
      saldo: DataTypes.DECIMAL,
    },
    {
      tableName: "conta_bancaria",
    }
  );
  ContaBancaria.associate = (models) => {
    ContaBancaria.hasMany(models.entrada, {
      foreignKey: "conta_bancaria_id",
    });
  };
  return ContaBancaria;
};
