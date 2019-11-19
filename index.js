const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const corsMiddleware = cors();
const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
const userRouter = require("./user/router");
const authrouter = require("./auth/router");
const Sse = require("json-sse");
const Room = require("./room/model");
const roomFactory = require("./room/router");
const User = require("./user/model");

app.use(corsMiddleware);

const stream = new Sse();

const roomRouter = roomFactory(stream);

app.get("/stream", async (req, res) => {
  // get all the rooms from the database
  const rooms = await Room.findAll({ include: [User] });

  // serialize the list of rooms
  const string = JSON.stringify({
    type: "ROOMS",
    payload: rooms
  });

  // pass the string to stream.updateInit
  stream.updateInit(string);

  stream.init(req, res);

  // Room
  //   .findAll()
  //   .then(rooms => {
  //     const string = JSON.stringify(rooms)

  //     stream.updateInit(string)

  //     stream.init(req, res)
  //   })
});

app.use(parserMiddleware);
app.use(userRouter);
app.use(authrouter);
app.use(roomRouter);
app.listen(port, () => console.log(`App Available on port ${port}!`));
