const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Page extends Model {}
//could potentially add a page name
Page.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,
        },
        // title: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // desc: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },

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
