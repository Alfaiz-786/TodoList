import Todo from "../model/todo.js";

export const addTodo = async (req, res) => {
  const { name, discription } = req.body;
  try {
    const newTodo = await Todo.create({ name, discription });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTodos = async (req, res) => {
  const page = req.query.page || 1;
  const perPage = 4; 

  try {
    const todos = await Todo.find({})
      .sort({ createdAt: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage);

    const totalCount = await Todo.countDocuments();

    const totalPages = Math.ceil(totalCount / perPage);

    return res.status(200).json({
      todos,
      totalPages,
      currentPage: +page,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


export const updateTodo = async (req, res) => {
  const todoId = req.params.id;
 

  try {
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.complete = !todo.complete;
    await todo.save();

    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const todoId = req.params.id;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
