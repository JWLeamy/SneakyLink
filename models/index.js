const User = require('./User');
const Link = require('./Link');

User.hasMany(Link, {
    foreignKey: 'username',
    onDelete: 'CASCADE',
});

Link.belongsTo(User, {
    foreignKey: 'username',
});

module.exports = { User, Link };
