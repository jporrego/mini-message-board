var express = require("express");
var router = express.Router();
const distanceInWords = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    format: distanceInWords,
  });
  console.log(req);
});

/* GET new message form. */
router.get("/new", function (req, res, next) {
  res.render("form");
});

/* POST new message. */
router.post("/new", function (req, res, next) {
  let author = req.body.author;
  let messageText = req.body.message;
  messages.push({ text: messageText, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
