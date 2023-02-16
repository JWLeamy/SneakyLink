const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        /* twitter: {
            type: DataTypes.STRING,
            references: {
              model: "link",
              key: "username",
              type: "twitter",
            },
        },
        instagram: {
            type: DataTypes.STRING,
            references: {
              model: "link",
              key: "username",
              type: "instagram",
            },
        },
        tiktok: {
            type: DataTypes.STRING,
            references: {
              model: "link",
              key: "username",
              type: "tiktok",
            },
        },
        youtube: {
            type: DataTypes.STRING,
            references: {
              model: "link",
              key: "username",
              type: "youtube",
            },
        },
        facebook: {
            type: DataTypes.STRING,
            references: {
              model: "link",
              key: "username",
              type: "facebook",
            },
        },
        snapchat: {
            type: DataTypes.STRING,
            references: {
              model: "link",
              key: "username",
              type: "snapchat",
            },
        }
           */
    },
    //add bio
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(
                    newUserData.password,
                    10
                );
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
