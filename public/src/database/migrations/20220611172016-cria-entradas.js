"use strict";
const tiposDeTransacao = require("../../core/enum/TipoDeTransacao");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("entrada", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      transacao: {
        type: Sequelize.ENUM(tiposDeTransacao.chaves),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      conta_bancaria_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "conta_bancaria",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("entrada");
  },
};
