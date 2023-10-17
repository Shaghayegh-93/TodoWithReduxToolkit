import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  const addHandler = (newTodo) => {
    setTodoList((prev) => [...prev, newTodo]);
  };
  const deletHandler = (id) => {
    let filtredTodo = todoList.filter((todo) => todo.id !== Number(id));
    setTodoList(filtredTodo);
    console.log("click");
  };
  const toggleHandler = (e) => {
    const todoId = Number(e.target.value);
    const newTodoList = todoList.map((todo) =>
      todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodoList(newTodoList);
  };

  return (
    <div className="mt-8 ">
      <h1 className="text-center font-bold text-xl">TodoApp With RTK</h1>

      <TodoForm addHandler={addHandler} />
      <TodoList
        deletHandler={deletHandler}
        todoList={todoList}
        toggleHandler={toggleHandler}
      />
    </div>
  );
};

export default TodoApp;
