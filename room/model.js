const Sequelize = require("sequelize");
const sequelize = require("../db");

const Room = sequelize.define("room", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Room;
