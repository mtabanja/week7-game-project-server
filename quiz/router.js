const { Router } = require("express");
const router = new Router();
const Questions = require("./questionModel");
const Answers = require("./answerModel");

router.get("/questions", (req, res, next) =>
  Questions.findAll({ include: [Answers] })
    .then(result => res.json(result))
    .catch(err => next(err))
);

module.exports = router;
