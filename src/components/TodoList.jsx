import React from "react";
import Todo from "./Todo";

const TodoList = ({ deletHandler, todoList, toggleHandler }) => {
  console.log("todoList", todoList);
  return (
    <div className="sm:max-w-xl sm:w-full m-auto p-4 sm:p-0  mt-8">
      <h2 className="text-left">TodoList</h2>
      <ul className="  ">
        {todoList?.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              deletHandler={() => deletHandler(todo.id)}
              toggleHandler={toggleHandler}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
