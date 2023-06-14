// configurar ORM sequelize
const Sequelize = require("sequelize");
// const sequelize = new Sequelize("sqlite:" + process.env.base);
const sequelize = new Sequelize({dialect: 'sqlite', storage: 'C:/Users/Pedro Placci/Desktop/Practica Local DDS Parcial/Simulacro/Simulacro3K2-base/Simulacro3K2-base/api-backend-pap/.data/databaseFile.db'})
const Player = require('./player.model.js')
sequelize.define('Player', Player, {timestamps: false})

sequelize.sync()
// const prueba = async () => {
//   const data = await sequelize.models.Player.findAll();
//   console.log(data);
// }
// prueba();
module.exports = {
  sequelize
};
