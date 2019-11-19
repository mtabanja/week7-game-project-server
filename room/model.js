const Sequelize = require("sequelize");
const sequelize = require("../db");
const User = require("../user/model");

const Room = sequelize.define(
  "room",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

User.belongsTo(Room);
Room.hasMany(User);

module.exports = Room;
