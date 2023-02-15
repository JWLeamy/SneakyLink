const sequelize = require('../config/connection');
const { User, Link } = require('../models');

const userData = require('./userData.json');
const linkData = require('./linkData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Link.bulkCreate(linkData);

    process.exit(0);
};

seedDatabase();
