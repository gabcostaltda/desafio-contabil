"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("conta_bancaria", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      banco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      conta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      saldo: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("conta_bancaria");
  },
};
