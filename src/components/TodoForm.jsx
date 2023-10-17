import React, { useState } from "react";

const TodoForm = ({ addHandler }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(input)
    const newTodo = {
      title: input,
      id: Date.now(),
      isCompleted: false,
    };
    addHandler(newTodo);
    console.log(newTodo)
    setInput("");
  };
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={submitHandler} className="sm:max-w-xl sm:w-full ">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={input}
          placeholder="Add todo..."
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block  p-2.5 mb-4 w-full"
        />
        <button className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm  px-5 py-2.5 w-full sm:w-auto  text-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
