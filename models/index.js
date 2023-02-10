const User = require('./User');

const Page = require('./Pages');

User.hasMany(Page, {
    foreignKey: 'username',
    onDelete: 'CASCADE',
});

Page.belongsTo(User, {
    foreignKey: 'username',
    // onDelete: 'CASCADE',
});

module.exports = { User, Page };
