const User = require('./User');

const Page = require('./Pages');

User.hasMany(Page, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Page.belongsTo(User, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE',
});

module.exports = { User, Page };
