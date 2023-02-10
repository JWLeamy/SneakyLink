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

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
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
