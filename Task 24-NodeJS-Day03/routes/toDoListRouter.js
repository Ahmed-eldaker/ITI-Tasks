const router = require("express").Router();
const {
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/toDoListController");
router.route("/").get(getTask).post(createTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

module.exports = router;
