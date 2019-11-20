const Sequelize = require("sequelize");
const sequelize = require("../db");

const Answers = sequelize.define(
  "answer",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    correct: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = Answers;
