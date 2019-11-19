const express = require("express");
const { Router } = express;
const Room = require("./model");
const auth = require("../auth/middleware");
const User = require("../user/model");

function roomFactory(stream) {
  const router = new Router();

  router.post("/room", auth, (req, res) => {
    Room.create(req.body).then(room => {
      console.log("room", room);
      const data = JSON.stringify({
        type: "ROOM",
        payload: room
      });
      stream.send(data);
      res.send(room);
    });
  });
  // router.get("/rooms", (_request, response, next) => {
  //   Room.findAll()
  //     .then(rooms => response.json(rooms))
  //     .catch(next);
  // });
  // router.put("/join", auth, async (req, res) => {
  //   // console.log("user id", req.user.id);
  //   // const userId = req.user.id;
  //   // const user = await User.findByPk(userId);
  //   const { user } = req;
  //   console.log("user test:", user);
  //   res.send(user);
  // });

  router.put("/join/:name", auth, async (req, res, next) => {
    // console.log("user id", req.user.id);
    // const userId = req.user.id;
    // const user = await User.findByPk(userId);
    const { user } = req;
    if (!user) {
      return next("no user found");
    }
    const { name } = req.params;
    const room = await Room.findOne({
      where: { name }
    });
    //update this user only:
    const updated = await user.update({ roomId: room.id });
    console.log("user test:", updated);
    const rooms = await Room.find({ include: [User] });
    const action = {
      type: "ROOMS",
      payload: rooms
    };
    const string = JSON.stringify(action);

    stream.send(string);
    res.send(room);
  });

  return router;
}

module.exports = roomFactory;
