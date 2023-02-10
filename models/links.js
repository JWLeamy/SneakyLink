const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Link extends Model {}

Link.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    username: {
      type: DataTypes.STRING,
      references: {
        model: "User",
        key: "username",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: "Link",
  }
);

module.exports = Link;
