import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  discription: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
