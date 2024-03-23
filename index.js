const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = 3001;
const app = express();

const cwd = process.cwd();
const activity = cwd.includes("BC092523-c13")
  ? cwd.split("BC092523-c13")[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});