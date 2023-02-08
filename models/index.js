const User = require("./User");

const Page = require("./Pages");

User.hasMany(Page, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Page.belongsTo(User, {
  foreignKey: "Page_id",
  onDELETE: "CASCADE",
});

module.exports = { User, Page };
