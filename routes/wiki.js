const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");

router.get("/", (req, res, next) => {
  res.send(`YOU'RE AT GET /WIKI`);
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const title = req.body.title;
  const content = req.body.content;
  const status = req.body.status;
  res.send(res.json(req.body));
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
