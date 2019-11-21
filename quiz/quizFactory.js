const { Router } = require("express");
const auth = require("../auth/middleware");
const Room = require("../room/model");
const User = require("../user/model");

function quizFactory(stream) {
  const router = new Router();

  router.put("/points", auth, async (req, res, next) => {
    const { user } = req;
    console.log("what is req.user?", req.user);
    if (!user) {
      return next("no user found");
    }

    // const user = await User.findByPk(userId);
    try {
      const updated = await user.increment(["points"], { by: 1 });

      const rooms = await Room.findAll({ include: [User] });

      const action = {
        type: "ROOMS",
        payload: rooms
      };

      const string = JSON.stringify(action);

      stream.send(string);
      res.send(updated);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

module.exports = quizFactory;
