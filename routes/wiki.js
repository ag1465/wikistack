const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const { Page } = require("../models");



router.get("/", (req, res, next) => {
  res.send(`YOU'RE AT GET /WIKI`);
});

// router.post("/", (req, res, next) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const title = req.body.title;
//   const content = req.body.content;
//   const status = req.body.status;
//   res.send(res.json(req.body));
// });

router.get("/add", (req, res, next) => {
  res.send(addPage());
});
router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

module.exports = router;
