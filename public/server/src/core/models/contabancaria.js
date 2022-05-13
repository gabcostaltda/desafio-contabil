'use strict';
const {Model} = require('sequelize');
export default (sequelize, DataTypes) => {
    class ContaBancaria extends Model {
        static associate(models) {
            // define association here
        }
    }

    ContaBancaria.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        banco: {
            type: DataTypes.STRING
        },
        conta: {
            type: DataTypes.STRING
        },
        agencia: {
            type: DataTypes.STRING
        },
        saldo: {
            type: DataTypes.NUMBER,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'ContaBancaria',
    });
    return ContaBancaria;
};