const User = require('./User');
const Link = require('./links');
const Page = require('./Pages');

User.hasMany(Page, {
    foreignKey: 'username',
    onDelete: 'CASCADE',
});

Page.belongsTo(User, {
    foreignKey: 'username',
    // onDelete: 'CASCADE',
});
Page.hasMany(Link, { foreignKey: 'page_id' });
Link.belongsTo(Page, {
    foreignKey: 'page_id',
});

module.exports = { User, Page, Link };
