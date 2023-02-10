const User = require("./User");
const Link = require("./links");
const Page = require("./Pages");

User.hasMany(Page, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Page.belongsTo(User, {
  foreignKey: "user_id",
  // onDelete: 'CASCADE',
});

Page.hasMany(Link, {
    foreignKey:"user_id"
});

module.exports = { User, Page, Link };
