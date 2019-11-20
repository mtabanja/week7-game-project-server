const Sequelize = require("sequelize");
const sequelize = require("../db");
const Answers = require("./answerModel");

const Questions = sequelize.define(
  "question",
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

Answers.belongsTo(Questions);
Questions.hasMany(Answers);

module.exports = Questions;
