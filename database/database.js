const Sequelize = require("sequelize");

const connection = new Sequelize('meuportifolio', 'root', '835247', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;