const User = require('./User');
const Link = require('./Link');
// const Page = require('./Pages');

User.hasMany(Link, {
    foreignKey: 'username',
    onDelete: 'CASCADE',
});

Link.belongsTo(User, {
    foreignKey: 'username',
    // onDelete: 'CASCADE',
});
// Page.hasMany(Link, { foreignKey: 'page_id' });
// Link.belongsTo(Page, {
//     foreignKey: 'page_id',
// });

module.exports = { User, Link };
