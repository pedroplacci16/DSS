const Sequelize = require("sequelize")

const Player = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    full_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ip_address: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    avatar: {
        type: Sequelize.STRING
    }
}

module.exports = Player;