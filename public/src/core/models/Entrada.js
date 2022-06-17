const TipoDeTransacao = require("../enum/TipoDeTransacao");

module.exports = (sequelize, DataTypes) => {
  let Entrada = sequelize.define(
    "entrada",
    {
      valor: DataTypes.DECIMAL,
      data: DataTypes.DATE,
      transacao: DataTypes.ENUM(TipoDeTransacao.chaves),
    },
    {
      tableName: "entrada",
    }
  );

  Entrada.associate = (models) => {
    Entrada.belongsTo(models.conta_bancaria, {
      constraints: true,
      foreignKey: "conta_bancaria_id",
    });
  };

  return Entrada;
};
