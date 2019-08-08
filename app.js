const express = require("express");
const morgan = require("morgan");
const Layout = require("./views/layout");
// const { db } = require("./models");
const models = require("./models");
const app = express();
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false })); //Parses HTML
app.use(express.json()); //Parses JSON
app.use("/wiki", wikiRouter);

// app.get("/", (req, res) => {
//   res.send(Layout(""));
// });

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

const PORT = 3000;

// db.authenticate().then(() => {
//   console.log("connected to the database");
// });

// const init = async () => {
//   await models.User.sync();
//   await models.Page.sync();
//   app.listen(PORT, () => {
//     console.log(`App listening in port ${PORT}`);
//   });
// };
// init();

const init = async () => {
  await models.db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

init();
