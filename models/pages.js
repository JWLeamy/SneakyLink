const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Page extends Model {}

Page.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        username: {
            type: DataTypes.STRING,
            references: {
                model: 'User',
                key: 'username',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'Pages',
    }
);

module.exports = Page;
