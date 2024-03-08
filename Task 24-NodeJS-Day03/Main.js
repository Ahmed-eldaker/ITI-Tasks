const express = require("express");
const app = express();

app.use(express.json()); //for read data not json
const toDoRouter = require("./routes/toDoListRouter");

app.use("/ToDoList", toDoRouter);

const { connect } = require("./DB");

//handel errors
app.use((err, req, res, next) => {
  // console.error(err.message);
  res.status(500).send("Something went wrong!");
});

connect();
//working port
app.listen(5050, () => {
  console.log("running in port 5050");
});
