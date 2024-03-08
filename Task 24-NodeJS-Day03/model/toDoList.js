const mongoose = require("mongoose");
const toDoListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  isDone: { type: Boolean, default: false },
  isImportant: { type: Boolean },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("task", toDoListSchema);