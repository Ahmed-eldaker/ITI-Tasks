const task = require("../model/toDoList");

async function getTask(req, res, next) {
  try {
    const tasks = await task.find();
    res.status(201).json(tasks);
  } catch (err) {
    next(err.message);
  }
}
async function createTask(req, res, next) {
  try {
    const newTask = await task.create(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    next(err.message);
  }
}
async function updateTask(req, res, next) {
  console.log("🚀 ~ updateTask ~ req:", req.params.id);
  try {
    const updatedTask = await task.updateOne({ _id: req.params.id }, req.body);
    res.json(updatedTask);
  } catch (err) {
    console.log("🚀 ~ updateTask ~ err:", err);

    next(err.message);
  }
}
async function deleteTask(req, res, next) {
  try {
    const deletedTask = await task.deleteOne({_id:req.params.id});
    res.json(deletedTask);
  } catch (err) {
    next(err.message);
  }
}
module.exports = { getTask, createTask, updateTask, deleteTask };