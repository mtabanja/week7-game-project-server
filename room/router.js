const express = require("express");
const { Router } = express;
const Room = require("./model");

function roomFactory(stream) {
  const router = new Router();

  router.post("/room", (req, res) => {
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

  return router;
}

module.exports = roomFactory;
