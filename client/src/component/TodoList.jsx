
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleComplete, handleDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
