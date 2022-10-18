const seq = require('../config/db');

const { DataTypes } = require('sequelize');

const chatSchema = seq.define('chatSchema', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    message: {
        allowNull: false,
        type: DataTypes.STRING
    }
})

module.exports = chatSchema