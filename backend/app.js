const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./db/db")
require("./models/user")

// u can also export the model and require here and store it in a contant

// middle ware
// middle ware has 3 arguments next to proceed further
const customMiddleware = (req, res, next) => {
  console.log("middleware");
  next();
};

// app.use(express.json()) executes the middleware for all the routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes/auth'));


// if u want the middleware to be executed only in particular route on use that in that route u want be used
// ex : app.get('/',customMiddleware,(req,res) => {})
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});
