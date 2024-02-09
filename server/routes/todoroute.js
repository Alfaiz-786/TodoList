import express, { Router } from "express";
import {
  addTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
} from "../controller/todo.js";

const router = express.Router();

router.post("/todos", addTodo);
router.get("/todos", getAllTodos);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
