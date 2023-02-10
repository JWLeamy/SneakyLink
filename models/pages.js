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
        url_1: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING,
            references: {
                model: 'User',
                key: 'username',
            },
        },

        // url_2: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

        // url_3: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

        // url_4: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

        // url_5: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

        // url_6: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
    },

    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'Pages',
    }
);

module.exports = Page;
