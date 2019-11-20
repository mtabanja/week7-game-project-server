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
  router.put("/join/:name", auth, async (req, res) => {
    const { user } = req;
    if (!user) {
      return next("no user found");
    }
    const { name } = req.params;
    const room = await Room.findOne({
      where: { name }
    });

    const updated = await user.update({ roomId: room.id });
    const rooms = await Room.find({ include: [User] });
    const string = JSON.stringify(action);
    const action = {
      type: "ROOMS",
      payload: rooms
    };
    stream.send(string);

    res.send(updated);
  });

  // router.get("/rooms", (_request, response, next) => {
  //   Room.findAll()
  //     .then(rooms => response.json(rooms))
  //     .catch(next);
  // });

  return router;
}

module.exports = roomFactory;
