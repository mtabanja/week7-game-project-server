const { Router } = require("express");
const router = new Router();
const Questions = require("./questionModel");
const Answers = require("./answerModel");
// const User = require("../user/model");

router.get("/questions", (req, res, next) =>
  Questions.findAll({ include: [Answers] })
    .then(result => res.json(result))
    .catch(err => next(err))
);

router.post("/questions", (req, res, next) => {
  Questions.create({
    name: "When is Harry Potter's birthday?"
  }),
    Questions.create({
      name: "What is Harry's middle name?"
    }),
    Questions.create({
      name:
        "Which Muggle school was Harry supposed to attend before getting his Hogwarts letter?"
    }),
    Questions.create({
      name: "In which book does Harry find the name for his pet owl, Hedwig?"
    }),
    Questions.create({
      name: "How many birthday cakes did Harry receive when he turned 14?"
    }),
    Questions.create({
      name:
        "Romilda Vane asks if Harry has which creature tattooed on his chest?"
    }),
    Questions.create({
      name:
        "According to Lockhart's 'card-carrying Cupid', Harry's eyes are as green as…"
    }),
    Questions.create({
      name:
        "Which book does Harry think about to distract himself from Aunt Marge’s insults?"
    }),
    Questions.create({
      name: "Who is called as a witness in Harry’s Wizengamot trial?"
    }),
    Questions.create({
      name:
        "Which colour does Polyjuice Potion turn when Harry’s hair is added?"
    })
      .then(req => res.json(req))
      .catch(err => next(err));
});

router.post("/answers", (req, res, next) => {
  // Answers.create(req.body)
  //   .then(response => res.json(response))
  //   .catch(err => next(err));
  // });
  Answers.create({
    name: "30 July 1980",
    correct: "false",
    questionId: 1
  }),
    Answers.create({
      name: "30 July 1981",
      correct: "false",
      questionId: 1
    }),
    Answers.create({
      name: "31 July 1980",
      correct: "true",
      questionId: 1
    }),
    Answers.create({
      name: "31 July 1981",
      correct: "false",
      questionId: 1
    }),
    Answers.create({
      name: "Peter",
      correct: "false",
      questionId: 2
    }),
    Answers.create({
      name: "Sirius",
      correct: "false",
      questionId: 2
    }),
    Answers.create({
      name: "Albus",
      correct: "false",
      questionId: 2
    }),
    Answers.create({
      name: "James",
      correct: "true",
      questionId: 2
    }),
    Answers.create({
      name: "Smeltings",
      correct: "false",
      questionId: 3
    }),
    Answers.create({
      name: "St Brutus’s",
      correct: "false",
      questionId: 3
    }),
    Answers.create({
      name: "Cokeworth High",
      correct: "false",
      questionId: 3
    }),
    Answers.create({
      name: "Stonewall High",
      correct: "true",
      questionId: 3
    }),
    Answers.create({
      name: "Hogwarts: A History",
      correct: "false",
      questionId: 4
    }),
    Answers.create({
      name: "A History of Magic",
      correct: "true",
      questionId: 4
    }),
    Answers.create({
      name: "The Dark Forces: A Guide to Self-Protection",
      correct: "false",
      questionId: 4
    }),
    Answers.create({
      name: "Fantastic Beasts and Where to Find Them",
      correct: "false",
      questionId: 4
    }),
    Answers.create({
      name: "4",
      correct: "true",
      questionId: 5
    }),
    Answers.create({
      name: "5",
      correct: "false",
      questionId: 5
    }),
    Answers.create({
      name: "3",
      correct: "false",
      questionId: 5
    }),
    Answers.create({
      name: "2",
      correct: "false",
      questionId: 5
    }),
    Answers.create({
      name: "Acromantula",
      correct: "false",
      questionId: 6
    }),
    Answers.create({
      name: "Thestral",
      correct: "false",
      questionId: 6
    }),
    Answers.create({
      name: "Hippogriff",
      correct: "true",
      questionId: 6
    }),
    Answers.create({
      name: "Unicorn",
      correct: "false",
      questionId: 6
    }),
    Answers.create({
      name: "An emerald-green cloak",
      correct: "false",
      questionId: 7
    }),
    Answers.create({
      name: "A fresh pickled toad",
      correct: "true",
      questionId: 7
    }),
    Answers.create({
      name: "An Irish Spring morn",
      correct: "false",
      questionId: 7
    }),
    Answers.create({
      name: "A freshly mown lawn",
      correct: "false",
      questionId: 7
    }),
    Answers.create({
      name: "Quidditch Through the Ages",
      correct: "false",
      questionId: 8
    }),
    Answers.create({
      name: "Flying with the Cannons",
      correct: "false",
      questionId: 8
    }),
    Answers.create({
      name: "Handbook of Do-It-Yourself Broomcare",
      correct: "true",
      questionId: 8
    }),
    Answers.create({
      name: "Quidditch Teams of Britain and Ireland",
      correct: "false",
      questionId: 8
    }),
    Answers.create({
      name: "Arthur Weasley",
      correct: "false",
      questionId: 9
    }),
    Answers.create({
      name: "Dobby",
      correct: "false",
      questionId: 9
    }),
    Answers.create({
      name: "Dudley Dursley",
      correct: "false",
      questionId: 9
    }),
    Answers.create({
      name: "Mrs Figg",
      correct: "true",
      questionId: 9
    }),
    Answers.create({
      name: "White",
      correct: "false",
      questionId: 10
    }),
    Answers.create({
      name: "Gold",
      correct: "true",
      questionId: 10
    }),
    Answers.create({
      name: "Red",
      correct: "false",
      questionId: 10
    }),
    Answers.create({
      name: "Green",
      correct: "false",
      questionId: 10
    })
      .then(req => res.json(req))
      .catch(err => next(err));
});

module.exports = router;
