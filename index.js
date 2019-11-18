const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const corsMiddleware = cors();
const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
const userRouter = require("./user/router");
const authrouter = require("./auth/router");

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(userRouter);
app.use(authrouter);
app.listen(port, () => console.log(`App Available on port ${port}!`));
