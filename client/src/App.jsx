// App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import Pagination from "./component/pagination.jsx";
import {
  todoAdd,
  removeTodo,
  toggleComplete,
  allTodos,
} from "./store/todoslice/todoslice";
import { fetchTodos } from "./store/todoslice/todoAction";

function App() {
  const todo = useSelector((state) => state.data.todos);
  const currentPage = useSelector((state) => state.data.currentPage);
  const totalPages = useSelector((state) => state.data.totalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos(currentPage, 4));
  }, [dispatch, currentPage]);

  const handleComplete = async (todoId) => {
    try {
      // await axios.put(`http://localhost:5000/todos/${todoId}`);
      await axios.put(`https://todo-list-api-five.vercel.app/todos/${todoId}`);
      dispatch(toggleComplete(todoId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (todoIdd) => {
    try {
      // await axios.delete(`http://localhost:5000/todos/${todoIdd}`);
      await axios.delete(
        `https://todo-list-api-five.vercel.app/todos/${todoIdd}`
      );
      dispatch(removeTodo(todoIdd));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTodo = async (values, action) => {
    try {
      // const response = await axios.post("http://localhost:5000/todos", {
      //   name: values.name,
      //   discription: values.description,
      // });
      const response = await axios.post(
        "https://todo-list-api-five.vercel.app/todos",
        {
          name: values.name,
          discription: values.description,
        }
      );
      dispatch(todoAdd(response.data));
      action.resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto my-10 rounded-3xl flex-col py-4 h-screen bg-gray-700 shadow-lg p-6">
      <p className="text-white text-3xl font-bold mb-4 text-center">My Todos</p>

      <TodoForm onSubmit={handleAddTodo} />

      <TodoList
        todos={todo.slice(0, 4)}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => dispatch(fetchTodos(currentPage - 1, 4))}
        onNext={() => dispatch(fetchTodos(currentPage + 1, 4))}
      />
    </div>
  );
}

export default App;
