const { Router } = require("express");
const router = new Router();
const User = require("./model");
const bcrypt = require("bcrypt");

router.get("/user", (req, res, next) =>
  User.findAll()
    .then(result => res.json(result))
    .catch(err => next(err))
);

router.post("/user", (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    points: 0
  };
  User.create(user)
    .then(user => res.json(user))
    .then(user)
    .catch(err => next(err));
});

module.exports = router;
