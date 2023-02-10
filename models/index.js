const User = require("./User");
const Link = require("./links");
const Page = require("./Pages");

User.hasMany(Page, {
  foreignKey: "username",
  onDelete: "CASCADE",
});

Page.belongsTo(User, {
  foreignKey: "username",
  // onDelete: 'CASCADE',
});

Page.hasMany(Link, {
  foreignKey: "username",
});

module.exports = { User, Page, Link };
