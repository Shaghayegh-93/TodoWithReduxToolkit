import React from "react";

const Todo = ({ todo, deletHandler, toggleHandler }) => {
  console.log("todo", todo.title);
  return (
    <div
      className={`flex justify-between border border-gray-400 mb-2  items-center  rounded-lg p-2 ${
        todo.isCompleted ? "line-through" : ""
      }`}
    >
      <div className="flex items-center  ">
        <input
          type="checkbox"
          className="mr-2"
          checked={todo.isCompleted}
          value={todo.id}
          onChange={toggleHandler}
        />
        <p>{todo.title}</p>
      </div>

      <button
        onClick={deletHandler}
        className="text-white bg-rose-700 hover:bg-rose-800  focus:outline-none  font-medium rounded-lg text-sm  px-5 py-2.5  sm:w-auto  text-center "
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
