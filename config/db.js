const { Sequelize } = require('sequelize');


const seq = new Sequelize('test_db', 'sa', 'Q@rsche0098', {
    host:'localhost',
    dialect:'mssql'
})

module.exports = seq