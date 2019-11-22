const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    points: {
      type: Sequelize.INTEGER
    },
    ready: Sequelize.BOOLEAN
  },
  { timestamps: false }
);

module.exports = User;
