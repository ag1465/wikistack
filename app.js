const express = require("express");
const morgan = require("morgan");
const Layout = require("./views/layout");
const { db } = require('./models');
const models = require('./models')

const app = express();
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(Layout(""));
});

const PORT = 1337;


db.authenticate().
then(() => {
  console.log('connected to the database');
});

const init = async () => {
  await models.db.User.sync();
  await models.db.Page.sync();
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
init();
