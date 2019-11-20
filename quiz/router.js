const { Router } = require("express");
const router = new Router();
const Questions = require("./questionModel");
const Answers = require("./answerModel");
const User = require("../user/model");

router.get("/questions", (req, res, next) =>
  Questions.findAll({ include: [Answers] })
    .then(result => res.json(result))
    .catch(err => next(err))
);

router.put("/points/:userId", async (req, res, next) => {
  const { userId } = req.params;

  const user = await User.findByPk(userId);

  const updated = await user.update({ points: 1 });

  // const rooms = await Room
  //   .findAll({ include: [User] })

  // const action = {
  //   type: 'ROOMS',
  //   payload: rooms
  // }

  // const string = JSON
  //   .stringify(action)

  // stream.send(string)
  console.log("updated testinggg:", updated);
  res.send(updated);
});

module.exports = router;
