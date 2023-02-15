const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Link extends Model {}
//could potentially add a page name
Link.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            references: {
                model: 'User',
                key: 'username',
            },
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },

    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'Links',
    }
);

module.exports = Link;
