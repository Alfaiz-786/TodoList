import React from "react";

const TodoItem = ({ todo, handleComplete, handleDelete }) => {
  return (
    <div className={`bg-slate-500 flex items-center p-3 my-3`}>
      <div className="flex w-full">
        <div className="flex-shrink-0">
          <div>
            <h1
              className={`text-3xl font-bold text-amber-400 ${
                todo.complete ? "line-through" : ""
              }`}
            >
              {todo.name}
            </h1>
          </div>
          <div>
            <h1 className={`text-white ${todo.complete ? "line-through" : ""}`}>
              {todo.discription}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-auto">
          <button
            onClick={() => handleComplete(todo._id)}
            className="p-1 text-green-500 bg-white border border-green-500 rounded-3xl hover:bg-green-500 duration-300 hover:text-white"
          >
            Complete
          </button>
          <button
            onClick={() => handleDelete(todo._id)}
            className="p-1 text-red-500 bg-white border border-red-500 rounded-3xl hover:bg-red-500 duration-300 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
